import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const Footer = () => {
  const form = useRef();
  const [mail, setMail] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [message, setMessage] = useState('')
  const [alert, setAlert] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yx93w7h', 'template_c8mp07j', form.current, 'qGZk1MkA4c73bRey1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
        setMail('')
        setName('')
        setSurname('')
        setMessage('')
        setAlert('true')
  };

  useEffect(()=> {
    setTimeout(()=>{setAlert(false)},5000)
  }, [alert])
  return (
    <div className='footer' id='apply'>
        <h4 className="contact">CONTACT US</h4>
        <p className="email">dltonkins@yahoo.com</p>

        <form className='form' action="submit"  ref={form} onSubmit={sendEmail}>
            <label > Contact Us</label>
            <input type="text" name="user_email" placeholder='Email' value={mail} onChange={(e) => setMail(e.target.value)}  />
            <input type="text" name="user_name" placeholder='First Name' value={name} onChange = {(e) => {setName(e.target.value)}} />
            <input type="text" placeholder='Last Name' name="user_surname" value={surname} onChange = {(e) => {setSurname(e.target.value)}} />
            <textarea className='body-input' type="text" placeholder='Message' name="message" value={message} onChange = {(e) => {setMessage(e.target.value)}} />
            <button className='submit' type="submit" value="Send">Submit</button>
            {alert && <p className="alert">Your message have been submitted successfully!</p>}
        </form>
            <div dir='rtl'>
            <p className="copyright" >Copyright 2023 - New Millenium World Ministry</p>
            </div>

    </div>
  )
}

export default Footer