import React from 'react'
import "../styles/MassLawScreen.css";

const MassLawScreen = () => {
    return (
        <div>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="massLaw" src="/icons/HeaderTextMassLaw.svg" className="image2"></img>
            </div>
            <div className="middleBanner">
                <h3>Massachusetts Law</h3>
                <img alt="line" src="/icons/yellowline.svg" className="yellowLineSize"></img>
                <div>
                    <i>
                        The Massachusetts anti-trafficking statute was enacted in 2012, and the law is still evolving. For those reasons, we often look for guidance from federal definitions and federal case law.
                    </i>
                </div>
                <hr />

                <div>
                    <h4>Crime of Trafficking in Persons for Forced Services</h4>
                    <i>M.G.L. ch. 265, § 51</i>
                    <br />
                </div>
                <div>
                    Under Massachusetts law, the crime of labor trafficking is known as Trafficking in Persons for Forced Services. This crime involves whoever knowingly:
                    <ul>
                        <li>subjects, or attempts to subject, another person to forced services, or recruits, entices, harbors, transports, provides or obtains by any means, or attempts to recruit, entice, harbor, transport, provide or obtain by any means, another person, intending or knowing that such person will be subjected to forced services; or</li>
                        <li>benefits, financially or by receiving anything of value, as a result of a violation of the above</li>
                    </ul>
                </div>

                <div>
                    <h4>Definition of Forced Services</h4>
                    <i>M.G.L. ch. 265, § 51</i>
                    <br />
                </div>
                <div>
                    If one or more of the six prongs listed below are met, the conduct may be categorized as Trafficking in Persons for Forced Services. “Forced Services” is defined as services performed or provided by a person that are obtained or maintained by another person who:
                    <ul>
                        <li>causes or threatens to cause serious harm to any person</li>
                        <li>physically restrains or threatens to physically restrain another person</li>
                        <li>abuses or threatens to abuse the law or legal processknowingly destroys, conceals, removes, confiscates or possesses any actual or purported passport or other immigration document, or any other actual or purported government identification document, of another person</li>
                        <li>engages in extortion under Massachusetts law</li>
                        <li>causes or threatens to cause financial harm to any person</li>
                    </ul>
                    “Services” are any act performed by a person under the supervision of or for the benefit of another including, but not limited to, commercial sexual activity and sexually explicit performances
                </div>

                <div>
                    <h4>Overlap with Other Crimes</h4>
                    <i>M.G.L. ch. 265, § 51</i>
                    <br />
                </div>
                <div>
                    Labor trafficking may overlap with other crimes, such as sex trafficking, sexual assault, wage theft, and other crimes. An investigator should keep in mind that other violations of law may surface.
                </div>

                <div>
                    <h4>Criminal Penalties</h4>
                    <br />
                </div>
                <div>
                    <ul>
                        <li>The crime of Trafficking in Persons for Forced Services shall be punished by imprisonment in the state prison for not less than 5 years but not more than 20 years and by a fine of not more than $25,000. M.G.L. ch. 265, § 51(a).</li>
                        <li>Whoever commits the crime of trafficking of persons for forced services upon a person under 18 years of age shall be punished by imprisonment in the state prison for life or for any term of years, but not less than 5 years. M.G.L. ch. 265, § 51(b).</li>
                        <li>A business entity that commits trafficking of persons for forced labor services shall be punished by a fine of not more than $1,000,000.” M.G.L. ch. 265, § 51(c).</li>
                    </ul>
                </div>

                <div>
                    <h4>Federal Criminal Statutes</h4>
                    <br />
                </div>
                <div style={{paddingBottom: '50px'}}> 
                    There are also federal criminal statutes that address labor trafficking crimes, such as forced labor and involuntary servitude. Click here to read more about the federal crimes of labor trafficking.

                    Violations under federal law must be referred to federal authorities.

                    To report to federal law enforcement, please contact the National Human Trafficking Resource Center Hotline at 1-888-373-7888, which will send the information to federal law enforcement within a given jurisdiction.

                    Victims also may have additional rights to criminal restitution, civil remedies, and government benefits under federal law. Please refer victims to an attorney as soon as possible to explore their rights.
                </div>
            </div>
        </div>
    )
}

export default MassLawScreen
