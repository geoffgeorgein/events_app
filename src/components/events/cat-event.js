import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Catevent = ({data}) => {
  return (
    
        <div className='cat_events'>
            <div className='content'>
                {
                    data.map(ev=>(
                        <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} >
                            
                                <Image src={ev.image} height={300} width={300}/>
                                <h2>{ev.title}</h2>
                                <p>{ev.description}</p>
                            
                        </Link>
                    ))
                }
            </div>
        </div>
                
  )
}

export default Catevent;
