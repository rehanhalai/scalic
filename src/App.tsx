import {
  ReactFlow,
  Background,
  Controls,
  Node,
  Edge,
  OnNodesChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  OnConnect,
  OnEdgesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback, useState } from "react";

const initialNodes: Node[] = [
  {
    id: "n1",
    position: { x: 100, y: 100 },
    data: { label: "Node 1" },
    type: "input",
  },
  {
    id: "n2",
    position: { x: 200, y: 200 },
    data: { label: "Node 2" },
  },
  {
    id: "n3",
    position: { x: 300, y: 300 },
    data: { label: "Node 3" },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "n1",
    target: "n2",
    label: "Edge from Node 1 to Node 2",
  },
];

export default function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodeChange: OnNodesChange = useCallback((changes) => {
    setNodes((nodes) => applyNodeChanges(changes, nodes));
  }, []);

  const onEdgeChange: OnEdgesChange = useCallback((changes) => {
    setEdges((edges) => applyEdgeChanges(changes, edges));
  }, []);

  const onConnect: OnConnect = useCallback((changes) => {
    setEdges((edges) => addEdge(changes, edges));
  }, []);

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        colorMode="system"
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgeChange}
        onConnect={onConnect}
        proOptions={{ hideAttribution: true }}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
