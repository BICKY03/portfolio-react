import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg';
import phone_icon from '../../assets/call_icon.svg';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "553d59c1-9c84-497c-8c9c-f88e6b4e1514");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently available to take on new projects, so feel free to send me amessage about anything that you want me to work on. You can contact anytime</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /><p>greatstackdev@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={phone_icon} alt="" /><p>+772-890-463</p>
                    
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" /><p>CA,Unitedstate</p>
                    
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Your Name' name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Your Email' name='email'/>
            <label htmlFor="">Your Message</label>  
            <textarea name="message" id="" cols="30" rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='contact-submit' >Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
