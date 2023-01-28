import React from 'react';
import './skills.css';
import SkillP from './SkillP';
import SkillO from './SkillO';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">
                <SkillP />
                <SkillO />
            </div>
        </section>
    )
}

export default Skills;