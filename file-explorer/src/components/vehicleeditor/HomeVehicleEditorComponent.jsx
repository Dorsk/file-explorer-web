import React, { Component } from "react";
import "./../../App.css";
import TreeViewer from "../treeviewer/Treeviewer";
import FileInput from "../inputfile/FileInput";
import imgService from "./../../img/ecran-service.png";

class HomeVehicleEditorComponent extends Component {
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
          <img src={imgService} alt="Logo" />;
        </div>
      </div>
    );
  }
}

export default HomeVehicleEditorComponent;
