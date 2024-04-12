import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
        <div className='contact-us-container'>
            <h1>Contact Us</h1>
            <p>Please Fill Out the Form Below Or Reach Us To Us Using The Contact details Provided</p>
        <form className='contact-form'>
            <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
            <label htmlFor='email'>E-Mail:</label>
            <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea type='message' id='name' name='message' row='5' required />
            </div>
<button className='submit-btn' type='submit'>submit</button>
        </form>
        </div>
      
    </div>
  )
}

export default Contact
