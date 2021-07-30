import React from 'react'
import { Container } from 'react-bootstrap';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

const AssessSeriousHarm = () => {
    return (
        <className titlebox>
            <hr />
            <Container>
            <img alt="seriousharm" src="/icons/SeriousHarm.svg"></img>
            </Container>
            <img alt="yellowline" src="/icons/yellowline.svg"></img>
            <div>
                <label>Physically restrains or threatens to physically restrain another person.</label>
            </div>
            <hr />
            <h4>Lay Definition</h4>
            Serious harm may be physical and nonphysical, including psychological, financial, or reputational harm. Generally, the test contemplates whether it is sufficiently serious, under all the surrounding circumstances, to compel a reasonable person of the same background and in the same circumstances to perform or to continue performing labor or services in order to avoid incurring that harm.
            <h4>Legal Definition</h4>
            There is currently no statutory or case law definition of serious harm under Massachusetts law. Serious harm is defined under federal law as any harm, whether physical or nonphysical, including psychological, financial, or reputational harm, that is sufficiently serious, under all the surrounding circumstances, to compel a reasonable person of the same background and in the same circumstances to perform or to continue performing labor or services in order to avoid incurring that harm. 18 USC § 1589(c)(2).
            <h4>Evaluate</h4>
            
        </className>
    )
}

export default AssessSeriousHarm