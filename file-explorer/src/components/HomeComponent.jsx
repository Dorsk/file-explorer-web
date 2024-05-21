import React, { Component } from "react";
import "./../App.css";
import TreeViewer from "./treeviewer/Treeviewer";
import FileInput from "./inputfile/FileInput";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileStructure: {},
      workspace: "",
    };
  }

  onChangeText = (workspace) => {
    this.setState({ workspace });
  };

  handleFileChange = (fileStructure) => {
    this.setState({ fileStructure });
    this.onChangeText(
      document.getElementById("workspacedirectory").value.replace(/\\/g, "/")
    );
  };

  render() {
    return (
      <div className="contain">
        <div className="treeview">
          <TreeViewer data={[this.state.fileStructure, this.state.workspace]} />
        </div>
        <div className="fileinput">
          <FileInput onChange={this.handleFileChange} />
          <div class="mb-1 row">
            <label for="workspacedirectory" class="col-sm-2 col-form-label">
              Préférence Workspace
            </label>
            <div class="col-sm-9">
              <input type="text" class="form-control" id="workspacedirectory" />
            </div>
          </div>
          <pre lang="xml" id="cellContent" className="cellContent">
            {" "}
          </pre>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
