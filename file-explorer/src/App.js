import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import NotFound from "./components/NotFoundComponent";
import HomeComponent from "./components/HomeComponent";
import HomeTraceComponent from "./components/tracerun/HomeTraceComponent";
import XMLComparator from "./components/comparefiles/XMLComparator";
import ELKViewer from "./components/elkviewer/HomeELKViewerComponent";
import HomeAdminComponent from "./components/Admin/HomeAdminComponent";
import OverviewFlowComponent from "./components/flowchart/OverviewFlow";
import HomeVehicleEditorComponent from "./components/vehicleeditor/HomeVehicleEditorComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <div>
            <Routes>
              <Route path="/" exact element={<HomeComponent />}></Route>
              <Route
                path="/vehicleeditor"
                exact
                element={<HomeVehicleEditorComponent />}
              ></Route>
              <Route
                path="/tracerun"
                exact
                element={<HomeTraceComponent />}
              ></Route>
              <Route
                path="/xmlcomparator"
                exact
                element={<XMLComparator />}
              ></Route>
              <Route path="/elkviewer" exact element={<ELKViewer />}></Route>
              <Route
                path="/admin"
                exact
                element={<HomeAdminComponent />}
              ></Route>
              <Route
                path="/flowchart"
                exact
                element={<OverviewFlowComponent />}
              ></Route>

              <Route element={<NotFound />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
