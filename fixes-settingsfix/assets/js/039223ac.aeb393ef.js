"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),d=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=n,h=m["".concat(c,".").concat(p)]||m[p]||u[p]||i;return a?r.createElement(h,o(o({ref:t},s),{},{components:a})):r.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},o="Default metrics",l={unversionedId:"re_data/reference/metrics/base_metrics",id:"re_data/reference/metrics/base_metrics",title:"Default metrics",description:"Default metrics are computed for all monitored tables. If you would rather not compute some of them it's easy to change the default metrics list via the redata:defaultmetrics variable.",source:"@site/docs/re_data/reference/metrics/base_metrics.md",sourceDirName:"re_data/reference/metrics",slug:"/re_data/reference/metrics/base_metrics",permalink:"/fixes-settingsfix/docs/re_data/reference/metrics/base_metrics",draft:!1,editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/re_data/reference/metrics/base_metrics.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,dbt_docs_base_url:"https://re-data.github.io/dbt-re-data"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/fixes-settingsfix/docs/re_data/reference/metrics/overview_metric"},next:{title:"Extra Metrics",permalink:"/fixes-settingsfix/docs/re_data/reference/metrics/extra_metrics"}},c={},d=[{value:"table level metrics",id:"table-level-metrics",level:2},{value:"row_count",id:"row_count",level:3},{value:"(source code)",id:"source-code",level:4},{value:"freshness",id:"freshness",level:3},{value:"(source code)",id:"source-code-1",level:4},{value:"schema_changes",id:"schema_changes",level:3},{value:"Column level metrics",id:"column-level-metrics",level:2},{value:"min",id:"min",level:3},{value:"(source code)",id:"source-code-2",level:4},{value:"max",id:"max",level:3},{value:"(source code)",id:"source-code-3",level:4},{value:"avg",id:"avg",level:3},{value:"(source code)",id:"source-code-4",level:4},{value:"stddev",id:"stddev",level:3},{value:"(source code)",id:"source-code-5",level:4},{value:"variance",id:"variance",level:3},{value:"(source code)",id:"source-code-6",level:4},{value:"min_length",id:"min_length",level:3},{value:"(source code) ",id:"source-code-",level:4},{value:"max_length ",id:"max_length-",level:3},{value:"avg_length",id:"avg_length",level:3},{value:"(source code)",id:"source-code-7",level:4},{value:"nulls_count",id:"nulls_count",level:3},{value:"(source code)",id:"source-code-8",level:4},{value:"missing_count",id:"missing_count",level:3},{value:"(source code)",id:"source-code-9",level:4},{value:"missing_percent",id:"missing_percent",level:3},{value:"(source code)",id:"source-code-10",level:4},{value:"nulls_percent",id:"nulls_percent",level:3},{value:"(source code)",id:"source-code-11",level:4}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"default-metrics"},"Default metrics"),(0,n.kt)("p",null,"Default metrics are computed for all monitored tables. If you would rather not compute some of them it's easy to change the default metrics list via the ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data:default_metrics")," variable."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="Sample table for example metrics"',title:'"Sample',table:!0,for:!0,example:!0,'metrics"':!0},"__      title               rental_rate rating      created_at\n1       Chamber Italian     4.99        NC-17       2021-09-01T11:00:00\n2       Grosse Wonderful    4.99        R           2021-09-01T12:00:00\n3       Airport Pollock     4.99        R           2021-09-01T15:00:00\n4       Bright Encounters   4.99        PG-13       2021-09-01T09:00:00\n5       Academy Dinosaur    0.99        PG-13       2021-09-01T08:00:00\n6       Ace Goldfinger      4.99        G           2021-09-01T10:00:00\n7       Adaptation Holes    2.99        NC-17       2021-09-01T11:00:00\n8       Affair Prejudice    2.99        G           2021-09-01T19:00:00\n9       African Egg         2.99        G           2021-09-01T20:00:00\n10      Agent Truman        2.99        PG          2021-09-01T07:00:00\n11      Airplane Sierra     4.99        PG-13       2021-09-02T09:00:00\n12      Alabama Devil       2.99        PG-13       2021-09-02T10:00:00\n13      Aladdin Calendar    4.99        NC-17       2021-09-02T11:00:00\n14      Alamo Videotape     0.99        G           2021-09-02T12:00:00\n15      Alaska Phantom      0.99        PG          2021-09-02T13:00:00\n16      Date Speed          0.99        R           2021-09-02T14:00:00\n17      Ali Forever         4.99        PG          2021-09-02T15:00:00\n18      Alice Fantasia      0.99        NC-17       2021-09-02T16:00:00\n19      Alien Center        2.99        NC-17       2021-09-02T17:00:00\n")),(0,n.kt)("p",null,"Below is a list of currently available metrics and how they are computed internally by re_data:"),(0,n.kt)("h2",{id:"table-level-metrics"},"table level metrics"),(0,n.kt)("h3",{id:"row_count"},"row_count"),(0,n.kt)("h4",{id:"source-code"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_row_count"},"(source code)")),(0,n.kt)("p",null,"Numbers of rows added to the table in a specific time range."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"row_count = 10 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"freshness"},"freshness"),(0,n.kt)("h4",{id:"source-code-1"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_freshness"},"(source code)")),(0,n.kt)("p",null,"Information about the latest record in a given time frame. Suppose we calculate the ",(0,n.kt)("inlineCode",{parentName:"p"},"freshness")," metric in the table above for the time window ",(0,n.kt)("inlineCode",{parentName:"p"},"[2021-09-01T00:00:00, 2021-09-02T00:00:00)"),". We observe that the latest record\nin that time frame appears in row 9 with ",(0,n.kt)("inlineCode",{parentName:"p"},"created_at=2021-09-01T20:00:00"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"freshness")," is the difference between the end of the time window and the latest record in the time frame in seconds. For this example described, re_data would calculate freshness as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"2021-09-02T00:00:00 - 2021-09-01T20:00:00 = 14400\n")),(0,n.kt)("h3",{id:"schema_changes"},"schema_changes"),(0,n.kt)("p",null,"Information about schema changes in the monitored table."),(0,n.kt)("p",null,"Stored separately from the rest of the metrics in the ",(0,n.kt)("inlineCode",{parentName:"p"},"re_data_schema_changes")," model."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Schema changes are metric different from the rest.\nBecause information about schema changes is gathered by comparing schemas\nbetween re_data runs this metric ",(0,n.kt)("strong",{parentName:"p"},"doesn't")," filter changes to time-window specified and\nin fact, ",(0,n.kt)("strong",{parentName:"p"},"doesn't")," use time_window settings at all.")),(0,n.kt)("h2",{id:"column-level-metrics"},"Column level metrics"),(0,n.kt)("h3",{id:"min"},"min"),(0,n.kt)("h4",{id:"source-code-2"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min"},"(source code)")),(0,n.kt)("p",null,"Minimal value appearing in a given numeric column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"min(rental_rate) = 0.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"max"},"max"),(0,n.kt)("h4",{id:"source-code-3"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max"},"(source code)")),(0,n.kt)("p",null,"Maximal value appearing in a given numeric column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"max(rental_rate) = 4.99 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"avg"},"avg"),(0,n.kt)("h4",{id:"source-code-4"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg"},"(source code)")),(0,n.kt)("p",null,"Average of all values appearing in a given numeric column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"avg(rental_rate) = 3.79 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"stddev"},"stddev"),(0,n.kt)("h4",{id:"source-code-5"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_stddev"},"(source code)")),(0,n.kt)("p",null,"The standard deviation of all values appearing in a given numeric column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"stddev(rental_rate) = 1.3984117975602022 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"variance"},"variance"),(0,n.kt)("h4",{id:"source-code-6"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_variance"},"(source code)")),(0,n.kt)("p",null,"The variance of all values appearing in a given numeric column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"variance(rental_rate) = 1.9555555555555557 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"min_length"},"min_length"),(0,n.kt)("h4",{id:"source-code-"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_min_length"},"(source code) ")),(0,n.kt)("p",null,"Minimal length of all strings appearing in a given column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"min_length(rating) = 1 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"max_length-"},(0,n.kt)("a",{parentName:"h3",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_max_length"},"max_length ")),(0,n.kt)("p",null,"Maximal length of all strings appearing in a given column"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"max_length(rating) = 5 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"avg_length"},"avg_length"),(0,n.kt)("h4",{id:"source-code-7"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_avg_length"},"(source code)")),(0,n.kt)("p",null,"The average length of all strings appearing in a given column"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"avg_length(rating) = 2.4 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"nulls_count"},"nulls_count"),(0,n.kt)("h4",{id:"source-code-8"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_count"},"(source code)")),(0,n.kt)("p",null,"A number of nulls in a given column."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nulls_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"missing_count"},"missing_count"),(0,n.kt)("h4",{id:"source-code-9"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_count"},"(source code)")),(0,n.kt)("p",null,"A number of nulls and empty string values in a given column for the specific time range."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"missing_count(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"missing_percent"},"missing_percent"),(0,n.kt)("h4",{id:"source-code-10"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_missing_percent"},"(source code)")),(0,n.kt)("p",null,"A percentage of nulls and empty string values in a given column for the specific time range."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"missing_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")),(0,n.kt)("h3",{id:"nulls_percent"},"nulls_percent"),(0,n.kt)("h4",{id:"source-code-11"},(0,n.kt)("a",{parentName:"h4",href:"https://re-data.github.io/dbt-re-data/#!/macro/macro.re_data.re_data_metric_nulls_percent"},"(source code)")),(0,n.kt)("p",null,"A percentage of null values in a given column for the specific time range."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nulls_percent(rating) = 0 where time window is >= 2021-09-01T00:00:00 and < 2021-09-02T00:00:00\n")))}m.isMDXComponent=!0}}]);