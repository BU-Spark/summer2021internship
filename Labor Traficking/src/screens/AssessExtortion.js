import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AssessNavigator from '../components/AssessNavigator';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

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
                            <Breadcrumb>
                                <Breadcrumb.Item href="/"><i className="fa fa-home"></i></Breadcrumb.Item>
                                <Breadcrumb.Item href="/Assess">Assess</Breadcrumb.Item>
                                <Breadcrumb.Item active>Extortion</Breadcrumb.Item>
                            </Breadcrumb>

                            <hr></hr>

                            <h1>Extortion</h1>

                            <i>Engages in extortion under Massachusetts law</i>

                            <hr></hr>

                            <h2>Lay Definition</h2>
                            Extortion is the practice of trying to get something through force, threats, or blackmail.

                            <h2>Legal Definition</h2>
                            "Whoever, verbally or by a written or printed communication, maliciously threatens to accuse another of a crime or offence, or by a verbal or written or printed communication maliciously threatens an injury to the person or property of another, or any police officer or person having the powers of a police officer, or any officer, or employee of any licensing authority who verbally or by written or printed communication maliciously and unlawfully uses or threatens to use against another the power or authority vested in him, with intent thereby to extort money or any pecuniary advantage, or with intent to compel any person to do any act against his will, shall be punished by imprisonment in the state prison for not more than fifteen years, or in the house of correction for not more than two and one half years, or by a fine of not more than five thousand dollars, or both." M.G.L. ch. 265, § 25.

                            <h2>Example</h2>
                            An employer threatens to release embarrassing photographs, unless the worker continues to work.

                            <h2>Evaluate</h2>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AssessExtortion
