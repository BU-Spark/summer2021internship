import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer">

            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <h1>RESULT</h1>
                    </Col>
                    <Col className='text-center py-3 vl'>
                        A coalition of individuals focused on shining a light to bring labor trafficking out of the shadows.
                    </Col>
                    <Col className='text-center py-3'>
                        <dl>
                            <dd>Tools</dd>
                            <dd>Assess</dd>
                            <dd>Prepare</dd>
                            <dd>Resources</dd>
                        </dl>
                    </Col>
                    <Col className='text-center py-3'>
                        <dl>
                            <dd>About</dd>
                            <dd>Our goal</dd>
                            <dd>Who We Are</dd>
                        </dl>
                    </Col>
                    <Col className='text-center py-3'>
                        <dl>
                            <dd>Massachusettes Law</dd>
                            <dd>Criminal Penalties</dd>
                            <dd>Federal Crime Statues</dd>
                        </dl>
                    </Col>
                </Row>
                <hr></hr>
                <Row>
                    <Col className='text-center py-3'>
                        <h6>Copyright &copy; 2021. Office of Attorney General of MA. All rights reserved.</h6>
                    </Col>
                </Row>
            </Container>
            <div className='banner'>
                Need Help? Contact the U.S. National Human Trafficking Hotline.
                <div className="myContact">
                    <img alt="call" src="/icons/phone.svg"></img>
                    <a href="tel:1-888-373-7888"> 1-888-373-7888 </a>
                    <img alt="sms" src="/icons/mobile.svg"></img>
                    <a href="sms:233733&amp;body=BEFREE"> Text "BEFREE" to: 233733 </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
