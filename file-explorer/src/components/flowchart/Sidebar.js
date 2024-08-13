import React from "react";
import DownloadButton from "./DownloadButton.jsx";
import losange from "./nodes/losange.png";
import text from "./nodes/text.png";
import database from "./nodes/database.png";

const SideBar = () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div className="d-flex justify-content-between flex-wrap">
        <div
          className="dndnode input"
          onDragStart={(event) => onDragStart(event, "Triangle")}
          draggable
        ></div>
        <div
          className="dndnode action"
          onDragStart={(event) => onDragStart(event, "ActionNode")}
          draggable
        ></div>
        <div
          className="dndnode output"
          onDragStart={(event) => onDragStart(event, "EndNode")}
          draggable
        ></div>
        <div
          className="dndnode "
          onDragStart={(event) => onDragStart(event, "cylinder")}
          draggable
        >
          <img
            className="database"
            src={database}
            alt="Database"
            width="40"
            height="40"
          />
        </div>
        <div
          className="dndnode"
          onDragStart={(event) => onDragStart(event, "diamond")}
          draggable
        >
          <img
            className="question"
            src={losange}
            alt="Question"
            width="55"
            height="55"
          />
        </div>
        <div
          className="dndnode parallelogram"
          onDragStart={(event) => onDragStart(event, "Parallelogram")}
          draggable
        ></div>
        <div
          className="dndnode text-updater-node"
          onDragStart={(event) => onDragStart(event, "TextUpdater")}
          draggable
        >
          <img
            className="question"
            src={text}
            alt="Text"
            width="55"
            height="55"
          />
        </div>
        <div class="downloadbutton">
          <DownloadButton />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
