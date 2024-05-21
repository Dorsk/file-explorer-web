import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent";
import HeaderComponent from "./components/HeaderComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <HeaderComponent />
          <div>
            <Routes>
              <Route path="/" exact element={<HomeComponent />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
