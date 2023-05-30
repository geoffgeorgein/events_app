import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const SingleEvent = ({data}) => {
  return (
    <div>
      <h1> Event One</h1>
      {data?.map((ev)=>(
        <a key={ev.id} >
        <Image width={600} height={400} src={ev.image} />

        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
        </a>
      ))}
      </div>
  )
}

export default SingleEvent;