from sqlalchemy import create_engine
from sqlalchemy.schema import MetaData
from redata import settings
from sqlalchemy.orm import sessionmaker
from redata.backends.postgrsql import Postgres
from redata.backends.mysql import MySQL
from redata.backends.exasol import Exasol
from urllib.parse import urlparse

def parse_exasol_url(url):
    # Parse exa+pyexasol://user:password@hostname:port/schema
    params = urlparse(url)

    default_schema = params.path.strip('/')
    port = params.port or '8563'

    assert params.scheme == 'exa+pyexasol', f"invalid url for Exasol connection: {url}"
    assert params.hostname is not None, f"bad connection URL, missing hostname: {url}"
    assert params.username is not None, f"bad connection URL, missing username: {url}"
    assert params.password is not None, f"bad connection URL, missing password: {url}"
    assert len(default_schema) > 0, f"bad connection URL, missing default schema: {url}"

    return dict(
        dsn=f"{params.hostname}:{port}",
        user=params.username,
        password=params.password,
        schema=default_schema
    )


def get_db_object(db_source):
    db_url = db_source['db_url']

    if db_url.startswith('exa+pyexasol'):
        return Exasol(db_source['name'], parse_exasol_url(db_url))

    db = create_engine(db_url)

    if db_url.startswith('postgres'):
        return Postgres(db_source['name'], db)

    if db_url.startswith('mysql'):
        return MySQL(db_source['name'], db)
    
    raise Exception('Not supported DB')
    

def get_metrics_connection():
    db_string = settings.METRICS_DB_URL
    db = create_engine(db_string)
    return db

source_dbs = [
    get_db_object(source_db)
    for source_db in settings.REDATA_SOURCE_DBS
]

metrics_db = get_metrics_connection()

metadata = MetaData()
metadata.reflect(bind=metrics_db)

MetricsSession = sessionmaker(bind=metrics_db)
metrics_session = MetricsSession()

def get_current_table_schema(db, table_name):
    result = db.execute(f"""
        SELECT 
            column_name, 
            data_type 
        FROM 
            information_schema.columns
        WHERE 
            table_name = '{table_name}';
    """)
    
    all_cols = list(result)
    schema_cols =  [ {'name': c_name, 'type': c_type} for c_name, c_type in all_cols]
    return schema_cols
