import React from "react";
import "../styles/AssessScreen.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { View } from "react-native";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const AssessScreen = () => {
  return (
    <>
      <div className="topBanner">
        <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
        <img
          alt="assess"
          src="/icons/AssessHeaderText.svg"
          className="image2"
        ></img>
      </div>

      <div className="middleBanner">
        <p
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontStyle: "italic",
            fontWeight: "normal",
            fontSize: 20,
          }}
        >
          <span style={{ color: "##606263" }}>Click tabs to view tips or </span>
          <span
            style={{
              color: "#20548c",
              textDecoration: "underline",
              fontStyle: "italic",
            }}
          >
            click here to download the tips
          </span>
        </p>
      </div>

      <div className="gridPadding">
        <Container>
          <Row>
            <Col className="leftBox">
              <div className="divStyle">
                <h1 className="h1a">Serious Harm</h1>
                <View
                  style={{
                    borderBottomColor: "#F4C346",
                    borderBottomWidth: 3,
                    height: -5,
                    width: 90,
                    marginBottom: 35,
                  }}
                />
                <div className="textStyle">
                  <label>
                    Causes or threatens to cause serious harm to any person.
                  </label>
                </div>
                <a href="/">
                  <Link to="/assess/seriousharm">VIEW QUESTIONS</Link><i className="fas fa-arrow-right"></i>{" "}
                </a>
              </div>
            </Col>
            <Col className="leftBox">
              <div className="divStyle">
                <h1 className="h1a">Physical Restraint</h1>
                <View
                  style={{
                    borderBottomColor: "#F4C346",
                    borderBottomWidth: 3,
                    height: -5,

                    width: 90,
                    marginBottom: 35,
                  }}
                />
                <div className="textStyle">
                  <label>
                    Physically restrains or threatens to physically restrain
                    another person.
                  </label>
                </div>
                <div>
                  <a href="/">
                    <Link to="/assess/physicalrestraint">VIEW QUESTIONS</Link><i className="fas fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col className="rightBox">
              <div className="divStyle">
                <h1 className="h1a">Abuse of Law</h1>
                <View
                  style={{
                    borderBottomColor: "#F4C346",
                    borderBottomWidth: 3,
                    height: -5,
                    width: 90,
                    marginBottom: 35,
                  }}
                />
                <div className="textStyle">
                  <label>
                    Abuses or threatens to abuse the law or legal process.
                  </label>
                </div>
                <div>
                  <a href="/">
                    <Link to="/assess/abuseoflaw">VIEW QUESTIONS</Link><i className="fas fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="bottomBox">
              <div className="divStyle">
              <h1 className="h1a">Extortion</h1>
                <View
                  style={{
                    borderBottomColor: "#F4C346",
                    borderBottomWidth: 3,
                    height: -5,
                    width: 90,
                    marginBottom: 35,
                  }}
                />
                <div>
                <div className="textStyle">
                  <label>
                  Engages in extortion under Massachusetts Law. 
                  </label>
                </div>
                  <Link to="/assess/Extortion">VIEW QUESTIONS</Link>{" "}
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Col>
            <Col className="bottomBox">
              <div className="divStyle">
              <h1 className="h1a">Financial Harm</h1>
                <View
                  style={{
                    borderBottomColor: "#F4C346",
                    borderBottomWidth: 3,
                    height: -5,
                    width: 90,
                    marginBottom: 35,
                  }}
                />
                <div>
                <div className="textStyle">
                  <label>
                  Causes or threatens to cause financial harm to any person.
                  </label>
                </div>
                  <a href="/">
                    <Link to="/assess/financialharm">VIEW QUESTIONS</Link><i className="fas fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </Col>
            <Col>
              <div className="divStyle">
                <div>
                <h1 className="h1a">Identity Documents</h1>
                <View
                  style={{
                    borderBottomColor: "#F4C346",
                    borderBottomWidth: 3,
                    height: -5,
                    width: 90,
                    marginBottom: 35,
                  }}
                />
                </div>
                <div className="textStyle">
                  <label>
                  Knowingly destroys government identity document, of another person.
                  </label>
                </div>
                <div>
                  <a href="/">
                    <Link to="/assess/identitydocuments">VIEW QUESTIONS</Link><i className="fas fa-arrow-right"></i>{" "}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AssessScreen;
