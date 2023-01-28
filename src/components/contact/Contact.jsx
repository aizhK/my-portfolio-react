import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Contact</h3>
                    <div className="contact__info">

                        <div className="contact__card">
                            <a href="mailto:aizharkhassen@gmail.com">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                            </a>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">aizharkhassen@gmail.com</span>
                            <a href="mailto:aizharkhassen@gmail.com" className="contact__button">Email Me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <a href="https://wa.me/358466154393">
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                            </a>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+358 46 615 4393</span>
                            <a href="https://wa.me/358466154393" className="contact__button">Text Me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <a href="https://t.me/khs_zh">
                                <i className="bx bxl-telegram contact__card-icon"></i>
                            </a>
                            <h3 className="contact__card-title">Telegram</h3>
                            <span className="contact__card-data">khs_zh</span>
                            <a href="https://t.me/khs_zh" className="contact__button">Message Me{" "}
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;