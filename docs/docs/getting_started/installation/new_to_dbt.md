---
sidebar_position: 2
---

# Installation for starters

You are not using dbt in your company but would like to try to re_data.

**Excellent choice!** re_data can help you with data quality and is a good way to start using dbt in your organization, even if you are:
 - not yet ready to switch,
 - happy with the current way of transforming data. 

## Install re_data package

For the new users we recommend starting with installing re_data package in your python environment

```bash
pip install re_data
```

re_data includes dbt-core in dependencies so after this step you will already have it installed in your system. But in order to use dbt for your specific db you need to install dbt-postgres, dbt-snowflake, dbt-redshift, dbt-bigquery python package.

## Init your dbt project

After intallation you can initialize your project.

```bash
re_data init project_name
```

## Setup you db connection

dbt stores connection details for your db in `~/.dbt/profiles.yml`. Example setup for postgres below:

```yml title=~/.dbt/profiles.yml
project_name:
  target: dev
  outputs:
    dev:
      type: postgres
      host: xxx
      user: xxx
      password: xxx
      port: 5432
      dbname: xxx
      schema: project_name
      threads: 4
```

More details on how to set up a profile file for your DB can be found in [dbt docs](https://docs.getdbt.com/dbt-cli/configure-your-profile)

## Adding tables to your dbt project

Once you have the dbt project setup and a working connection with the data warehouse, you will need to add your current tables to your dbt project.

The easiest way to do that, assuming you don't want to add additional tables or views in your database, is to add tables you would like to monitor as dbt sources.

Assuming you have tables in your `schema_name` schema, this would be the configuration you would need to set up in dbt.

```title=sources/schema.yml
sources:
  - name: schema_name
    tables:
      - name: table_name1
      - name: table_name2
      - name: table_name3
```

More details on configuring sources can be found in dbt documentation [here](https://docs.getdbt.com/docs/building-a-dbt-project/using-sources)

Once you add these tables and make them visible in the dbt project (the one created by re_data), you can start monitoring your tables in re_data.

re_data dbt source configuration needs to be your into your `dbt_project.yml`. Here is example of sources configuration in re_data.


```title=dbt_project.yml
sources:
  project_name:
    db_schema:
      table_name1:
        +re_data_monitored: true
        +re_data_time_filter: joined_at
      table_name1:
        +re_data_monitored: true
        +re_data_time_filter: joined_at
```

After creating this configuration, you should be ready to compute re_data models containing metrics & anomalies of your tables. 

We still recommend to follow introduction for **[dbt users](getting_started/toy_shop/toy_shop_data)** and our **[example toyshop tutorial 😊](getting_started/toy_shop/toy_shop_data)** for more details on 