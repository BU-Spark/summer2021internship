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
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AssessExtortion
