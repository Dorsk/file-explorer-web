import React, { Component } from "react";
import "./../../App.css";
import UserManagement from "./UserManagement.js";
import WebServiceStatus from "./WebServiceStatus.js";
import UserConnectionsGraph from "./UserConnectionsGraph.js";
import ApplicationsStatus from "./ApplicationsStatus.js";

class HomeAdminComponent extends Component {
  render() {
    return (
      <div className="container">
        <h2>Admin Dashboard</h2>

        <div className="row mb-2">
          <div className="col-4">
            <WebServiceStatus />
          </div>
          <div className="col-8">
            <UserManagement />
          </div>

          <div className="col-4">
            <ApplicationsStatus />
          </div>
          <div className="col-4">
            <UserConnectionsGraph />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeAdminComponent;
