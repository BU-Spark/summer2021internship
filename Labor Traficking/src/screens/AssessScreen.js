import React from 'react'
import { Dimensions, View } from 'react-native'
const DeviceWidth = Dimensions.get('window').width

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

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <View style={{
                    flexDirection: 'row',
                    backgroundColor: "grey"
                }}>
                    <View>
                        <View style={{ width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, marginBottom: 2, backgroundColor: 'white' }}>
                            <h2 style={{ color: '#20548c' }}> Serious Harm</h2>
                            <p>Causes or threatens to cause serious harm to any person.</p>
                            <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                        </View>
                        <View style={{ width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, marginTop: 1, backgroundColor: 'white' }}>
                            <h2 style={{ color: '#20548c' }}>Extortion</h2>
                            <p>Engages in extortion under Massachusetts Law.</p>
                            <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, marginBottom: 2, marginLeft: 2, backgroundColor: 'white' }}>
                            <h2 style={{ color: '#20548c' }}>Physical Restraint</h2>
                            <p>Physically restrains or threatens to physically restrain another person.</p>
                            <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                        </View>
                        <View style={{ width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, marginTop: 1, marginLeft: 2, backgroundColor: 'white' }}>
                            <h2 style={{ color: '#20548c' }}>Financial Harm</h2>
                            <p>Causes or threatens to cause financial harm to any person.</p>
                            <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, marginBottom: 2, marginLeft: 2, backgroundColor: 'white' }}>
                            <h2 style={{ color: '#20548c' }}>Abuse of Law</h2>
                            <p>Abuses or threatens to abuse the law or legal process.</p>
                            <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                        </View>
                        <View style={{ width: DeviceWidth * 0.3, height: DeviceWidth * 0.3, marginTop: 1, marginLeft: 2, backgroundColor: 'white' }}>
                            <h2 style={{ color: '#20548c' }}>Identity Documents</h2>
                            <p>Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported government identification document, of another person.</p>
                            <a href="/">VIEW QUESTIONS<i className="fas fa-arrow-right"></i> </a>
                        </View>
                    </View>
                </View>
            </View>

            {/* <div style={divStyle}>
            <Container>
                <Row>
                    <Col className='text py-3 vl border-right border-bottom'>
                        <h2 style={{ color: '#20548c' }}>Serious Harm</h2>
                        <p>Causes or threatens to cause serious harm to any person.</p>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3 vl border-bottom'>
                        <h2 style={{ color: '#20548c' }}>Physical Restraint</h2>
                        <p>Physically restrains or threatens to physically restrain another person.</p>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3 border-bottom'>
                        <h2 style={{ color: '#20548c' }}>Abuse of Law</h2>
                        <p>Abuses or threatens to abuse the law or legal process.</p>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                </Row>

                <Row>
                <Col className='text py-3 vl'>
                        <h2 style={{ color: '#20548c' }}>Extortion</h2>
                        <p>Engages in extortion under Massachusetts Law.</p>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3 vl'>
                        <h2 style={{ color: '#20548c' }}>Financial Harm</h2>
                        <p>Causes or threatens to cause financial harm to any person.</p>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                    <Col className='text py-3'>
                        <h2 style={{ color: '#20548c' }}>Identity Documents</h2>
                        <p>Knowingly destroys, conceals, removes, confiscates or possesses any actual or purported government identification document, of another person.</p>
                        <a href="/">VIEW QUESTIONS<i class="fas fa-arrow-right"></i> </a>
                    </Col>
                </Row>
            </Container>
        </div> */}
        </>
    )
}

export default AssessScreen
