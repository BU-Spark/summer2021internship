import "../styles/AssessSeriousHarm.css";
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

const AssessSeriousHarm = () => {
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
                  <Breadcrumb.Item active>Serious Harm</Breadcrumb.Item>
                </Breadcrumb>
              </ol>
              <hr className="divider"></hr>
              <h1 className="h1">Serious Harm</h1>
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
                Causes or threatens to cause serious harm to any person.
              </i>
              <hr className="divider2"></hr>
              <div className="definitionHeader">
                <h2 className="h2">Lay Definition</h2>
                <div className="definition">
                  Serious harm may be physical and nonphysical, including
                  psychological, financial, or reputational harm. Generally, the
                  test contemplates whether it is sufficiently serious, under
                  all the surrounding circumstances, to compel a reasonable
                  person of the same background and in the same circumstances to
                  perform or to continue performing labor or services in order
                  to avoid incurring that harm.
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Legal Definition</h2>
                <div className="definition">
                  There is currently no statutory or case law definition of
                  serious harm under Massachusetts law. Serious harm is defined
                  under federal law as any harm, whether physical or
                  nonphysical, including psychological, financial, or
                  reputational harm, that is sufficiently serious, under all the
                  surrounding circumstances, to compel a reasonable person of
                  the same background and in the same circumstances to perform
                  or to continue performing labor or services in order to avoid
                  incurring that harm. 18 USC § 1589(c)(2).
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
                            <h5 className="h5">Question 1/9</h5>
                          </Row>
                          <Row>
                            <p class="question">
                              Did the perpetrator physically hurt the worker or
                              anyone else involved in the case?
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
                          <h5 className="h5">Question 2/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator threaten to physically hurt the
                            worker or anyone else?
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
                          <h5 className="h5">Question 3/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator sexually assault the worker or
                            threaten to sexually assault the worker?
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
                          <h5 className="h5">Question 4/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator threaten the worker with
                            deportation?
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
                          <h5 className="h5">Question 5/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator threaten to contact the police
                            for some sort of unlawful purpose?
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
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 6/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator threaten to fire the worker (not
                            for good cause)?
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
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 7/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator threaten the worker with
                            reputational harm?
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
                  <Accordion.Item eventKey="8">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 8/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Was the worker emotionally abused by the
                            perpetrator?
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
                  <Accordion.Item eventKey="9">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 9/9</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator seriously harm or threaten the
                            worker with serious harm in any other way?
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

export default AssessSeriousHarm
