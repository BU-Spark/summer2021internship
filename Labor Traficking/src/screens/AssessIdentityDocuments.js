import "../styles/AssessIdentityDocuments.css";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core";
import { View } from "react-native";
import { Container, Row, Col } from "react-bootstrap";
import AssessNavigator from "../components/AssessNavigator";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
  rel="stylesheet"
/>;

const AssessIdentityDocuments = () => {
  /* radio button settings */
  const [value, setValue] = React.useState("Yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const Button = styled.button`
    background-color: #144d7e;
    color: #F4C346;
    font-size: 25px;
    padding: 10px 40px;
    margin: 10px 0px
    cursor: pointer;
  `;

  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
            <AssessNavigator />
          </Col>
          {/* placeholder for spacing */}
          <Col sm={1}></Col>
          <Col xs={8}>
            <div>
              <ol class="breadcrumb">
                <Breadcrumb className="breadcrumb1">
                  <Breadcrumb.Item href="/">
                    <li class="active">
                      <i className="fa fa-home"></i>
                    </li>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/Assess">Assess</Breadcrumb.Item>
                  <Breadcrumb.Item active>Identity Documents</Breadcrumb.Item>
                </Breadcrumb>
              </ol>
              <hr className="divider"></hr>
              <h1 className="h1c">Identity Documents</h1>
              {/* horizontal yellow line */}
              <View
                style={{
                  borderBottomColor: "#F4C346",
                  borderBottomWidth: 5,
                  height: -5,
                  width: 90,
                  marginBottom: 35,
                }}
              />
              <i className="i">
                Knowingly destroys, conceals, removes, confiscates or possesses
                any actual or purported passport or other immigration document,
                or any other actual or purported government identification
                document, of another person.
              </i>
              <hr className="divider2"></hr>
              <div className="definitionHeader">
                <h2 className="h2">Lay Definition</h2>
                <div className="definition">
                  This includes taking someone’s identity document for any
                  period of time, even if it is brief. In addition, it can
                  include tearing or mutilating identity documents related to
                  work.
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Legal Definition</h2>
                <div className="definition">
                  Under Massachusetts law, this includes anyone who knowingly
                  destroys, conceals, removes, confiscates or possesses any
                  actual or purported passport or other immigration document, or
                  any other actual or purported government identification
                  document, of another person. M.G.L. ch. 265, § 49.
                </div>
                <div className="definitionHeader">
                  <h2 className="h2">Evaluate</h2>
                </div>
              </div>
              <Accordion>
                <div className="accordionElement">
                  <Accordion.Item eventKey="1">
                    <div className="accordionHeader">
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <h5 className="h5">Question 1/5</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator ever take, hide, or confiscate
                              the worker’s passport for any period of time?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                    </div>
                    <Accordion.Body>
                      <RadioGroup row value={value} onChange={handleChange}>
                        <div className="yesButton">
                          <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                          />
                        </div>
                        <div className="noButton">
                          <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                          />
                        </div>
                        <div className="idkButton">
                          <FormControlLabel
                            value="I don't know"
                            control={<Radio color="primary" />}
                            label="I don't know"
                          />
                        </div>
                      </RadioGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordionElement">
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 2/5</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever take or hide any other
                            identity documents of the worker?
                          </p>
                        </Row>
                      </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                      <RadioGroup row value={value} onChange={handleChange}>
                        <div className="yesButton">
                          <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                          />
                        </div>
                        <div className="noButton">
                          <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                          />
                        </div>
                        <div className="idkButton">
                          <FormControlLabel
                            value="I don't know"
                            control={<Radio color="primary" />}
                            label="I don't know"
                          />
                        </div>
                      </RadioGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordionElement">
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 3/5</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever destroy any of the worker’s
                            identity documents?
                          </p>
                        </Row>
                      </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                      <RadioGroup row value={value} onChange={handleChange}>
                        <div className="yesButton">
                          <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                          />
                        </div>
                        <div className="noButton">
                          <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                          />
                        </div>
                        <div className="idkButton">
                          <FormControlLabel
                            value="I don't know"
                            control={<Radio color="primary" />}
                            label="I don't know"
                          />
                        </div>
                      </RadioGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordionElement">
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 4/5</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the worker ever lack access to their identity
                            documents, such as passports, work permits, birth
                            certificates?
                          </p>
                        </Row>
                      </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                      <RadioGroup row value={value} onChange={handleChange}>
                        <div className="yesButton">
                          <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                          />
                        </div>
                        <div className="noButton">
                          <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                          />
                        </div>
                        <div className="idkButton">
                          <FormControlLabel
                            value="I don't know"
                            control={<Radio color="primary" />}
                            label="I don't know"
                          />
                        </div>
                      </RadioGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
                <div className="accordionElement">
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 5/5</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever tear, mutilate, destroy,
                            conceal, remove, confiscate, or possess any of the
                            worker's immigration documents or any other identity
                            documents?
                          </p>
                        </Row>
                      </Container>
                    </Accordion.Header>
                    <Accordion.Body>
                      <RadioGroup row value={value} onChange={handleChange}>
                        <div className="yesButton">
                          <FormControlLabel
                            value="Yes"
                            control={<Radio color="primary" />}
                            label="Yes"
                          />
                        </div>
                        <div className="noButton">
                          <FormControlLabel
                            value="No"
                            control={<Radio color="primary" />}
                            label="No"
                          />
                        </div>
                        <div className="idkButton">
                          <FormControlLabel
                            value="I don't know"
                            control={<Radio color="primary" />}
                            label="I don't know"
                          />
                        </div>
                      </RadioGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </div>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="button">
        <Button>EVALUATE</Button>
      </div>
    </div>
  );
};

export default AssessIdentityDocuments;
