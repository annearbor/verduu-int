import React from "react";
// import React, { Component } from "react";
import { Jumbotron, Col, Container } from "reactstrap";
// import hero from "../components/image/hero-verduu.jpg";
import Logo from "../components/image/verduu_logo.png";
// import { Link } from "react-router-dom";

export default function Hompage() {
  return (
    <div>
      <Container fluid={true} className="text-center mt-6 mb-4">
        {/* <Col className="header-logo" size="sm"> */}
        <img
          className="mb-3 mt-2"
          src={Logo}
          alt=""
          width="200"
          // height="50"
        />
        {/* </Col> */}
      </Container>
      <Jumbotron className="bg-white">
        <div className="logoHolder" />
        <div className="imageHolder" />
        {/* <h1 className="display-4"></h1> */}
        <p className="lead">Under construction</p>
        {/* <hr className="my-4" /> */}
        <p />
      </Jumbotron>
      {/* <div className="mobileHero" /> */}
      <Container fluid={true} className="text-center mt-6 mb-4">
        <Col className="text-muted" size="sm">
          Verduu © 2019
          <a className="contact" href="mailto:contact@verduu.com">
            Contact
          </a>
        </Col>
      </Container>
    </div>
  );
}
