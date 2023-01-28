import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-code about__icon'></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Studying IT and Making Multiple Projects for 2 Years</span>
            </div>

            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">Multiple Projects</span>
            </div>

            <div className="about__box">
                <i class='bx bxs-paper-plane about__icon'></i>
                <h3 className="about__title">Future</h3>
                <span className="about__subtitle">Very excited to gain professional experience and 
                expand my knowledge and abilities.</span>
            </div>
        </div>
    );
}

export default Info;
