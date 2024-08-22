import React, { Component } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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
                src={require("./../img/logo-actia.png")}
                alt=""
                width="170"
                height="35"
              ></img>
            </a>

            <Navbar.Brand href="/">DAC As Services</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <NavDropdown title="Services" id="nav-dropdown">
                <Nav.Link href="/xmlvehicleeditor">XML Vehicle Editor</Nav.Link>
                <Nav className="me-auto"></Nav>
                <Nav.Link href="/vehicleeditor"> Vehicle Editor</Nav.Link>
                <Nav className="me-auto"></Nav>
                <Nav.Link href="/flowchart"> Flowchart Editor</Nav.Link>
                <Nav className="me-auto"></Nav>
                <Nav.Link href="/tracerun"> Trace Viewer</Nav.Link>
                <Nav className="me-auto"></Nav>
                <Nav.Link href="/xmlcomparator"> ODX Viewer</Nav.Link>
                <Nav className="me-auto"></Nav>
                <Nav.Link href="/elkviewer"> ELK Viewer</Nav.Link>
                <Nav className="me-auto"></Nav>
              </NavDropdown>
              <Nav className="me-auto"></Nav>
              <Nav className="me-auto"></Nav>
              <Nav className="me-auto"></Nav>
              <Nav className="me-auto"></Nav>
              <Nav.Link href="/shopping">Shopping</Nav.Link>
              <Nav className="me-auto"></Nav>
              <Nav.Link href="/admin">Administrator</Nav.Link>
              <Nav className="me-auto"></Nav>
              <Nav.Link href="/admin">Mon compte</Nav.Link>
              <Nav className="me-auto"></Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="header-line"></div>
      </div>
    );
  }
}

export default HeaderComponent;
