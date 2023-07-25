import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion"

export const HomePage=({data})=> {
    return (

        <div className='home_body'>


                {
                    data.map(ev=>(
                        <Link className='card' href={`/events/${ev.id}`} key={ev.id}>
                            

                                <Image src={ev.image} height={300} width={300}/>
                                <div className='content'>

                                    <h2>{ev.title}</h2>
                                    <p>{ev.description}</p>
                                </div>
                            
                        </Link>
                    ))
                }



        </div>
      
    )
  }
