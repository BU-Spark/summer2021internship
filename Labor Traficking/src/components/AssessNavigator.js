import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from 'react-router-bootstrap'

const AssessNavigator = () => {
    return (
        <div className="assessNavBar">
            <Nav defaultActiveKey="/home" className="flex-column">
                <LinkContainer to='/'>
                    <Nav.Link>Back to all topics</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assessSeriousHarm'>
                    <Nav.Link>Serious Harm</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assessPhysicalRestraint'>
                    <Nav.Link>Physical Restraint</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assessAbuseOfLaw'>
                    <Nav.Link>Abuse of Law</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assessExtortion'>
                    <Nav.Link>Extortion</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assessFinancialHarm'>
                    <Nav.Link>Financial Harm</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assessIdentifyDocuments'>
                    <Nav.Link>Identify Documents</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default AssessNavigator