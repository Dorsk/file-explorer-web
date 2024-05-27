import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import NotFound from "./components/NotFoundComponent";
import HomeComponent from "./components/HomeComponent";
import TraceRunComponent from "./components/tracerun/HomeTraceComponent";

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
                path="/tracerun"
                exact
                element={<TraceRunComponent />}
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
