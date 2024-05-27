import React, { Component } from "react";
import "./../App.css";
import TreeViewer from "./treeviewer/Treeviewer";
import FileInput from "./inputfile/FileInput";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileStructure: {},
      fileReferences: {},
      fileContent: "",
      filetitle: "",
    };
  }

  handleFileChange = (fileStructure, fileReferences) => {
    this.setState({ fileStructure, fileReferences });
  };

  handleFileClick = (fileContent) => {
    this.setState({ fileContent });
  };

  render() {
    return (
      <div className="contain">
        <div className="treeview">
          <FileInput onChange={this.handleFileChange} />
          <TreeViewer
            data={[this.state.fileStructure]}
            fileReferences={this.state.fileReferences}
            onFileClick={this.handleFileClick}
          />
        </div>
        <div className="fileinput">
          <div class="mb-1 row">
            <label for="contentFile" class="col-sm-12 col-form-label">
              {this.state.filetitle}
            </label>
            <div class="col-sm-12">
              <div>
                <pre>{this.state.fileContent}</pre>
              </div>
            </div>
            <pre lang="xml" id="cellContent" className="cellContent">
              {" "}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
