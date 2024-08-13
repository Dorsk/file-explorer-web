import React, { Component } from "react";
import "./../../App.css";
import TreeViewer from "../treeviewer/Treeviewer";
import FileInput from "../inputfile/FileInput";

class HomeELKViewerComponent extends Component {
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
          <iframe
            src="https://das.actia.fr/kibana/app/dashboards#/view/530b8100-54a3-11ef-8ed0-eb1984dcabac?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Tableau%20de%20bord%20permettant%20de%20visualiser%20%20les%20erreurs%20trouver%20en%20appliquant%20les%20r%C3%A8gles%20Edo18%20et%20EcuIdent19%20sur%20la%20base%20D2Center%20',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,syncColors:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),hidePanelTitles:!t,savedVis:(data:(aggs:!(),searchSource:(filter:!(),query:(language:kuery,query:''))),description:'',params:(controls:!((fieldName:'type%20d!'erreur.keyword',id:'1649326723700',indexPattern:error,label:'Type%20d!'erreur',options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5,type:terms),parent:'',type:list),(fieldName:'r%C3%A3%C2%A9gle%20de%20validation%20.keyword',id:'1649326734095',indexPattern:error,label:R%C3%A8gle,options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5,type:terms),parent:'',type:list),(fieldName:'type%20de%20fichier.keyword',id:'1649326746947',indexPattern:error,label:'Type%20de%20fichier%20',options:(dynamicOptions:!t,multiselect:!t,order:desc,size:5,type:terms),parent:'',type:list)),pinFilters:!f,updateFiltersOnChange:!t,useTimeFilter:!f),title:db_cdc_reco_en_controls,type:input_control_vis,uiState:())),gridData:(h:12,i:ca328eb3-d3cb-4fc3-aa37-6b2045c50b2d,w:11,x:0,y:0),panelIndex:ca328eb3-d3cb-4fc3-aa37-6b2045c50b2d,type:visualization,version:'7.16.3'),(embeddableConfig:(enhancements:()),gridData:(h:12,i:fa3a611a-a3fd-45fb-90a5-ae519ca475ad,w:18,x:11,y:0),id:'3f7d7110-54a4-11ef-8ed0-eb1984dcabac',panelIndex:fa3a611a-a3fd-45fb-90a5-ae519ca475ad,type:lens,version:'7.16.3'),(embeddableConfig:(enhancements:(),hidePanelTitles:!f),gridData:(h:12,i:f3478095-3a45-4bef-a8d5-52cd17b35c58,w:19,x:29,y:0),id:'3b651f20-54a3-11ef-8ed0-eb1984dcabac',panelIndex:f3478095-3a45-4bef-a8d5-52cd17b35c58,title:'nombre%20de%20fichiers%20en%20erreurs%20par%20r%C3%A8gle',type:lens,version:'7.16.3'),(embeddableConfig:(enhancements:(),hidePanelTitles:!t),gridData:(h:40,i:'2f7adb8a-7731-46fb-b57d-198798901925',w:48,x:0,y:12),id:'730755a0-fbe0-11ed-8d07-bf5607d7f9c7',panelIndex:'2f7adb8a-7731-46fb-b57d-198798901925',type:search,version:'7.16.3')),query:(language:kuery,query:''),tags:!(b77938c0-0997-11ed-b26a-fd680b0ccd43),timeRestore:!f,title:'ERREUR_VALIDATION%20%5BFR-FR%5D%20Work%20in%20progress',viewMode:view)&show-query-input=true&show-time-filter=true"
            height="850"
            width="1400"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default HomeELKViewerComponent;
