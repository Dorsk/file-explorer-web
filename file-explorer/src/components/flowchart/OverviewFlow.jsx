import React, { useState, useRef, useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";
import "./overflow.css";
import Sidebar from "./Sidebar";
import ZoomNode from "./ZoomNode.js";
import Triangle from "./nodes/TriangleNode";
import Parallelogram from "./nodes/ParallelogramNode";
import TextUpdaterNode from "./nodes/TextUpdaterNode";
import DatabaseNode from "./nodes/DatabaseNode.js";
import ActionNode from "./nodes/ActionNode.js";
import EndNode from "./nodes/EndNode.js";

let id = 0;
const getId = () => `dndnode_${id++}`;
const snapGrid = [20, 20];
const nodeTypes = {
  zoom: ZoomNode,
  TextUpdater: TextUpdaterNode,
  Parallelogram: Parallelogram,
  Triangle: Triangle,
  DatabaseNode: DatabaseNode,
  ActionNode: ActionNode,
  EndNode: EndNode,
};
const initialNodes = [];

const OverviewFlowComponent = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      let classNom = type;
      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        className: type,
        data: { className: `${classNom}`, label: `${type}` },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="overviewflowcomponent container">
      <ReactFlowProvider>
        <div className="row">
          <div className="col">
            <Sidebar />
          </div>
          <div className="row"></div>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              <Background variant={BackgroundVariant.Dots} />
              <MiniMap />
              <Controls />
            </ReactFlow>
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default OverviewFlowComponent;
