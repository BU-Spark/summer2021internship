import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const AssessScreen = () => {

    const centerBannerStyle = {
        textAlign: "center",
        fontSize: 16,
        paddingBottom: "20px",
        fontStyle: "italic"
    };

    const gridPadding = {
        marginLeft: '40px',
        marginRight: '40px',
        marginTop: '40px',
        marginBottom: '40px'
    };

    const divStyle = {
        marginLeft: '50px',
        marginRight: '30px',
        marginTop: '30px',
        marginBottom: '50px'
    };

    const textStyle = {
        marginTop: '30px',
        marginBottom: '40px'
    }

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

            <div style={gridPadding}>
                <Container>
                    <Row>
                        <Col className="leftBox">
                            <div style={divStyle}>
                                <div>
                                    <img alt="seriousharm" src="/icons/SeriousHarm.svg"></img>
                                </div>
                                <img alt="yellowline" src="/icons/yellowline.svg"></img>
                                <div style={textStyle}>
                                    <label>Causes or threatens to cause serious harm to any person.</label>
                                </div>
                                <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                            </div>
                        </Col>
                        <Col className="leftBox">
                            <div style={divStyle}>
                                <div>
                                    <img alt="physicalrestraint" src="/icons/PhysRestraint.svg"></img>
                                </div>
                                <img alt="yellowline" src="/icons/yellowline.svg"></img>
                                <div style={textStyle}>
                                    <label>Physically restrains or threatens to physically restrain another person.</label>
                                </div>
                                <div>
                                    <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </Col>
                        <Col className="rightBox">
                            <div style={divStyle}>
                                <div>
                                    <img alt="abuseoflaw" src="/icons/AbuseOfLaw.svg"></img>
                                </div>
                                <img alt="yellowline" src="/icons/yellowline.svg"></img>
                                <div style={textStyle}>
                                    <label>Abuses or threatens to abuse the law or legal process.</label>
                                </div>
                                <div>
                                    <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bottomBox">
                            <div style={divStyle}>
                                <div>
                                    <img alt="extortion" src="/icons/Extortion.svg"></img>
                                </div>
                                <img alt="yellowline" src="/icons/yellowline.svg"></img>
                                <div style={textStyle}>
                                    <label>Engages in extortion under Massachusetts Law. </label>
                                </div>
                                <div>
                                    <Link to="/assess/Extortion">VIEW QUESTIONS</Link> <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </Col>
                        <Col className="bottomBox">
                            <div style={divStyle}>
                                <div>
                                    <img alt="financialharm" src="/icons/FinancialHarm.svg"></img>
                                </div>
                                <img alt="yellowline" src="/icons/yellowline.svg"></img>
                                <div style={textStyle}>
                                    <label>Causes or threatens to cause financial harm to any person.</label>
                                </div>
                                <div>
                                    <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div style={divStyle}>
                                <div>
                                    <img alt="iddocuments" src="/icons/IdentityDocuments.svg"></img>
                                </div>
                                <img alt="yellowline" src="/icons/yellowline.svg"></img>
                                <div style={textStyle}>
                                    <label>Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported government identification document, of another person.</label>
                                </div>
                                <div>
                                    <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AssessScreen
