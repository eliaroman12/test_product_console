"""Add drop cascade

Revision ID: ae9157e8b94c
Revises: 9bdab56c899b
Create Date: 2021-03-30 11:28:46.068801

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "ae9157e8b94c"
down_revision = "9bdab56c899b"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint("checks_table_id_fkey", "checks", type_="foreignkey")
    op.create_foreign_key(
        None, "checks", "monitored_table", ["table_id"], ["id"], ondelete="CASCADE"
    )
    op.drop_constraint("metric_check_id_fkey", "metric", type_="foreignkey")
    op.drop_constraint("metric_table_id_fkey", "metric", type_="foreignkey")
    op.create_foreign_key(
        None, "metric", "monitored_table", ["table_id"], ["id"], ondelete="CASCADE"
    )
    op.create_foreign_key(
        None, "metric", "checks", ["check_id"], ["id"], ondelete="CASCADE"
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, "metric", type_="foreignkey")
    op.drop_constraint(None, "metric", type_="foreignkey")
    op.create_foreign_key(
        "metric_table_id_fkey", "metric", "monitored_table", ["table_id"], ["id"]
    )
    op.create_foreign_key(
        "metric_check_id_fkey", "metric", "checks", ["check_id"], ["id"]
    )
    op.drop_constraint(None, "checks", type_="foreignkey")
    op.create_foreign_key(
        "checks_table_id_fkey", "checks", "monitored_table", ["table_id"], ["id"]
    )
    # ### end Alembic commands ###
