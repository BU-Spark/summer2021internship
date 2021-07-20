import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/*
https://react-bootstrap.github.io/layout/grid/
*/
const ResourcesScreen = () => {
    return (
        <div>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="assess" src="/icons/AssessHeaderText.svg" className="image2"></img>
            </div>

            <div className="middleBanner">
                <i>Select a catagory to view questions, or  <a href="/"> click here to download the questions </a></i>
            </div>

            <Container>
                <Row>
                    <Col className="leftBox">1 of 3</Col>
                    <Col className="leftBox">2 of 3</Col>
                    <Col className="rightBox">3 of 3</Col>
                </Row>
                <Row>
                    <Col className="leftBox">1 of 3</Col>
                    <Col className="leftBox">2 of 3</Col>
                    <Col className="rightBox">3 of 3</Col>
                </Row>
                <Row>
                    <Col className="bottomBox">1 of 3</Col>
                    <Col className="bottomBox">2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResourcesScreen
