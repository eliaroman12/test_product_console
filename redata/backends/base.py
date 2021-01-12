from datetime import date, datetime

class DB(object):
    def __init__(self, name, db):
        self.name = name
        self.db = db

    def execute(self, *args, **kwargs):
        return self.db.execute(*args, **kwargs)

    def get_max_timestamp(self, table, column):
        result = self.db.execute(f'SELECT max({column}) as value FROM "{table.table_name}"').first()
        return self.ensure_datetime(result.value)

    def is_numeric(self, col_type):
        return col_type in self.numeric_types()

    def is_character(self, col_type):
        return col_type in self.character_types()

    @staticmethod
    def ensure_datetime(d):
        if isinstance(d, datetime):
            return d
        elif isinstance(d, date):
            return datetime(d.year, d.month, d.day)
        else:
            raise TypeError("argument must be date or datetime")
