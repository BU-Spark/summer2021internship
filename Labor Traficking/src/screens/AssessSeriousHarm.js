import React from "react";
import "../styles/AssessSeriousHarm.css";
import { Container, Row, Col } from "react-bootstrap";
import AssessNavigator from "../components/AssessNavigator";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Accordion from "react-bootstrap/Accordion";

const AssessExtortion = () => {
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
                <Breadcrumb>
                  <Breadcrumb.Item href="/">
                    <li class="active">
                      <i className="fa fa-home"></i>
                    </li>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item href="/Assess">Assess</Breadcrumb.Item>
                  <Breadcrumb.Item active>Serious Harm</Breadcrumb.Item>
                </Breadcrumb>
              </ol>
              <hr></hr>
              <h1>Serious Harm</h1>
              <i>
                Physically restrains or threatens to physically restrain another
                person.
              </i>
              <hr></hr>
              <h2>Lay Definition</h2>
              Serious harm may be physical and nonphysical, including
              psychological, financial, or reputational harm. Generally, the
              test contemplates whether it is sufficiently serious, under all
              the surrounding circumstances, to compel a reasonable person of
              the same background and in the same circumstances to perform or to
              continue performing labor or services in order to avoid incurring
              that harm.
              <h2>Legal Definition</h2>
              There is currently no statutory or case law definition of serious
              harm under Massachusetts law. Serious harm is defined under
              federal law as any harm, whether physical or nonphysical,
              including psychological, financial, or reputational harm, that is
              sufficiently serious, under all the surrounding circumstances, to
              compel a reasonable person of the same background and in the same
              circumstances to perform or to continue performing labor or
              services in order to avoid incurring that harm. 18 USC §
              1589(c)(2).
              <h2>Evaluate</h2>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 1/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator physically hurt the worker or
                          anyone else involved in the case?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm tasty placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 2/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator threaten to physically hurt the
                          worker or anyone else?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 3/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator sexually assault the worker or
                          threaten to sexually assault the worker?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 4/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator threaten the worker with
                          deportation?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 5/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator threaten to contact the police for
                          some sort of unlawful purpose?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 6/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator threaten to fire the worker (not
                          for good cause)?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 7/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator threaten the worker with
                          reputational harm?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 8/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Was the worker emotionally abused by the perpetrator?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                    <Container>
                      <Row>
                        <h5>Question 9/9</h5>
                      </Row>
                      <Row>
                        <p>
                          Did the perpetrator seriously harm or threaten the
                          worker with serious harm in any other way?
                        </p>
                      </Row>
                    </Container>
                  </Accordion.Header>
                  <Accordion.Body>mm yummy placeholder</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AssessExtortion;
