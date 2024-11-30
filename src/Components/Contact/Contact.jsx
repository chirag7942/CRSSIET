import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

//WEB3FORMS WEBSITE FOR ADDING THE FUNCTIONALITY OF FORMS IN WEBPAGE

//PROCEDURE TO USE WEB3FORMS FOR CONTACT FORM

/* 1. Open the web3forms website.
2. Create your access key.
3. Then go to documentation -> js frameworks coming in options of left side -> react js -> simple creact contact form -> then copy content from const state variable to before return statement -> paste it in vs code*/

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0eb9e491-6f27-4779-92d7-fc287cc51402");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact' id='contact'>

    <div className="contact-col">

        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our college community.</p>

        <ul>
            <li><img src={mail_icon} alt="" />info.crssiet@gmail.com2</li>
            <li> <img src={phone_icon} alt="" />+0 1251-279800 </li>
            <li> <img src={location_icon} alt="" />Silani Panekeso, Jhajjar</li>
        </ul>
    </div>

    <div className="contact-col">

    <form onSubmit={onSubmit}>
        <label htmlFor="">Your name</label>
        <input type="text"  placeholder='Enter your name' name='name' required/>

        <label htmlFor="">Mobile number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile no.' required/>

        <label htmlFor="">Email Id</label>
        <input type="text" name='email'  placeholder='Enter your email id' required/>

        <label htmlFor="">Write your message here</label>
        <textarea type="text" name='message' placeholder='Enter your message' rows="6" required></textarea>

        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>

        </form>
        
        <span>{result}</span>
    </div>


      
    </div>
  )
}

export default Contact
