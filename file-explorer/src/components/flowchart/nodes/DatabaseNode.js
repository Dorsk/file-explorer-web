import { useCallback } from "react";
import { Handle, Position, NodeResizeControl } from "reactflow";

function DatabaseNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const controlStyle = {
    background: "transparent",
    border: "none",
  };

  return (
    <div className="actionNode">
      <NodeResizeControl style={controlStyle} minWidth={100} minHeight={50}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ff0071"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ position: "absolute", right: 5, bottom: 5 }}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="16 20 20 20 20 16" />
          <line x1="14" y1="14" x2="20" y2="20" />
        </svg>
      </NodeResizeControl>
      {/* <Handle type="target" position={Position.Right} />*/}
      <div>
        {/* <label htmlFor="text">Text:</label> */}
        {/* <input id="text" name="text" onChange={onChange} /> */}
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default DatabaseNode;
