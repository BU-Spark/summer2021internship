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
                <LinkContainer to='/assess/SeriousHarm'>
                    <Nav.Link>Serious Harm</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assess/PhysicalRestraint'>
                    <Nav.Link>Physical Restraint</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assess/AbuseOfLaw'>
                    <Nav.Link>Abuse of Law</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assess/Extortion'>
                    <Nav.Link>Extortion</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assess/FinancialHarm'>
                    <Nav.Link>Financial Harm</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/assess/IdentityDocuments'>
                    <Nav.Link>Identity Documents</Nav.Link>
                </LinkContainer>
            </Nav>
        </div>
    )
}

export default AssessNavigator