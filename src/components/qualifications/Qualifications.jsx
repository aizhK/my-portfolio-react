import React from 'react';
import './qualifications.css';
import CV from '../../assets/CV_AizharKhassen.pdf';
import Certificates from '../../assets/Certificates.zip';

const Qualifications = () => {
    return (
        <section className="qualification__sections" id="qualifications">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification_active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">A Level Certification</h3>
                                <span className="qualification__subtitle">Information Technology and Mathematics</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">BEng in Information Technology</h3>
                                <span className="qualification__subtitle">Metropolia UAS</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Cisco Networking Academy Certificate</h3>
                                <span className="qualification__subtitle">CCNAv7: Switching, Routing, and Wireless Essentials</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            
                            <div>
                                <h3 className="qualification__title">Cisco Networking Academy Certificate</h3>
                                <span className="qualification__subtitle">CCNAv7: Enterprise Networking, Security, and Automation</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Cisco Networking Academy Certificate</h3>
                                <span className="qualification__subtitle">IoT Fundamentals: IoT Security</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Google Analytics Certificate</h3>
                                <span className="qualification__subtitle">Google Analytics for Beginners</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2023
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <a download="" href={Certificates} className="button button--flex">
                        Download All Certificates <i className='uil uil-download-alt button__icon'></i>
                    </a>    
                </div>
            </div>
        </section>
    );
}

export default Qualifications;
