import React from 'react'
import './Contact.css'
 import msg_icon from '../../assets/msg-icon.png'
 import mail_icon from '../../assets/mail-icon.png'
 import phone_icon from '../../assets/phone-icon.png'
 import location_icon from '../../assets/location-icon.png'
 import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "035a8b0f-3137-4d6b-9a5a-6af37e5196cd");

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
    <div className='contact'>
   
   
   <div className="contact-col">
    <h3>Send us a message <img src ={msg_icon} alt ="" /> </h3>
    <p>feel free to your any query .we will surely try to resolve all your problem in less time possiple .</p>
   <ul>
    <li>
    <img src={mail_icon} alt="" />Contact@gmail.com</li>
    <li><img src={phone_icon} alt="" />Contact@gmail.com</li>
    <li><img src={location_icon} alt="" />MM D1 409 LDA Colony Kanpur Road Lucknow </li>
 
   </ul>
   </div>
   <div className="contact-col">
    <form  onSubmit={onSubmit}>
        <label>
            your name 
        </label>
        <input type="text" name ='name ' placeholder='Enter your name' required />
        <label>Phone Number</label>
        <input type ="tel" name ='phone' placeholder ='Enter your mobile number' required />
        <label>Write your message here </label>
        <textarea type ="message"   rows="6" placeholder='Enter your message' required ></textarea>       
        <button type ='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt="" /></button>
    </form>
    <span>{result}</span>
   </div>
      
    </div>
  )
}

export default Contact
