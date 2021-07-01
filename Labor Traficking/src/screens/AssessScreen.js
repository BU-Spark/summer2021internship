import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);

const AssessScreen = () => {
    return (
<>
            <div class="topBanner">
                <img alt="topBanner" src="/icons/header.svg" class="image1"></img>
                <img alt="result" src="/icons/AssessWordMark.svg" class="image2"></img>
                

                <hr className='yellowLine' />
                <div class="description">
                    <label>
                    Questions designed for investigators to help determine if circumstances rise to the level of labor trafficking under Massachusetts law.
                    </label>
                </div>
            </div>
            <div class="middleBanner">
            </div>

            <Container>
                <Row>
                    <Col className='text py-3 vl'>
                        <h2>Serious Harm</h2>
                        <h4>Causes or threatens to cause serious harm to any person.</h4>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3 vl'>
                        <h2>Physical Restraint</h2>
                        <h4>Physically restrains or threatens to physically restrain another person.</h4>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3'>
                        <h2>Abuse of Law</h2>
                        <h4>Abuses or threatens to abuse the law or legal process.</h4>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                </Row>

                <ColoredLine color="black" />

                <Row>
                <Col className='text py-3 vl'>
                        <h2>Extortion</h2>
                        <h4>Engages in extortion under Massachusetts Law. </h4>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3 vl'>
                        <h2>Financial Harm</h2>
                        <h4>Causes or threatens to cause financial harm to any person.</h4>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3'>
                        <h2>Identity Documents</h2>
                        <h4>Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported government identification document, of another person.</h4>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AssessScreen
