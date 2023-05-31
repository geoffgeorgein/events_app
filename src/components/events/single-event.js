import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const SingleEvent = ({data}) => {

  data=data[0];
  return (
    <div>
    {console.log('Data')}
      {console.log(data)}
      <h1> {data.title}</h1>
     
        
        <Image width={600} height={400} src={data.image} alt={data.title} />

        <h2>{data.title}</h2>
        <p>{data.description}</p>
       
        <form >

          <label>Get registered for this event</label>
          <input type='email' id='email' placeholder='Enetr your email here'></input>
          <button>Submit</button>


        </form>
        
      
      </div>
  )
}

export default SingleEvent;