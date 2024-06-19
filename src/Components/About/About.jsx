import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile from '../../assets/about_profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme} alt="" />

        </div>
        <div className='about-sections'>
            <div className='about-left'>
                <img src={profile} alt="" />

            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout mt career,I have had the privilage of collaborating with prestigious organiations,contributing to their success and growth.</p>
                    <p>Front-end developers work closely with designers to implement UI/UX designs and with back-end developers to integrate APIs. They focus on optimizing web performance, ensuring accessibility, and using version control systems like Git. </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>Projets completed</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About
