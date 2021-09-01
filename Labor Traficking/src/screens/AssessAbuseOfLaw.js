import "../styles/AssessAbuseOfLaw.css";
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
import Modal from 'react-bootstrap/Modal';

<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
  rel="stylesheet"
/>;

const AssessAbuseOfLaw = () => {
  const [q01, setQuestion01] = React.useState("Yes");
  const [q02, setQuestion02] = React.useState("Yes");
  const [q03, setQuestion03] = React.useState("Yes");
  const [q04, setQuestion04] = React.useState("Yes");

  const [showSH, setShowSH] = React.useState(false);
  const [showDisc, setShowDisc] = React.useState(false);
  const [showUnclear, setShowUnclear] = React.useState(false);

  const handleClose = () => {
    setShowSH(false);
    setShowDisc(false);
    setShowUnclear(false);
  };

  const handleShow = () => {
    if (q01 === 'Yes' || q02 === 'Yes' || q03 === 'Yes' || q04 === 'Yes') {
      setShowSH(true);
    } else {
      setShowUnclear(true);
    };


  };

  const Button = styled.button`
  background-color: #144d7e;
  color: #F4C346;
  font-size: 25px;
  padding: 10px 40px;
  margin: 10px -15px;
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
                  <Breadcrumb.Item active>Abuse of Law</Breadcrumb.Item>
                </Breadcrumb>
              </ol>
              <hr className="divider"></hr>
              <h1 className="h1">Abuse of Law</h1>
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
                Abuses or threatens to abuse the law or legal process.
              </i>
              <hr className="divider2"></hr>
              <div className="definitionHeader">
                {/* <h2 className="h2">Lay Definition</h2> */}
                <div className="definition">
                  Abuse of the legal process under federal law includes the use
                  or threatened use of a law or legal process, whether
                  administrative, civil, or criminal, in any manner or for any
                  purpose for which the law was not designed. A common example
                  is a threat of deportation by an employer.{" "}
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Examples:</h2>
                <div className="definition" style={{ lineHeight: '40px' }}>
                  <ul>
                    <li>An employer threatens to deport the worker or "call immigration" if he stops working for the employer.</li>
                    <li>An employer threatens to falsely accuse the worker of a crime if she fails to work.</li>
                  </ul>
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Legal Definition</h2>
                <div className="definition">
                  There is currently no statutory or case law definition of
                  abuse of legal process under Massachusetts law. Abuse of the
                  legal process is defined federally as the use or threatened
                  use of a law or legal process, whether administrative, civil,
                  or criminal, in any manner or for any purpose for which the
                  law was not designed, in order to exert pressure on another
                  person to cause that person to take some action or refrain
                  from taking some action. 22 U.S.C. § 7102(1).
                </div>
              </div>
              <div className="definitionHeader">
                <div className="definitionHeader">
                  <h2 className="h2">Evaluate</h2>
                </div>
              </div>
              <div className="accordionMargin">
                <Accordion>
                  <div className="accordionElement">
                    <Accordion.Item eventKey="1">
                      <div className="accordionHeader">
                        <Accordion.Header>
                          <Container>
                            <Row>
                              <h5 className="h5">Question 1/4</h5>
                            </Row>
                            <Row>
                              <p class="question">
                                Did the perpetrator threaten the worker with
                                deportation?
                              </p>
                            </Row>
                          </Container>
                        </Accordion.Header>
                      </div>
                      <Accordion.Body>
                        <div className="radioAlign">
                          <RadioGroup row value={q01} onChange={event => setQuestion01(event.target.value)}>
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
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="accordionElement">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <h5 className="h5">Question 2/4</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator discuss immigration status or
                              the lack of immigration status?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <RadioGroup row value={q02} onChange={event => setQuestion02(event.target.value)}>
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
                            <h5 className="h5">Question 3/4</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator ever threaten the worker with
                              contacting the 'authorities,' law enforcement, or
                              the government in order to cause the worker fear?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <RadioGroup row value={q03} onChange={event => setQuestion03(event.target.value)}>
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
                            <h5 className="h5">Question 4/4</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator ever abuse or threaten to abuse
                              the law or legal process in any other way?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <RadioGroup row value={q04} onChange={event => setQuestion04(event.target.value)}>
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
            </div>
          </Col>
        </Row>
      </Container>

      <div className="button">
        <Button onClick={handleShow}>EVALUATE</Button>
      </div>

      <Modal show={showSH} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <i class='fas fa-exclamation-triangle'></i>
          <h1>Serious Harm</h1>

          There appear to be likely indicators of labor trafficking. Continue evaluation or consider referring to law enforcement at this time.

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            RE-EVALUATE
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showUnclear} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <i class="fa fa-question-circle"></i>
          <h1>Unclear</h1>
          It is unclear if this is a case of labor trafficking. Continue evaluation in this or other categories or consider referring to law enforcement at this time.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            RE-EVALUATE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AssessAbuseOfLaw;