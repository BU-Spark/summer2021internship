import React from 'react'

const HomeScreen = () => {
    return (
        <>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="result" src="/icons/HeaderTextResult.svg" className="image2"></img>
            </div>
            <div className="middleBanner">
                <h3>Our Tools</h3>
                <div className="containers">
                    <img alt="assess" src="/icons/Groupassess.svg" className="card__icon"></img>
                    <h4>Assess</h4>
                    <hr className='yellowLine' />
                    <label>Determine if your case is labor trafficking</label>
                    <a href="/">GET STARTED<i className="fas fa-arrow-right"></i> </a>
                </div>
                <div className="containers">
                    <img alt="prepare" src="/icons/Groupprepare.svg" className="card__icon"></img>
                    <h4>Prepare</h4>
                    <hr className='yellowLine' />
                    <label>Find tips for interviewing victims</label>
                    <a href="/">FIND TIPS<i className="fas fa-arrow-right"></i> </a>
                </div>


                <div className="containers" id="largeContainer">
                    <img alt="resources" src="/icons/Groupresources.svg" className="card__icon"></img>
                    <h4>Resources</h4>
                    <hr className='yellowLine' />
                    <label>Browse resources avaiable in your area</label>
                    <a href="/">EXPLORE RESOURCES<i className="fas fa-arrow-right"></i> </a>
                </div>
            </div>
            <div className="bottomBanner">
                <h4>Labor Trafficking Under Massachusettes Law</h4>
                <hr className='yellowLine' />
                <h5>
                    View the Massachusettes labor trafficking staute and stay informed.
                </h5>
                <button type="button" className="yellowBtn myFontColor">READ MORE</button>
            </div>
        </>
    )
}

export default HomeScreen