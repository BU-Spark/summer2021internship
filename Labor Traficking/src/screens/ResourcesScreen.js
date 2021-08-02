import React from 'react'

/*
https://react-bootstrap.github.io/layout/grid/
*/
const ResourcesScreen = () => {
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
        </div>
    )
}

export default ResourcesScreen
