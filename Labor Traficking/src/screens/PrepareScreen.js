import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

const PrepareScreen = () => {

    return (
        <div>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="prepare" src="/icons/HeaderTextPrepare.svg" className="image2"></img>
            </div>

            <div className="middleBanner">
                <p style={{ textAlign: 'center', fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: 'normal', fontSize: 20 }}>
                    <span style={{ color: "##606263" }}>Click tabs to view tips or </span>
                    <span style={{ color: "#20548c", textDecoration: "underline", fontStyle: "italic" }}>click here to download the tips</span>
                </p>
            </div>
            <div style={{ marginLeft: 100, marginRight: 100, marginBottom: 100, borderStyle: 'solid', width: '61.8rem', paddingRight: '40px' }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Tip #1: Develop Trust</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Be Patient
                                    <ul>
                                        <li>
                                            Establishing trust with the victim may be difficult during initial interviews. Victims may not initially divulge key details due to fear.
                                        </li>

                                        <li>
                                            In the human trafficking context, it is common to engage in multiple interviews as trust develops.
                                            It is also common that there may be initial inconsistencies as a result of distrust or the victim’s lack of understanding about the legal process.
                                        </li>
                                    </ul>
                                </li>

                                <li>Interview Settings
                                    <ul>
                                        <li>
                                            Victims should be interviewed in a setting in which they are physically and emotionally comfortable.
                                            Interviewers should offer water, avoid noisy areas or areas with heavy foot traffic, and ensure that only essential people are present in the interview.
                                        </li>
                                    </ul>
                                </li>

                                <li>Confidentiality limitations
                                    <ul>
                                        <li>
                                            You will not be able to keep details disclosed by the victim confidential.
                                            Explain  this at the beginning so the victim will understand your role and not feel betrayed if you have to share information with prosecutors or other government officials.
                                        </li>
                                    </ul>
                                </li>

                                <li>Referrals
                                    <ul>
                                        <li>
                                            Make referrals to appropriate legal, social, and mental health services as soon as possible to establish trust and to ensure the victim receives needed support.
                                        </li>
                                    </ul>
                                </li>

                                <li>Communication
                                    <ul>
                                        <li>
                                            If the victim has limited English proficiency, trust will be nearly impossible to establish without a skilled interpreter.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Tip #2: Understand the impact of immigration status on victim cooperation</Accordion.Header>
                        <Accordion.Body>
                            <p>Undocumented victims are particularly at risk for human trafficking and may fear engaging with law enforcement.</p>

                            <p>Immigration threats are often used as a means of power and control over the victim. If the victim is undocumented or if you are unsure of the victim’s immigration status, make a referral immediately to an experienced immigration attorney. </p>
                            {/* NEED TO ADD HYPERLINK BELOW */}
                            <span style={{ color: "#20548c", textDecoration: "underline" }}>List of local immigation legal services providers.</span>

                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Tip #3: Engage in safety planning</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Safety planning is very important</li>
                                <ul>
                                    <li>Ask about the victim’s immediate safety and take appropriate steps to ensure safety both before and after interviewing.</li>
                                    <li> Involve a victim advocate in the process as soon as possible</li>
                                </ul>
                                <span style={{ color: "#20548c", textDecoration: "underline" }}>List of questions to consider when thinking about safety planning</span>
                                <li>Remember</li>
                                <ul>
                                    <li>Victims may be fearful of reprisals to themselves and their family members.</li>
                                    <li>The victim may need to work to continue to repay debt and/or to support family members here or abroad.</li>
                                    {/* NEED TO ADD HYPERLINK BELOW */}
                                    <li>Some undocumented victims may be eligible for work authorization.
                                        <span style={{ color: "#20548c", textDecoration: "underline" }}>Learn more about immigration relief.</span>
                                    </li>
                                    {/* NEED TO ADD HYPERLINK BELOW */}
                                    <li>Make referrals to organizations that can assist with safety planning.
                                        <span style={{ color: "#20548c", textDecoration: "underline" }}> Learn about available victim services.</span>
                                    </li>

                                </ul>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Tip #4: Use a qualified interpreter</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>It is important to use skilled, culturally competent interpreters to assist in interviews with victims who have limited English proficiency.</li>
                                <li>Always ask the victim about any languages he or she speaks and in what language he or she prefers to communicate.</li>
                                <li>In-person interpretation is preferable.</li>
                                <li>
                                    Before the interview, screen your interpreter to make sure he or she is not involved in the case and does not have connections to the suspect.
                                    Often, ethnic communities can be small, and it is essential that the interpreter has no relationship with the suspect and understands the importance of confidentiality.
                                </li>
                                <li>
                                    Understand that there may be stigma and subtle cultural considerations that can affect the victim’s disclosures to interpreters.
                                    For example, a victim may not feel comfortable disclosing a sexual assault in front of someone from his or her same ethnicity, fearing stigma or blame.
                                </li>
                                <p></p>
                                <span style={{ color: "black", fontWeight: "bold" }}>Consult with your office about what interpretation resources may be available to you.</span>
                                <p></p>
                                <p>
                                    You may consider contracting with a court certified interpreter from the <span style={{ color: "#20548c", textDecoration: "underline" }}>Office of Court Interpreter Services (OCIS)</span>
                                    or contacting the <span style={{ color: "#20548c", textDecoration: "underline" }}>Language Line</span> for phone interpretation if no in-person interpreter is available.
                                </p>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Tip #5: Make referrals to appropriate victim services as soon as possible</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Referrals to victim services</li>
                                <ul>
                                    <li>
                                        The first priority is ensuring that the victim’s basic needs are met. This includes access to safe
                                        housing, mental health services, medical services, and food. <span style={{ color: "#20548c", textDecoration: "underline" }}>Click here to learn more about available victim services.</span>
                                    </li>
                                    <li>
                                        It is important to refer the victim to an attorney as soon as possible to ensure that he or she
                                        can learn about his or her rights. A victim of labor trafficking may be eligible for certain
                                        protections under law, such as victim compensation, criminal restitution, immigration relief, and
                                        civil remedies. <span style={{ color: "#20548c", textDecoration: "underline" }}>Click here to learn more about available legal services and how to make referral.</span>
                                    </li>
                                </ul>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Tip #6: Educate yourself about trauma</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Trauma-informed interviewing</li>
                                <ul>
                                    <li>
                                        Approach the victim in a trauma-informed manner. It is important to understand how trauma can
                                        affect a victim’s disclosure and how to respond when the signs of trauma present themselves in an
                                        interview.
                                    </li>
                                    <li>
                                        Often, victims may suffer from post-traumatic stress disorder, depression, and/or other mental
                                        health conditions. For this reason, they may have difficulty telling you about key parts of their
                                        story. Trauma can make victims reluctant to disclose and may affect their memory of an event,
                                        causing them to disclose their stories in a non-linear or inconsistent manner. Facts may emerge
                                        over time, and it may be important to engage in multiple interviews or ask for the assistance of a
                                        forensic interviewer, when appropriate.
                                    </li>
                                    <li>
                                        Explore whether the victim has mental health supports in place at the outset and if not, make
                                        appropriate referrals to ensure the victim has support throughout the process. <span style={{ color: "#20548c", textDecoration: "underline" }}>Click here for a list of victim services.</span>
                                    </li>
                                </ul>
                                <li>Child victims</li>
                                <ul>
                                    <li>
                                        If a child (any victim under 18) is involved, mandated reporters must file a 51A report with the
                                        Massachusetts Department of Children and Families (DCF), which will report the situation to the
                                        local District Attorney’s Office. By law, DCF will work to establish a multidisciplinary team to
                                        provide comprehensive, tailored services to the child victim, and coordinate an interview.
                                    </li>
                                    <li>
                                        Please consult with your local <span style={{ color: "#20548c", textDecoration: "underline" }}>Children’s Advocacy Center</span>  to coordinate, and the multidisciplinary team will work with you to consider if an interview of
                                        the child is appropriate and if so, how best to approach the interview.
                                    </li>
                                </ul>
                                <li>Culture</li>
                                <ul>
                                    <li>
                                        Culture can play an important role in how a victim engages in the interview process. If the victim
                                        is from a distinct ethnic or social group, educate yourself about the culture.
                                    </li>
                                    <li>
                                        Cultural norms may shape what or how the victim will disclose critical information. Consider
                                        connecting with social service providers in your area with expertise serving this population.
                                    </li>
                                </ul>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
};

export default PrepareScreen
