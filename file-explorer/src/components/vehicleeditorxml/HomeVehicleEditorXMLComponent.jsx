import React, { Component } from "react";
import "./../../App.css";
import XMLViewer from "react-xml-viewer";
import TreeViewer from "../treeviewer/Treeviewer";
import FileInput from "../inputfile/FileInput";

class HomeVehicleEditorXMLComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileStructure: {},
      fileReferences: {},
      fileContent: "",
      filetitle: "",
      file: null,
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
            <label for="contentFile" className="col-sm-12 col-form-label">
              <h2>
                <b>
                  {this.state.file === undefined &&
                    this.state.file.name === undefined}{" "}
                </b>
              </h2>
            </label>
            <div class="col-sm-12">
              {this.state.fileContent && (
                <XMLViewer
                  xml={this.state.fileContent}
                  collapsible="true"
                  initalCollapsedDepth="2"
                />
              )}
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

export default HomeVehicleEditorXMLComponent;
