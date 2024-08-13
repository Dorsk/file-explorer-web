import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function EndNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="endNode">
      <div>
        {/* <label htmlFor="text">Text:</label> */}
        {/* <input id="text" name="text" onChange={onChange} /> */}
      </div>
      <Handle type="target" position={Position.Top} id="a" />
    </div>
  );
}

export default EndNode;
