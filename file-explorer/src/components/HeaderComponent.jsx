import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <a href="/">
              <img
                src={require("./../icons/home.png")}
                alt=""
                width="50"
                height="40"
              ></img>
            </a>
            <Navbar.Brand href="/">DAC 2.0</Navbar.Brand>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/vehicleeditor">Vehicle Editor</Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/flowchart">Flowchart Editor</Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/tracerun">Trace Viewer</Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/xmlcomparator">ODX Viewer</Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/elkviewer">ELK Viewer</Nav.Link>
            <Nav className="me-auto"></Nav>
            <Nav.Link href="/admin">Administrator</Nav.Link>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
        <div className="header-line"></div>
      </div>
    );
  }
}

export default HeaderComponent;
