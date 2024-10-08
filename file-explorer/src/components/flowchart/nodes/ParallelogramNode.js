import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

function Parallelogram({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="parallelogram">
      <Handle type="target" position={Position.Top} id="a" />
      <div>
        {/* <label htmlFor="text">Text:</label> */}
        {/* <input id="text" name="text" onChange={onChange} /> */}
      </div>
      {/* <Handle type="source" position={Position.Bottom} id="a" style={handleStyle} /> */}
      <Handle type="source" position={Position.Bottom} id="b" />
    </div>
  );
}

export default Parallelogram;
