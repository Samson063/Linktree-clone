import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className='contact container'>
      <div className='contact_container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
          <div className='names'>
            <div className='firstName'>
              <label htmlFor='name'>First name</label>
              <input
                type='text'
                id='first_name'
                placeholder='Enter your first name'
                className='first_name'
              />
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                id='last_name'
                placeholder='Enter your last name'
              />
            </div>
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='yourname@gmail.com' />
          </div>
          <div className='message'>
            <label htmlFor='message'>Message</label>
            <input
              type='text'
              id='message'
              placeholder='Send me a message and Ill reply you as soon as possible...'
            />
          </div>
          <div className='checkbox'>
            <label className='checking' htmlFor='checkbox'>
              You agree to providing your data to Samson who may contact you.
            </label>
            <input type='checkbox' id='check' />
          </div>
          <div className='button'>
            <button id='btn__submit'>Send message</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;