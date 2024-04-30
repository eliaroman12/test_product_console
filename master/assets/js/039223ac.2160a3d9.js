"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[116],{5680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>p});var r=t(6540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),d=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=d(e.components);return r.createElement(c.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=n,p=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return t?r.createElement(p,o(o({ref:a},s),{},{components:t})):r.createElement(p,o({ref:a},s))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=g;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6952:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(8168),n=(t(6540),t(5680));const i={sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},o="Default metrics",l={unversionedId:"re_data/reference/metrics/base_metrics",id:"re_data/reference/metrics/base_metrics",title:"Default metrics",description:"Default metrics are computed for all monitored tables. If you would rather not compute some of them it's easy to change the default metrics list via the redata:defaultmetrics variable.",source:"@site/docs/re_data/reference/metrics/base_metrics.md",sourceDirName:"re_data/reference/metrics",slug:"/re_data/reference/metrics/base_metrics",permalink:"/master/docs/re_data/reference/metrics/base_metrics",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/metrics/base_metrics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/master/docs/re_data/reference/metrics/overview_metric"},next:{title:"Extra Metrics",permalink:"/master/docs/re_data/reference/metrics/extra_metrics"}},c={},d=[{value:"table level metrics",id:"table-level-metrics",level:2},{value:"row_count",id:"row_count",level:3},{value:"(source code)",id:"source-code",level:4},{value:"freshness",id:"freshness",level:3},{value:"(source code)",id:"source-code-1",level:4},{value:"schema_changes",id:"schema_changes",level:3},{value:"Column level metrics",id:"column-level-metrics",level:2},{value:"min",id:"min",level:3},{value:"(source code)",id:"source-code-2",level:4},{value:"max",id:"max",level:3},{value:"(source code)",id:"source-code-3",level:4},{value:"avg",id:"avg",level:3},{value:"(source code)",id:"source-code-4",level:4},{value:"stddev",id:"stddev",level:3},{value:"(source code)",id:"source-code-5",level:4},{value:"variance",id:"variance",level:3},{value:"(source code)",id:"source-code-6",level:4},{value:"min_length",id:"min_length",level:3},{value:"(source code) ",id:"source-code-",level:4},{value:"max_length ",id:"max_length-",level:3},{value:"avg_length",id:"avg_length",level:3},{value:"(source code)",id:"source-code-7",level:4},{value:"nulls_count",id:"nulls_count",level:3},{value:"(source code)",id:"source-code-8",level:4},{value:"missing_count",id:"missing_count",level:3},{value:"(source code)",id:"source-code-9",level:4},{value:"missing_percent",id:"missing_percent",level:3},{value:"(source code)",id:"source-code-10",level:4},{value:"nulls_percent",id:"nulls_percent",level:3},{value:"(source code)",id:"source-code-11",level:4},{value:"count_true",id:"count_true",level:3},{value:"(source code)",id:"source-code-12",level:4},{value:"count_false",id:"count_false",level:3},{value:"(source code)",id:"source-code-13",level:4}],s={toc:d},u="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"default-metrics"},"Default metrics"),(0,n.yg)("p",null,"Default metrics are computed for all monitored tables. If you would rather not compute some of them it's easy to change the default metrics list via the ",(0,n.yg)("inlineCode",{parentName:"p"},"re_data:default_metrics")," variable."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-csv",metastring:'title="Sample table for example metrics"',title:'"Sample',table:!0,for:!0,example:!0,'metrics"':!0},"__      title               rental_rate rating      created_at             is_available\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00    true\n2       Grosse Wonderful    4.99        R           2021-09-01T12:00:00    true\n3       Airport Pollock     4.99        R           2021-09-01T15:00:00    false\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00    true\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00    false\n6       Ace Goldfinger      4.99        G           2021-09-01T10:00:00    false\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00    true\n8       Affair Prejudice    2.99        G           2021-09-01T19:00:00    true\n9       African Egg         2.99        G           2021-09-01T20:00:00    true\n10      Agent Truman        2.99        PG          2021-09-01T07:00:00    false\n11      Airplane Sierra     4.99        PG-13       2021-09-02T09:00:00    true\n12      Alabama Devil       2.99        PG-13       2021-09-02T10:00:00    false\n13      Aladdin Calendar    4.99        NC-17       2021-09-02T11:00:00    false\n14      Alamo Videotape     0.99        G           2021-09-02T12:00:00    false\n15      Alaska Phantom      0.99        PG          2021-09-02T13:00:00    true\n16      Date Speed          0.99        R           2021-09-02T14:00:00    true\n17      Ali Forever         4.99        PG          2021-09-02T15:00:00    true\n18      Alice Fantasia      0.99        NC-17       2021-09-02T16:00:00    true\n19      Alien Center        2.99        NC-17       2021-09-02T17:00:00    true\n")),(0,n.yg)("p",null,"Below is a list of currently available metrics and how they are computed internally by re_data:"),(0,n.yg)("h2",{id:"table-level-metrics"},"table level metrics"),(0,n.yg)("h3",{id:"row_count"},"row_count"),(0,n.yg)("h4",{id:"source-code"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_row_count"},"(source code)")),(0,n.yg)("p",null,"Numbers of rows added to the table in a specific time range."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"row_count = 10 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"freshness"},"freshness"),(0,n.yg)("h4",{id:"source-code-1"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_freshness"},"(source code)")),(0,n.yg)("p",null,"Information about the latest record in a given time frame. Suppose we calculate the ",(0,n.yg)("inlineCode",{parentName:"p"},"freshness")," metric in the table above for the time window ",(0,n.yg)("inlineCode",{parentName:"p"},"[2021-09-01T00:00:00, 2021-09-02T00:00:00)"),". We observe that the latest record\nin that time frame appears in row 9 with ",(0,n.yg)("inlineCode",{parentName:"p"},"created_at=2021-09-01T20:00:00"),". ",(0,n.yg)("inlineCode",{parentName:"p"},"freshness")," is the difference between the end of the time window and the latest record in the time frame in seconds. For this example described, re_data would calculate freshness as:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"2021-09-02T00:00:00 - 2021-09-01T20:00:00 = 14400\n")),(0,n.yg)("h3",{id:"schema_changes"},"schema_changes"),(0,n.yg)("p",null,"Information about schema changes in the monitored table."),(0,n.yg)("p",null,"Stored separately from the rest of the metrics in the ",(0,n.yg)("inlineCode",{parentName:"p"},"re_data_schema_changes")," model."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Schema changes are metric different from the rest.\nBecause information about schema changes is gathered by comparing schemas\nbetween re_data runs this metric ",(0,n.yg)("strong",{parentName:"p"},"doesn't")," filter changes to time-window specified and\nin fact, ",(0,n.yg)("strong",{parentName:"p"},"doesn't")," use time_window settings at all.")),(0,n.yg)("h2",{id:"column-level-metrics"},"Column level metrics"),(0,n.yg)("h3",{id:"min"},"min"),(0,n.yg)("h4",{id:"source-code-2"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min"},"(source code)")),(0,n.yg)("p",null,"Minimal value appearing in a given numeric column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"min(rental_rate) = 0.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"max"},"max"),(0,n.yg)("h4",{id:"source-code-3"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max"},"(source code)")),(0,n.yg)("p",null,"Maximal value appearing in a given numeric column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"max(rental_rate) = 4.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"avg"},"avg"),(0,n.yg)("h4",{id:"source-code-4"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg"},"(source code)")),(0,n.yg)("p",null,"Average of all values appearing in a given numeric column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"avg(rental_rate) = 3.79 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"stddev"},"stddev"),(0,n.yg)("h4",{id:"source-code-5"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_stddev"},"(source code)")),(0,n.yg)("p",null,"The standard deviation of all values appearing in a given numeric column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"stddev(rental_rate) = 1.3984117975602022 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"variance"},"variance"),(0,n.yg)("h4",{id:"source-code-6"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_variance"},"(source code)")),(0,n.yg)("p",null,"The variance of all values appearing in a given numeric column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"variance(rental_rate) = 1.9555555555555557 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"min_length"},"min_length"),(0,n.yg)("h4",{id:"source-code-"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min_length"},"(source code) ")),(0,n.yg)("p",null,"Minimal length of all strings appearing in a given column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"min_length(rating) = 1 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"max_length-"},(0,n.yg)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max_length"},"max_length ")),(0,n.yg)("p",null,"Maximal length of all strings appearing in a given column"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"max_length(rating) = 5 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"avg_length"},"avg_length"),(0,n.yg)("h4",{id:"source-code-7"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg_length"},"(source code)")),(0,n.yg)("p",null,"The average length of all strings appearing in a given column"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"avg_length(rating) = 2.4 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"nulls_count"},"nulls_count"),(0,n.yg)("h4",{id:"source-code-8"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_count"},"(source code)")),(0,n.yg)("p",null,"A number of nulls in a given column."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"nulls_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"missing_count"},"missing_count"),(0,n.yg)("h4",{id:"source-code-9"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_count"},"(source code)")),(0,n.yg)("p",null,"A number of nulls and empty string values in a given column for the specific time range."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"missing_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"missing_percent"},"missing_percent"),(0,n.yg)("h4",{id:"source-code-10"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_percent"},"(source code)")),(0,n.yg)("p",null,"A percentage of nulls and empty string values in a given column for the specific time range."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"missing_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"nulls_percent"},"nulls_percent"),(0,n.yg)("h4",{id:"source-code-11"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_percent"},"(source code)")),(0,n.yg)("p",null,"A percentage of null values in a given column for the specific time range."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"nulls_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"count_true"},"count_true"),(0,n.yg)("h4",{id:"source-code-12"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_count_true"},"(source code)")),(0,n.yg)("p",null,"The total count of ",(0,n.yg)("inlineCode",{parentName:"p"},"true")," values in a given boolean column for the specific time range."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"count_true(is_available) = 12 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.yg)("h3",{id:"count_false"},"count_false"),(0,n.yg)("h4",{id:"source-code-13"},(0,n.yg)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_count_false"},"(source code)")),(0,n.yg)("p",null,"The total count of ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," values in a given boolean column for the specific time range."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"count_false(is_available) = 7 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n\n")))}m.isMDXComponent=!0}}]);