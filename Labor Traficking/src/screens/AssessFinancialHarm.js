import "../styles/AssessAbuseOfLaw.css";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { View } from "react-native";
import { Container, Row, Col } from "react-bootstrap";
import AssessNavigator from "../components/AssessNavigator";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Accordion from "react-bootstrap/Accordion";

<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
  rel="stylesheet"
/>;

const AssessFinancialHarm = () => {
  const [value, setValue] = React.useState("Yes");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
                Causes or threatens to cause financial harm to any person.
              </i>
              <hr className="divider2"></hr>
              <div className="definitionHeader">
                <h2 className="h2">Lay Definition</h2>
                <div className="definition">
                  Abuse of the legal process under federal law includes the use
                  or threatened use of a law or legal process, whether
                  administrative, civil, or criminal, in any manner or for any
                  purpose for which the law was not designed. A common example
                  is a threat of deportation by an employer.{" "}
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
                        <RadioGroup row value={value} onChange={handleChange}>
                          <div className="yesButton">
                            <FormControlLabel
                              value="Yes"
                              control={<Radio />}
                              label="Yes"
                            />
                          </div>
                          <div className="noButton">
                            <FormControlLabel
                              value="No"
                              control={<Radio />}
                              label="No"
                            />
                          </div>
                          <div className="idkButton">
                            <FormControlLabel
                              value="I don't know"
                              control={<Radio />}
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
    </div>
  );
};

export default AssessFinancialHarm;
