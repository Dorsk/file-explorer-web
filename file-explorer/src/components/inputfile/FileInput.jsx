import React, { Component } from "react";

class FileInput extends Component {
  handleFileChange = (event) => {
    const files = event.target.files;
    const fileTree = {};

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
            addToTree(tail, tree[head], file);
          }
        });
      }
    };

    for (const file of files) {
      const pathArray = file.webkitRelativePath.split("/");
      pathArray.map((path) => {
        if (!path.includes(".svn") && !path.includes(".project")) {
          addToTree(pathArray, fileTree, file);
        }
      });
    }

    this.props.onChange(fileTree);
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
