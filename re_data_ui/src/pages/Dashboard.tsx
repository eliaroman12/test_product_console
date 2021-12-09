import React, {ReactElement, useEffect, useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {Outlet} from 'react-router-dom';
import {
    AggregatedAlerts,
    AggregatedMetrics, Anomaly,
    Metric,
    OverviewData,
    RedataOverviewContext, SchemaChange
} from "../contexts/redataOverviewContext";
import dayjs from "dayjs";
import {RE_DATA_OVERVIEW_FILE, stripQuotes} from "../utils/helpers";

interface RawOverviewData {
    anomalies: string | null;
    metrics: string | null;
    schema_changes: string | null;
    graph: string;
    table_schema: string;
    generated_at: string;
}

const extractMetrics = (overview: OverviewData): Map<string, AggregatedMetrics> => {
    const metrics = overview.metrics;
    const finalOverview: Map<string, AggregatedMetrics> = new Map();
    for (const metric of metrics) {
        const tableName = stripQuotes(metric.table_name);
        const columnName = stripQuotes(metric.column_name);
        const metricName = stripQuotes(metric.metric);
        if (!finalOverview.has(tableName)) {
            finalOverview.set(tableName, {
                tableMetrics: new Map<string, Array<Metric>>(),
                columnMetrics: new Map<string, Array<Metric>>(),
            });
        }
        const metricMap = (finalOverview.get(tableName)!);
        if (!columnName) { // table metric
            // use _ as placeholder for column name that doesn't exist in table metrics, so we can have a uniform key structure
            const key = `${tableName}._.${metricName}`;
            if (metricMap.tableMetrics.has(key)) {
                (metricMap.tableMetrics.get(key)!).push(metric);
            } else {
                metricMap.tableMetrics.set(key, [metric]);
            }
        } else {
            const key = `${tableName}.${columnName}.${metricName}`;
            if (metricMap.columnMetrics.has(key)) {
                (metricMap.columnMetrics.get(key)!).push(metric);
            } else {
                metricMap.columnMetrics.set(key, [metric]);
            }
        }
    }
    // loop through each table/model and sort by ascending order by time_window_end for table and column metrics
    for (const metricMap of finalOverview.values()) {
        for (const [key, metrics] of metricMap.tableMetrics) {
            const sortedMetrics = metrics.sort((a: Metric, b: Metric) => dayjs(a.time_window_end).diff(b.time_window_end));
            metricMap.tableMetrics.set(key, sortedMetrics);
        }
        for (const [key, metrics] of metricMap.columnMetrics) {
            const sortedMetrics = metrics.sort((a: Metric, b: Metric) => dayjs(a.time_window_end).diff(b.time_window_end));
            metricMap.columnMetrics.set(key, sortedMetrics);
        }
    }
    return finalOverview;
};

const prepareAlerts = (overview: OverviewData): Map<string, AggregatedAlerts> => {
    const anomalies = overview.anomalies;
    const schemaChanges = overview.schema_changes;
    // const tableSchema = overview.table_schema;
    const alerts = new Map<string, AggregatedAlerts>();
    // group anomalies under `table_name`
    for (const anomaly of anomalies) {
        const model = stripQuotes(anomaly.table_name);
        anomaly.last_value = Number(anomaly.last_value);
        const columnName = anomaly.column_name ? anomaly.column_name : '_';
        if (!alerts.has(model)) {
            const obj: AggregatedAlerts = {
                anomalies: new Map<string, Array<Anomaly>>(),
                schemaChanges: new Map<string, Array<SchemaChange>>(),
                tableSchema: []
            }
            alerts.set(model, obj)
        }
        const anomalyMap = (alerts.get(model)!).anomalies;
        if (!anomalyMap.has(columnName)) {
            anomalyMap.set(columnName, [anomaly])
        } else {
            (anomalyMap.get(columnName)!).push(anomaly)
        }
    }
    // group schema_changes under `table_name`
    for (const change of schemaChanges) {
        const model = stripQuotes(change.table_name);
        const columnName = change.column_name;
        if (!alerts.has(model)) {
            const obj: AggregatedAlerts = {
                anomalies: new Map<string, Array<Anomaly>>(),
                schemaChanges: new Map<string, Array<SchemaChange>>(),
                tableSchema: []
            }
            alerts.set(model, obj)
        }
        const schemaChangesMap = (alerts.get(model)!).schemaChanges;
        if (!schemaChangesMap.has(columnName)) {
            schemaChangesMap.set(columnName, [change])
        } else {
            (schemaChangesMap.get(columnName)!).push(change)
        }
    }
    return alerts;
};

const Dashboard: React.FC = (): ReactElement => {
    const initialOverview: OverviewData = {
        anomalies: [],
        metrics: [],
        schema_changes: [],
        aggregated_metrics: new Map<string, AggregatedMetrics>(),
        aggregated_alerts: new Map<string, AggregatedAlerts>(),
        table_schema: [],
        graph: null,
        generated_at: '',
    };
    const [reDataOverview, setReDataOverview] = useState<OverviewData>(initialOverview);
    const prepareOverviewData = async (): Promise<void> => {
        try {
            const response = await fetch(RE_DATA_OVERVIEW_FILE, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );
            const rawJson: Array<RawOverviewData> = await response.json();
            const data = rawJson[0];

            const overview: OverviewData = {
                anomalies: data.anomalies ? JSON.parse(data.anomalies as string) : [],
                metrics: data.metrics ? JSON.parse(data.metrics as string) : [],
                schema_changes: data.schema_changes ? JSON.parse(data.schema_changes as string) : [],
                aggregated_metrics: new Map<string, AggregatedMetrics>(),
                aggregated_alerts: new Map<string, AggregatedAlerts>(),
                graph: JSON.parse(data.graph as string),
                table_schema: data.table_schema ? JSON.parse(data.table_schema) : [],
                generated_at: data.generated_at,
            }
            overview.aggregated_metrics = extractMetrics(overview);
            overview.aggregated_alerts = prepareAlerts(overview);
            // overview.table_schema = prepareTableSchema(overview);
            console.log(overview)
            setReDataOverview(overview);
        } catch (e) {
            console.log('Unable to load overview file');
            console.log(e);
        }
    };
    useEffect(() => {
        prepareOverviewData();
    }, []);

    return (
        <RedataOverviewContext.Provider value={reDataOverview}>
            <div className="relative min-h-screen md:flex" data-dev-hint="container">
                <Header/>
                <Sidebar/>

                <main id="content" className="flex-1 p-6 lg:px-8 bg-gray-100 max-h-screen overflow-y-auto">
                    <div className="max-w-full mx-auto h-full">
                        <div className="px-4 py-6 sm:px-0 h-full">
                            <Outlet/>
                        </div>
                    </div>
                </main>
            </div>
        </RedataOverviewContext.Provider>
    );
};

export default Dashboard;
