import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Aizhar</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                    <a href="#qualifications" className="footer__link">Qualifications</a>
                    </li>
                </ul>
            
                <div className="footer__social">
                    <a href="https://github.com/aizhK" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href="https://www.linkedin.com/in/aizhar-khassen-78a05325b/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                </div>
            </div> 
        </footer>
    )
};

export default Footer;