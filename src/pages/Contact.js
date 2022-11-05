import React, { useState } from 'react';
import Footer from '../components/Footer';

const Contact = () => {

  //first name
  const [fnameHasError, setfNameHasError] = useState(false);
  const [fNameErrorMsg, setFNameErrorMsg] = useState('')
  const [firstName, setFirstName] = useState('');

  //last name
  const [lnameHasError, setlNameHasError] = useState(false);
  const [lnamehasErrorMsg, setLNameErrorMsg] = useState('')
  const [lastName, setLastName] = useState('')

  //Email
  const [EmailHasError, setEmailHasError] = useState(false);
  const [EmailhasErrorMsg, setEmailErrorMsg] = useState('')
  const [email, setEmail] = useState('')

  //Checkbox
  const [isChecked, setIsChecked] = useState(false);
  const [checkBoxError, setCheckBoxError] = useState(false);



  function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

  function handleSubmit(){
    if(firstName === ''){
      setFNameErrorMsg('First name is required')
      setfNameHasError(true);
    } 
    if(firstName.length < 3){
      setFNameErrorMsg('First name is required')
      setfNameHasError(true);
    }

    if (lastName === ''){
      setLNameErrorMsg('Last name is required')
      setlNameHasError(true)
    }
    if(lastName.length < 3){
      setLNameErrorMsg('Last name is required')
      setlNameHasError(true)
    }

    if (email === ''){
      setEmailErrorMsg('Email is required')
      setEmailHasError(true)
    }
    if(!ValidateEmail(email)){
      setEmailErrorMsg('Please enter a valid email')
      setEmailHasError(true)
    }

    if(!isChecked){
      setCheckBoxError(true)
    }else{
      setCheckBoxError(false);
    }

    // console.log(isChecked);
 

    // if (Message === ''){
    //   setMessageErrorMsg('Message name is required')
    //   setMessageHasError(true)
    // }
    // if(Message.length < 5){
    //   setMessageErrorMsg('Last name must be greater than 5 letters')
    //   setMessageHasError(true)
    // }
  }

  function checkEmail(email){
    if(!ValidateEmail(email)){
      setEmailErrorMsg('Please enter a valid email')
      setEmailHasError(true)
    }
  }

  return (
    <div className='contact container'>
      <div className='contact_container'>
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        {/* <form> */}
          <div className='names'>
            <div className='firstName'>
              <label htmlFor='name'>First name</label>
              <input
                type='text'
                id='first_name'
                onFocus={()=>setfNameHasError(false)}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder='Enter your first name'
                className='first_name'
              />
              {fnameHasError && ( <p style={{'color':'red', 'fontSize':12}}>{fNameErrorMsg}</p>)}
             
            </div>
            <div className='lastName'>
              <label htmlFor='lastName'>Last name</label>
              <input
                type='text'
                id='last_name'
                onFocus={()=>setlNameHasError(false)}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder='Enter your last name'
              />
                 {lnameHasError && ( <p style={{'color':'red', 'fontSize':12}}>{lnamehasErrorMsg}</p>)}
            </div>
          </div>
          <div className='email'>
            <label htmlFor='email'>Email</label>
            <input type='email'
            id='email'
            onBlur={(e)=> checkEmail(e.target.value)}
            onFocus={()=>setEmailHasError(false)}
                onChange={(e)=>setEmail(e.target.value)}
            placeholder='yourname@gmail.com' />
            {EmailHasError && (<p style={{'color':'red', 'fontSize':12}}>{EmailhasErrorMsg}</p>)}

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
              By Clicking, You are agreeing
               to providing your data to Anthony Samson who may contact you.
            </label>
            <input type='checkbox' id='check' onChange={e=> {
              setIsChecked(!isChecked)
              setCheckBoxError(isChecked);
            }} value={isChecked}/>
            {checkBoxError && (<p style={{'color':'red', 'fontSize':12}}>Please accept the terms.</p>)}

          </div>
          <div className='button'>
            <button id='btn__submit'  onClick={handleSubmit}>Send message</button>
          </div>
        {/* </form> */}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;