import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AssessNavigator from "../components/AssessNavigator";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../styles/AssessSeriousHarm.css";

const AssessExtortion = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
            <AssessNavigator />
          </Col>
          <Col>
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
              <button class="accordion">Section 1</button>
              <div class="panel">
                <p>Lorem ipsum...</p>
              </div>
              <button class="accordion">Section 2</button>
              <div class="panel">
                <p>Lorem ipsum...</p>
              </div>
              <button class="accordion">Section 3</button>
              <div class="panel">
                <p>Lorem ipsum...</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

export default AssessExtortion;
