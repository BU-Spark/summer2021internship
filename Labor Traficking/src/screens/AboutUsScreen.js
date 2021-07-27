import React from 'react'

const AboutUsScreen = () => {
    return (
        <div>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="massLaw" src="/icons/HeaderTextAboutUs.svg" className="image2"></img>
            </div>
            <div className="middleBanner">
                <div className="middleBanner">
                    <h3>Why Us?</h3>
                    <img alt="line" src="/icons/yellowline.svg" className="yellowLineSize"></img>
                    <div>
                        Because labor trafficking is everywhere. Because labor trafficking is difficult to see. Because we want to help answer your questions. Because we want victims on labor trafficking to know help is out there. Because we all have a role in unmasking labor trafficking.

                        <b>Because the RESULT can aid in eradicating labor trafficking in Massachusetts.</b>

                    </div>
                </div>

                <div className="middleBanner">
                    <h3>Who We Are</h3>

                    <img alt="line" src="/icons/yellowline.svg" className="yellowLineSize"></img>
                    <div>
                        A coalition of individuals focused on shining a light to bring labor trafficking out of the shadows.
                    </div>

                    <figure>
                        <img src='/icons/icon_HTD.svg' alt='HTD' />
                        <figcaption>Human Trafficking Division, <br />
                            MA Office of the Attorney General</figcaption>
                    </figure>

                    <figure>
                        <img src='/icons/icon_FLD.svg' alt='FLD' />
                        <figcaption>Fair Labor Division, <br />
                            MA Office of the Attorney General</figcaption>
                    </figure>

                    <figure>
                        <img src='/icons/icon_Spark.svg' alt='HTD' />
                        <figcaption>BU Spark!</figcaption> <br />

                    </figure>

                    <figure>
                        <img src='/icons/icon_IRH.svg' alt='HTD' />
                        <figcaption>Immigrants’ Rights and Human Trafficking Program, <br />
                            BU School of Law</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default AboutUsScreen
