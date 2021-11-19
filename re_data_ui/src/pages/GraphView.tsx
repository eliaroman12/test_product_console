import React, {ReactElement, useContext} from "react";
import './GraphView.css';
import LineageGraph from "../components/LineageGraph";
import ModelDetails from "../components/ModelDetails";
import {useSearchParams} from "react-router-dom";
import {OverviewData, RedataOverviewContext} from "../contexts/redataOverviewContext";

interface VisPointer {
    x: number,
    y: number
}

interface VisNode {
    id: string | number,
    label: string | number;
    shape: string;
}

interface VisEdge {
    from: string | number,
    to: string | number;
    arrows: string;
}

interface VisNetworkEventParams {
    edges?: Array<string>,
    nodes?: Array<string>,
    event?: object,
    pointer?: {
        DOM: VisPointer
        canvas: VisPointer
    }
}

interface IGraph {
    nodes: Array<VisNode>;
    edges: Array<VisEdge>;
}

const generateGraph = (overview: OverviewData) => {
    const graph: IGraph = {
        nodes: [],
        edges: [],
    }
    if (!overview.graph) {
        return graph;
    }
    const dbtNodes = overview.graph.nodes;
    for (const [model, details] of Object.entries(dbtNodes)) {
        const [resource, packageName, modelName] = model.split('.');
        if (resource === 'test' || packageName === 're_data') {
            continue;
        }
        const modelId = `${details.database}.${details.schema}.${details.name}`;
        const node: VisNode = {
            id: modelId,
            label: modelName,
            shape: 'box',
        }
        graph.nodes.push(node)

        const parentNodes = new Set(details.depends_on.nodes);
        for (const parent of parentNodes) {
            const parentNode = dbtNodes[parent]
            if (parentNode) {
                // in coming edge only if parent node exists
                const parentModelId = `${parentNode.database}.${parentNode.schema}.${parentNode.name}`;
                const edge: VisEdge = {
                    from: parentModelId,
                    to: modelId,
                    arrows: 'to'
                }
                graph.edges.push(edge);
            }
        }
    }
    return graph;
};

const GraphView: React.FC = (): ReactElement => {
    const overview: OverviewData = useContext(RedataOverviewContext);
    const graph = generateGraph(overview)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, setURLSearchParams] = useSearchParams();
    const data = {
        nodes: graph.nodes,
        edges: graph.edges
    }
    const events = {
        selectNode: (params: VisNetworkEventParams) => {
            if (!params.nodes || params.nodes.length !== 1) {
                // only select a single node
                return
            }
            const modelIdentifier = params.nodes[0];
            setURLSearchParams({
                model: modelIdentifier,
            });
        },
        deselectNode: (_: VisNetworkEventParams) => {
            setURLSearchParams({});
        }
    };
    const networkOptions = {
        "height": '1000px',
        "width": '800px',
        "edges": {
            "color": {
                "color": "#8884d8",
                "highlight": "#8884d8",
                "hover": "#8884d8",
                "inherit": false
            }, "dashes": false, "smooth": {"type": "continuous", "forceDirection": "none"}
        },
        "nodes": {
            "color": {
                "border": "#8884d8",
                "background": "#8884d8",
                "highlight": "#392396",
                "hover": {
                    "border": "#392396",
                    "background": "#8884d8",
                }
            },
            // "color": "#8884d8",
            "font": {
                "color": "#ffffff"
            }
        },
        "layout": {
            "hierarchical": {
                "enabled": true,
                "levelSeparation": 485,
                "nodeSpacing": 5,
                "treeSpacing": 30,
                "blockShifting": false,
                "edgeMinimization": true,
                "parentCentralization": false,
                "direction": "LR",
                "sortMethod": "directed"
            }
        },
        "interaction": {"hover": true, "navigationButtons": false, "multiselect": true, "keyboard": {"enabled": true}},
        "physics": {
            "enabled": false,
            "hierarchicalRepulsion": {"centralGravity": 0},
            "minVelocity": 0.75,
            "solver": "hierarchicalRepulsion"
        }
    };

    return (
        <div
            // className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 CustomGraphHeight shadow overflow-hidden border-b border-gray-200 sm:rounded-lg h-full">
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 gap-4 CustomGraphHeight border-4 border-dashed border-gray-200 rounded-lg h-full">
            <LineageGraph data={data} events={events} networkOptions={networkOptions}/>
            <ModelDetails/>
        </div>
    )
};

export default GraphView;