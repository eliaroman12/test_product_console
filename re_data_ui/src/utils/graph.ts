import dagre from 'dagre';
import {
  ArrowHeadType, Elements, Edge, Node, isNode, Position,
} from 'react-flow-renderer';
import { DbtNode, DbtSource } from '../contexts/redataOverviewContext';

const DEFAULT_WIDTH = 172;
const DEFAULT_HEIGHT = 36;

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutElements = (elements: Elements, direction = 'LR'): Elements => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  elements.forEach((el) => {
    const element = el as Node | Edge;
    if (isNode(element)) {
      dagreGraph.setNode(element.id, {
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
      });
    } else {
      dagreGraph.setEdge(element.source, element.target);
    }
  });

  dagre.layout(dagreGraph);

  return elements.map((el) => {
    const element = el as Node;
    if (isNode(element)) {
      const nodeWithPosition = dagreGraph.node(element.id);
      element.targetPosition = isHorizontal ? Position.Left : Position.Top;
      element.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

      element.position = {
        x: nodeWithPosition.x - DEFAULT_WIDTH / 2 + Math.random() / 1000,
        y: nodeWithPosition.y - DEFAULT_HEIGHT / 2,
      };
    }

    return element;
  });
};

const resourceTypeColors: Record<string, string> = {
  source: 'hsl(97deg 66% 44%)',
  model: 'hsl(190deg 100% 35%)',
  seed: 'hsl(150deg 66% 44%)',
};

type GenerateNodeProps = {
  index: number | string,
  modelId: string,
  details: DbtNode | DbtSource,
  anomalies: boolean,
  schemaChanges: boolean,
}

const generateNode = ({
  modelId, index,
  details, anomalies,
  schemaChanges,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: GenerateNodeProps): any => ({
  key: modelId,
  id: index?.toString(),
  type: 'custom-node',
  label: details.name,
  shape: 'box',
  anomalies,
  schemaChanges,
  color: {
    background: resourceTypeColors[details.resource_type],
  },
  data: {
    id: modelId,
    label: details.name,
    otherName: modelId.replace(`.${details.name}`, ''),
    anomalies,
    schemaChanges,
    borderColor: resourceTypeColors[details.resource_type],
  },
});

type GenerateEdgeProps = {
  obj: Record<string, string>,
  from: string;
  to: string
}

const generateEdge = ({ obj, from, to }: GenerateEdgeProps): Edge => {
  const source = obj?.[from];
  const target = obj?.[to];

  const id = `e${source}-${target}`;
  return ({
    id,
    source,
    target,
    arrowHeadType: ArrowHeadType.ArrowClosed,
  });
};

export {
  generateEdge,
  generateNode,
  getLayoutElements,
};
