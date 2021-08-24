import "../styles/AssessFinancialHarm.css";
import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

const AssessFinancialHarm = () => {
  const [value, setValue] = React.useState("Yes");

  const handleChange = (event) => {
    setValue(event.target.value);
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
                  <Breadcrumb.Item active>Financial Harm</Breadcrumb.Item>
                </Breadcrumb>
              </ol>
              <hr className="divider"></hr>
              <h1 className="h1">Financial Harm</h1>
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
                {/* <h2 className="h2">Lay Definition</h2> */}
                <div className="definition">
                    Financial harm is when a perpetrator puts the worker in a detrimental 
                    position in relation to wealth, property, or other monetary benefits 
                    through extortion, criminal usury, or illegal employment contracts. 
                    This might include a situation where the perpetrator uses an illegal 
                    employment contract to lure a worker to work in demeaning conditions.{" "}
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Examples:</h2>
                <div className="definition" style={{lineHeight: '40px'}}>
                  <ul>
                    <li>An employer refuses to pay wages to the worker for the work she has done.</li>
                    <li>A worker makes one mistake on the job, and the employer refuses to pay him that week.</li>
                    <li>An employer tells the worker that he has no wages to be paid out because of the costs the employer 
                      is incurring to house, feed, transport him to the worksite each day.</li>
                  </ul>
                </div>
              </div>
              <div className="definitionHeader">
                <h2 className="h2">Legal Definition</h2>
                <div className="definition">
                    “Financial harm” is defined as a detrimental position in relation 
                    to wealth, property or other monetary benefits that occurs as a 
                    result of another person’s illegal act including, but not limited 
                    to, extortion under by section 25, a violation of section 49 of 
                    chapter 271 (“Criminal Usury”), or illegal employment contracts.” 
                    M.G.L. ch. 265, § 49.
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
                            <h5 className="h5">Question 1/12</h5>
                          </Row>
                          <Row>
                            <p class="question">
                                Was the worker paid less than minimum wage?
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
                          <h5 className="h5">Question 2/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever open a bank account in the worker's name?
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
                          <h5 className="h5">Question 3/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever withdraw money from the worker’s bank account?
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
                          <h5 className="h5">Question 4/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever obtain credit cards or other items using the worker’s identity?
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
                          <h5 className="h5">Question 5/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the worker have a debt owed to the perpetrator?
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
                          <h5 className="h5">Question 6/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever subject the worker to unreasonable deductions for items, such as food, housing, or transportation?
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
                          <h5 className="h5">Question 7/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Was the worker paid overtime?
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
                          <h5 className="h5">Question 8/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the worker ever fail to receive accurate paychecks or fail to be paid for all hours worked?
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
                          <h5 className="h5">Question 9/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Were the worker’s wages ever withheld?
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
                  <Accordion.Item eventKey="10">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 10/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the worker have to pay rent or pay for other basic necessities to the perpetrator?
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
                  <Accordion.Item eventKey="11">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 11/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever cause or threaten to cause financial harm in any other way?
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
                  <Accordion.Item eventKey="12">
                    <Accordion.Header>
                      <Container>
                        <Row>
                          <h5 className="h5">Question 12/12</h5>
                        </Row>
                        <Row>
                          <p class="question">
                            Did the perpetrator ever cause or threaten to cause financial harm in any other way?
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

export default AssessFinancialHarm;
