import React from 'react'
import './Hero.css'
import profile from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile} alt="" />
        <h1> <span>Hi, I'm JotiRaj Majhi,</span>frontend developer based in Bangalore.</h1>
        <p>I am a frontend developer from India</p>
        <div className='hero-action'>
        <div className='hero-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
        </AnchorLink>
        </div>
            <div className='hero-resume'>My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
