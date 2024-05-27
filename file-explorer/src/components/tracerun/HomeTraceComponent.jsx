import React, { Component } from "react";
import TraceViewerComponent from "./trace";
import "./../../App.css";
import TreeViewer from "./../treeviewer/Treeviewer";
import FileInput from "./../inputfile/FileInput";

class HomeTraceComponent extends Component {
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

  handleFileClick = (fileContent, filetitle, file) => {
    filetitle = "File : " + filetitle;
    this.setState({ fileContent, filetitle, file });
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
          <div className="mb-1 row">
            <div class="col-sm-12">
              <div style={{ "margin-left": 40, "margin-right": 40 }}>
                <h1>Trace Run Viewer</h1>
                <TraceViewerComponent
                  xml={this.state.fileContent}
                  file={this.state.file}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeTraceComponent;
