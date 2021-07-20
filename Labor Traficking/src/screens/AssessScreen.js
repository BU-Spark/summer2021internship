import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//https://reactgo.com/material-ui-react-tutorial/

const AssessScreen = () => {

    const centerBannerStyle = {
        textAlign: "center",
        fontSize: 16,
        paddingBottom: "20px",
        fontStyle: "italic"
    };

    return (
        <>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="assess" src="/icons/AssessHeaderText.svg" className="image2"></img>
            </div>

            <div className="middleBanner">
                <p style={centerBannerStyle}>Select a catagory to view questions, or
                    <span style={{ color: "#ff0000" }}> </span>
                    <span style={{ color: "#20548c", textDecoration: "underline", fontStyle: "italic" }}>click here to download the questions</span>
                </p>
            </div>

            <Container>
                <Row>
                    <Col className="leftBox">
                        <div>
                            <img alt="seriousharm" src="/icons/SeriousHarm.svg"></img>
                        </div>
                        <img alt="yellowline" src="/icons/yellowline.svg"></img>
                        <label>Causes or threatens to cause serious harm to any person.</label>
                        <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className="leftBox">
                        <div>
                            <img alt="physicalrestraint" src="/icons/PhysRestraint.svg"></img>
                        </div>
                        <img alt="yellowline" src="/icons/yellowline.svg"></img>
                        <label>Physically restrains or threatens to physically restrain another person.</label>
                        <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className="rightBox">
                        <div>
                            <img alt="abuseoflaw" src="/icons/AbuseOfLaw.svg"></img>
                        </div>
                        <img alt="yellowline" src="/icons/yellowline.svg"></img>
                        <label>Abuses or threatens to abuse the law or legal process.</label>
                        <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                    </Col>
                </Row>
                <Row>
                    <Col className="bottomBox">
                        <div>
                            <img alt="extortion" src="/icons/Extortion.svg"></img>
                        </div>
                        <img alt="yellowline" src="/icons/yellowline.svg"></img>
                        <label>Engages in extortion under Massachusetts Law. </label>
                        <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className="bottomBox">
                        <div>
                            <img alt="financialharm" src="/icons/FinancialHarm.svg"></img>
                        </div>
                        <img alt="yellowline" src="/icons/yellowline.svg"></img>
                        <label>Causes or threatens to cause financial harm to any person.</label>
                        <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col>
                        <div>
                            <img alt="iddocuments" src="/icons/IdentityDocuments.svg"></img>
                        </div>
                        <img alt="yellowline" src="/icons/yellowline.svg"></img>
                        <label>Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported government identification document, of another person.</label>
                        <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AssessScreen
