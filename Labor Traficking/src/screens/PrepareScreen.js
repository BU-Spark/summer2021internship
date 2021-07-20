import React from 'react'
import {View, StyleSheet, Dimensions } from 'react-native'
const DeviceWidth = Dimensions.get('window').width

const PrepareScreen = () => {
    
    return (
        <>
            <div className="topBanner">
                <img alt="topBanner" src="/icons/header.svg" className="image1"></img>
                <img alt="prepare" src="/icons/HeaderTextPrepare.svg" className="image2"></img>
            </div>

            <div className="middleBanner">
                <p style={{textAlign: 'center', fontFamily: 'Roboto', fontStyle: 'italic', fontWeight: 'normal', fontSize: 20}}>
                    <span style={{ color: "##606263" }}>Click tabs to view tips or </span> 
                    <span style={{ color: "#20548c", textDecoration: "underline", fontStyle: "italic" }}>click here to download the tips</span>
                </p>
            </div>

            <div id="accordion">
                <div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Tip #1: Develop Trust
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div class="card-body">
                        <ul>
                            <li>Be Patient
                                <ul>
                                    <li>
                                    Establishing trust with the victim may be difficult during initial interviews. Victims may not initially divulge key details due to fear.
                                    </li>

                                    <li>
                                    In the human trafficking context, it is common to engage in multiple interviews as trust develops. It is also common that there may be initial inconsistencies as a result of distrust or the victim’s lack of understanding about the legal process.
                                    </li>
                                </ul>
                            </li>

                            <li>Interview Settings
                                <ul>
                                    <li>
                                    Victims should be interviewed in a setting in which they are physically and emotionally comfortable. Interviewers should offer water, avoid noisy areas or areas with heavy foot traffic, and ensure that only essential people are present in the interview.
                                    </li>
                                </ul>
                            </li>

                            <li>Confidentiality limitations
                                <ul>
                                    <li>
                                    You will not be able to keep details disclosed by the victim confidential. Explain  this at the beginning so the victim will understand your role and not feel betrayed if you have to share information with prosecutors or other government officials.
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
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                Tip #2: Understand the impact of immigration status on victim cooperation
                            </button>
                        </h5>
                    </div>

                    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body">
                            <ul>
                                <li>
                                    Test to see if its working
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingThree">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Tip #3: Engage in safety planning
                            </button>
                        </h5>
                    </div>

                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                            {/* ADD TEXT HERE */}
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFour">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Tip #4: Use a qualified interpreter
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                        <div class="card-body">
                            {/* ADD TEXT HERE */}
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingFive">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                Tip #5: Make referrals to victim services ASAP
                            </button>
                        </h5>
                    </div>

                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                        <div class="card-body">
                            {/* ADD TEXT HERE */}
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="headingSix">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Tip #6: Educate yourself about trauma
                            </button>
                        </h5>
                    </div>

                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div class="card-body">
                            {/* ADD TEXT HERE */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

const styles = StyleSheet.create({
    
});
export default PrepareScreen
