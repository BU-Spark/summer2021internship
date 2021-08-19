import React from 'react';
import { Link } from 'react-router-dom';
import { View } from "react-native";
import "../styles/HomeScreen.css";

const HomeScreen = () => {
    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"></meta>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"></meta>
                <meta name="HandheldFriendly" content="true"></meta>
            </head>        

            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="result" src="/icons/HeaderTextResult.svg" className="image2"></img>
            </div>

            <div className="middleBanner">
                <h3><b>Our Tools</b></h3>
                <View
                    style={{
                        borderBottomColor: "#F4C346",
                        borderBottomWidth: 5,
                        height: -5,
                        width: 180,
                        marginBottom: 35,
                    }}
                />
                <div className="containers">
                    <img alt="assess" src="/icons/Groupassess.svg" className="card__icon"></img>
                    <h4><b>Assess</b></h4>
                    <View
                        style={{
                            borderBottomColor: "#F4C346",
                            borderBottomWidth: 5,
                            height: -5,
                            width: 180,
                            marginBottom: 35,
                        }}
                    />
                    <label>Determine if your case is labor trafficking</label>
                    <Link to="/Assess">GET STARTED</Link> <i className="fas fa-arrow-right"></i>
                </div>
                <div className="containers">
                    <img alt="prepare" src="/icons/Groupprepare.svg" className="card__icon"></img>
                    <h4>Prepare</h4>
                    <View
                        style={{
                            borderBottomColor: "#F4C346",
                            borderBottomWidth: 5,
                            height: -5,
                            width: 180,
                            marginBottom: 35,
                        }}
                    />
                    <label>Find tips for interviewing victims</label>
                    <Link to="/Prepare">FIND TIPS</Link> <i className="fas fa-arrow-right"></i>
                </div>
                <div className="containers" id="largeContainer">
                    <img alt="resources" src="/icons/Groupresources.svg" className="card__icon"></img>
                    <h4>Resources</h4>
                    <View
                        style={{
                            borderBottomColor: "#F4C346",
                            borderBottomWidth: 5,
                            height: -5,
                            width: 180,
                            marginBottom: 35,
                        }}
                    />
                    <label>Browse resources avaiable in your area</label>
                    <Link to="/Resources">EXPLORE RESOURCES</Link> <i className="fas fa-arrow-right"></i>
                </div>
            </div>

            <div className="bottomBanner">
                <h4>Labor Trafficking Under Massachusettes Law</h4>
                <View
                    style={{
                        borderBottomColor: "#F4C346",
                        borderBottomWidth: 5,
                        height: -5,
                        width: 150,
                        marginBottom: 35,
                    }}
                />
                <h5>
                    View the Massachusettes labor trafficking staute and stay informed.
                </h5>
                <button type="button" className="yellowBtn myFontColor">READ MORE</button>
            </div>
        </>
    )
}

export default HomeScreen
