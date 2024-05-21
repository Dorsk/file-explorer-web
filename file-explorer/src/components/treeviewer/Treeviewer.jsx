import React, { Component } from "react";
import "./treeviewer.css";

class TreeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: {},
    };
  }

  // capture du folder
  handleToggle = (path) => {
    this.setState((prevState) => ({
      expanded: {
        ...prevState.expanded,
        [path]: !prevState.expanded[path],
      },
    }));
  };

  // Affichage du contenu du fichier
  handleFile = (path, fileName) => {
    //var file = new File(
    //  "[" + this.props.data[1] + "/../" + path.replace(fileName, "") + "]",
    //  fileName
    // );
    // document.getElementById("cellContent").replaceChildren("");
    //const url =
    //   "file:///" + this.props.data[1] + "/../" + path.replace(fileName, "") + fileName;
    //fetch(url)
    //  .then((r) => r.text())
    //  .then((t) =>
    //    document
    //     .getElementById("cellContent")
    //      .appendChild(document.createTextNode(" Yeah  " + t))
    //  );
  };

  getFileIcon = (fileName) => {
    if (fileName.endsWith(".s")) {
      return "📊"; // icon for .s files
    } else if (fileName.endsWith(".xml")) {
      return "📝"; // icon for .xml files
    } else if (
      fileName.endsWith(".jpg") ||
      fileName.endsWith(".png") ||
      fileName.endsWith(".svg")
    ) {
      return "🖼️"; // icon for images files
    }
    return "📄"; // default file icon
  };

  renderTree = (nodes, path = "") => {
    return (
      <ul>
        {Object.keys(nodes).map((key) => {
          const currentPath = path ? `${path}/${key}` : key;
          const isDirectory = nodes[key] !== null;
          const icon = isDirectory
            ? this.state.expanded[currentPath]
              ? "📂"
              : "📂"
            : this.getFileIcon(key);

          return (
            <li key={currentPath}>
              <span
                onClick={
                  isDirectory
                    ? () => this.handleToggle(currentPath)
                    : () => this.handleFile(currentPath, key)
                }
                className="clickable"
              >
                {icon} {key}
              </span>
              {isDirectory &&
                this.state.expanded[currentPath] &&
                this.renderTree(nodes[key], currentPath)}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return <div>{this.renderTree(this.props.data[0])}</div>;
  }
}

export default TreeView;
