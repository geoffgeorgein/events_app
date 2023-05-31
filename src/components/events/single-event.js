import React, { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';

const SingleEvent = ({data}) => {

  const inputemail=useRef();

  const router=useRouter();

  const Onsubmit=async(e)=>{
    e.preventDefault();

    const emailValue=inputemail.current.value;
    console.log(emailValue);
    const eventId=router?.query.id;

    try{
      const response = await fetch('/api/email-registeration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if(!response.ok)  throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      console.log(data);

    }
    
    catch(e){
      console.log("ERROR",e)
    }

  };

  data=data[0];
  return (
    <div className='event_single_page'>
    {console.log('Data')}
      {console.log(data)}
      <h1> {data.title}</h1>
     
        
        <Image width={600} height={400} src={data.image} alt={data.title} />

        <h2>{data.title}</h2>
        <p>{data.description}</p>
       
        <form onSubmit={Onsubmit} className='email_registeration'>

          <label>Get registered for this event</label>
          <input ref={inputemail} type='email' id='email' placeholder='Enter your email here'></input>
          <button type='submit'>Submit</button>


        </form>
        
      
      </div>
  )
}

export default SingleEvent;