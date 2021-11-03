---
sidebar_position: 3
---

# Data Normalization

Data normalization refers to a process wherein data within a dataset is reorganized in such a way so that users can properly utilize that dataset for further queries and analysis. 

re_data provides the following macros for normalization. Check out the list of data normalization macros and let us know if you could use some different ones on **[Slack 😊](https://www.getre.io/slack)** or **[Github](https://github.com/re-data/re-data/issues/new?assignees=&labels=&template=feature_request.md&title=%5BFEATURE%5D)**.
## [normalize_values](https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.normalize_values)
*Arguments:*
- *source_relation: The model that contains the column in which the normalization would be performed on.*
- *column: The column name or column expression to be normalized.*
- *reference_table: A pair of source and target values used for normalization. This could either be a dbt model, a common table expression or a dictionary. Note that for dbt models and cte, the `source` and `target` column must exist for the macro to work properly.*

This macro adds a new column to the source relation using the format column_name + '__normalized'. This column contains the transformation from source to target.

Let's say we have a table that contains US states in the abbreviated format and the corresponding state code. We might want to have the full names of each state for better presentation by reporting tools.

```sql
{% set us_states_mapping = {'Ala.': 'Alabama', 'Alaska': 'Alaska', 'Ariz.': 'Arizona',
    'Ark.': 'Arkansas', 'Calif.': 'California', 'Colo.': 'Colorado'} 
%}

=> select state, code, state__normalized from {{ re_data.normalize_values(ref('abbreviated_us_states'), 'state', us_states_mapping)

  state  |  code   |   state__normalized    |
--------------------------------------------+
 Ala.    |  AL     |    Alabama             |
 Ariz.   |  AZ     |    Arizona             |
 Ark.    |  AR     |    Arkansas            |
 Calif   |  CA     |    California          |
 Colo.   |  CO     |    Colorado            |

```

```csv title="abbreviated_us_states"
state,code
Ala.,AL
Alaska,AK
Ariz.,AZ
Ark.,AR
Calif.,CA
Colo.,CO
Conn.,CT
Del.,DE
D.C.,DC
Fla.,FL
Ga.,GA
Hawaii,HI
Idaho,ID
Ill.,IL
Ind.,IN
Iowa,IA
Kans.,KS
Ky.,KY
La.,LA
Maine,ME
Md.,MD
Mass.,MA
Mich.,MI
Minn.,MN
Miss.,MS
Mo.,MO
Mont.,MT
Nebr.,NE
Nev.,NV
N.H.,NH
N.J.,NJ
N.M.,NM
N.Y.,NY
N.C.,NC
N.D.,ND
Ohio,OH
Okla.,OK
Ore.,OR
Pa.,PA
R.I.,RI
S.C.,SC
S.D.,SD
Tenn.,TN
Tex.,TX
Utah,UT
Vt.,VT
Va.,VA
Wash.,WA
W.Va.,WV
Wis.,WI
Wyo.,WY
```

Below is a mapping from abbreviation to full state name. We can utilize this to normalize the table above.
```csv title="us_states_normalization"
source,target
Ala.,Alabama
Alaska,Alaska
Ariz.,Arizona
Ark.,Arkansas
Calif.,California
Colo.,Colorado
Conn.,Connecticut
Del.,Delaware
D.C.,District of Columbia
Fla.,Florida
Ga.,Georgia
Hawaii,Hawaii
Idaho,Idaho
Ill.,Illinois
Ind.,Indiana
Iowa,Iowa
Kans.,Kansas
Ky.,Kentucky
La.,Louisiana
Maine,Maine
Md.,Maryland
Mass.,Massachusetts
Mich.,Michigan
Minn.,Minnesota
Miss.,Mississippi
Mo.,Missouri
Mont.,Montana
Nebr.,Nebraska
Nev.,Nevada
N.H.,New Hampshire
N.J.,New Jersey
N.M.,New Mexico
N.Y.,New York
N.C.,North Carolina
N.D.,North Dakota
Ohio,Ohio
Okla.,Oklahoma
Ore.,Oregon
Pa.,Pennsylvania
R.I.,Rhode Island
S.C.,South Carolina
S.D.,South Dakota
Tenn.,Tennessee
Tex.,Texas
Utah,Utah
Vt.,Vermont
Va.,Virginia
Wash.,Washington
W.Va.,West Virginia
Wis.,Wisconsin
Wyo.,Wyoming
```

The pair of source and target values could be provided by a dbt model. An added advantage is that such mappings could be stored in the repo and loaded into the warehouse using the `dbt seed` command
```sql title="Using DBT model"
select state, code, state__normalized from {{ re_data.normalize_values(ref('abbreviated_us_states'), 'state', ref('us_states_normalization')) }} s
```

The pair of source and target could also be provided via a common table expression.
```sql title="Using a common table expression"
with us_states_normalization_cte as (
    select source, target from {{ ref('us_states_normalization') }}
)

select state, code, state__normalized from {{ re_data.normalize_values(ref('abbreviated_us_states'), 'state', 'us_states_normalization_cte') }} s
```

For smaller mappings, re_data allows you to pass a dictionary mapping source to target where source is the key and target is the value in the dictionary.
```sql title="Using a dictionary mapping"
{% set us_states_mapping = {'Ala.': 'Alabama', 'Alaska': 'Alaska', 'Ariz.': 'Arizona', 'Ark.': 'Arkansas', 'Calif.': 'California', 'Colo.': 'Colorado', 'Conn.': 'Connecticut',
    'Del.': 'Delaware', 'D.C.': 'District of Columbia', 'Fla.': 'Florida', 'Ga.': 'Georgia', 'Hawaii': 'Hawaii', 'Idaho': 'Idaho', 'Ill.': 'Illinois', 'Ind.': 'Indiana',
    'Iowa': 'Iowa', 'Kans.': 'Kansas', 'Ky.': 'Kentucky', 'La.': 'Louisiana', 'Maine': 'Maine', 'Md.': 'Maryland', 'Mass.': 'Massachusetts', 'Mich.': 'Michigan',
    'Minn.': 'Minnesota', 'Miss.': 'Mississippi', 'Mo.': 'Missouri', 'Mont.': 'Montana', 'Nebr.': 'Nebraska', 'Nev.': 'Nevada', 'N.H.': 'New Hampshire', 'N.J.': 'New Jersey',
    'N.M.': 'New Mexico', 'N.Y.': 'New York', 'N.C.': 'North Carolina', 'N.D.': 'North Dakota', 'Ohio': 'Ohio', 'Okla.': 'Oklahoma', 'Ore.': 'Oregon', 'Pa.': 'Pennsylvania',
    'R.I.': 'Rhode Island', 'S.C.': 'South Carolina', 'S.D.': 'South Dakota', 'Tenn.': 'Tennessee', 'Tex.': 'Texas', 'Utah': 'Utah', 'Vt.': 'Vermont', 'Va.': 'Virginia',
    'Wash.': 'Washington', 'W.Va.': 'West Virginia', 'Wis.': 'Wisconsin', 'Wyo.': 'Wyoming'}
%}

select state, code, state__normalized from {{ re_data.normalize_values(ref('abbreviated_us_states'), 'state', us_states_mapping)
```

Using either of the 3 methods above gives the following as the result
```csv title="expected_normalized_values"
state,code,state__normalized
Ariz.,AZ,Arizona
Ind.,IN,Indiana
La.,LA,Louisiana
W.Va.,WV,West Virginia
Nebr.,NE,Nebraska
Pa.,PA,Pennsylvania
Iowa,IA,Iowa
N.H.,NH,New Hampshire
S.C.,SC,South Carolina
Ore.,OR,Oregon
Conn.,CT,Connecticut
R.I.,RI,Rhode Island
Minn.,MN,Minnesota
D.C.,DC,District of Columbia
Wyo.,WY,Wyoming
Hawaii,HI,Hawaii
Wash.,WA,Washington
N.D.,ND,North Dakota
Mass.,MA,Massachusetts
N.Y.,NY,New York
N.M.,NM,New Mexico
Colo.,CO,Colorado
Ohio,OH,Ohio
Idaho,ID,Idaho
Ala.,AL,Alabama
Ark.,AR,Arkansas
S.D.,SD,South Dakota
Mo.,MO,Missouri
N.J.,NJ,New Jersey
Miss.,MS,Mississippi
Kans.,KS,Kansas
Vt.,VT,Vermont
Calif.,CA,California
Mich.,MI,Michigan
Alaska,AK,Alaska
Nev.,NV,Nevada
Okla.,OK,Oklahoma
Tenn.,TN,Tennessee
Ga.,GA,Georgia
Wis.,WI,Wisconsin
Ky.,KY,Kentucky
N.C.,NC,North Carolina
Mont.,MT,Montana
Fla.,FL,Florida
Va.,VA,Virginia
Tex.,TX,Texas
Md.,MD,Maryland
Utah,UT,Utah
Maine,ME,Maine
Del.,DE,Delaware
Ill.,IL,Illinois
```