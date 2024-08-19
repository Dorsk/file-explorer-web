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
    <div className="databaseCylinder">
      <Handle type="target" position={Position.Right} />
      <div>
        <label htmlFor="text"></label>
        {/* <input id="text" name="text" onChange={onChange} /> */}
      </div>
      <Handle
        type="source"
        position={Position.Left}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default DatabaseNode;
