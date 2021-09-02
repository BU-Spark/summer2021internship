import "../styles/AssessPhysicalRestraint.css";
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

const AssessPhysicalRestraint = () => {

  const [q01, setQuestion01] = React.useState('');
  const [q02, setQuestion02] = React.useState('');
  const [q03, setQuestion03] = React.useState('');
  const [q04, setQuestion04] = React.useState('');
  const [q05, setQuestion05] = React.useState('');
  const [q06, setQuestion06] = React.useState('');
  const [q07, setQuestion07] = React.useState('');

  const [showSH, setShowSH] = React.useState(false);
  const [showDisc, setShowDisc] = React.useState(false);
  const [showUnclear, setShowUnclear] = React.useState(false);

  const handleClose = () => {
    setShowSH(false);
    setShowDisc(false);
    setShowUnclear(false);
  };

  const handleShow = () => {
    if (q01 === 'Yes' || q02 === 'Yes' || q03 === 'Yes' || q04 === 'Yes'
      || q05 === 'Yes' || q06 === 'Yes' || q07 === 'Yes') {
      setShowSH(true);
    } else if (q01 === '' || q02 === '' || q03 === '' || q04 === ''
      || q05 === '' || q06 === '' || q07 === '') {
      setShowDisc(true);
    }
    else {
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
                  <Breadcrumb.Item active>Physical Restraint</Breadcrumb.Item>
                </Breadcrumb>
              </ol>
              <hr className="divider"></hr>
              <h1 className="h1b">Physical Restraint</h1>
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
                Physically restrains or threatens to physically restrain another
                person
              </i>
              <hr className="divider2"></hr>
              <div className="definitionHeader">
                {/* <h2 className="h2">Lay Definition</h2> */}
                <div className="definition">
                  Physical restraint is not defined under Massachusetts law.
                  Federally, it has been defined generally as purposely limiting
                  or obstructing the freedom of a person’s bodily movement. This
                  can range from using locks on doors or windows to more subtle
                  forms of control that restrict another person’s ability to
                  move around.
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Examples</h2>
                <div className="definition">
                  <ul>
                    <li>A domestic worker is brought to the United States by an employer.
                      Her employers do not permit her to leave the house unaccompanied,
                      and her movement is monitored by cameras.</li>
                  </ul>
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Legal Definition</h2>
                <div className="definition">
                  There is currently no statutory or case law definition of
                  physical restraint under Massachusetts law.
                </div>
                <div className="definitionHeader">
                  <h2 className="h2">Evaluate</h2>
                </div>
              </div>.
              <div className="accordionMargin">
                <Accordion>
                  <div className="accordionElement">
                    <Accordion.Item eventKey="1">
                      <div className="accordionHeader">
                        <Accordion.Header>
                          <Container>
                            <Row>
                              <h5 className="h5">Question 1/7</h5>
                            </Row>
                            <Row>
                              <p class="question">
                                Did the perpetrator lock the windows or doors
                                where the worker was residing or working?
                              </p>
                            </Row>
                          </Container>
                        </Accordion.Header>
                      </div>
                      <Accordion.Body>
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
                      </Accordion.Body>
                    </Accordion.Item>
                  </div>
                  <div className="accordionElement">
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <h5 className="h5">Question 2/7</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Was the worker monitored by the perpetrator?
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
                            <h5 className="h5">Question 3/7</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Was the worker’s movement restricted in any way by
                              the perpetrator?
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
                            <h5 className="h5">Question 4/7</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator kidnap or threaten to kidnap the
                              worker?
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
                  <div className="accordionElement">
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <h5 className="h5">Question 5/7</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator hold the worker against will?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <RadioGroup row value={q05} onChange={event => setQuestion05(event.target.value)}>
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
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <h5 className="h5">Question 6/7</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the worker have limited communication with
                              family and/or friends?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <RadioGroup row value={q06} onChange={event => setQuestion06(event.target.value)}>
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
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>
                        <Container>
                          <Row>
                            <h5 className="h5">Question 7/7</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator ever physically restrain or
                              threaten to physically restrain the worker in any
                              other way?
                            </p>
                          </Row>
                        </Container>
                      </Accordion.Header>
                      <Accordion.Body>
                        <RadioGroup row value={q07} onChange={event => setQuestion07(event.target.value)}>
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
          <i class='fas fa-exclamation-triangle fa-2x'></i>
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
          <i class="fa fa-question-circle fa-2x"></i>
          <h1>Unclear</h1>
          It is unclear if this is a case of labor trafficking. Continue evaluation in this or other categories or consider referring to law enforcement at this time.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            RE-EVALUATE
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDisc} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Disclaimer</h1>
          Your answers will not be saved if you leave this page. We recommend that you finish the evaluation to determine the result before exiting.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            CONTINUE EVALUATION
          </Button>
          <Button variant="primary" onClick={handleClose}>
            LEAVE PAGE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AssessPhysicalRestraint;
