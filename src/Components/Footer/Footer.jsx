import React from 'react'
import './Footer.css'
import footer from '../../assets/footer_logo.svg'
import user from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer} alt="" />
                <p>I am a frontend developer from,Delhi with 2 year of experince</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>@2024 JotiRaj Majhi. All rights are reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
