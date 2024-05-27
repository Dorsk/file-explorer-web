import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FileInput extends Component {
  handleFileChange = (event) => {
    const files = event.target.files;
    const fileTree = {};
    const fileReferences = {};

    const addToTree = (pathArray, tree, file) => {
      if (pathArray.length === 0) return;

      const [head, ...tail] = pathArray;

      if (!tree[head]) {
        tree[head] = tail.length === 0 ? null : {};
      }
      if (
        tail.length > 0 &&
        !head.includes(".svn") &&
        !head.includes(".project")
      ) {
        tail.map((path) => {
          if (!path.includes(".svn") && !path.includes(".project")) {
            fileReferences[file.webkitRelativePath] = file;
            addToTree(tail, tree[head], file);
          }
        });
      }
    };

    for (const file of files) {
      const pathArray = file.webkitRelativePath.split("/");
      pathArray.map((path) => {
        if (!path.includes(".svn") && !path.includes(".project")) {
          fileReferences[file.webkitRelativePath] = file;
          addToTree(pathArray, fileTree, file);
        }
      });
    }

    this.props.onChange(fileTree, fileReferences);
  };

  render() {
    return (
      <div class="mb-3">
        <div class="col-sm-11">
          <input
            type="file"
            webkitdirectory="true"
            mozdirectory="true"
            directory="true"
            id="formDirectory"
            className="form-control"
            onChange={this.handleFileChange}
          />
        </div>
      </div>
    );
  }
}

export default FileInput;
