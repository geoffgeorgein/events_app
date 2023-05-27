import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

export const HomePage=({data})=> {
    return (

        <div>


                {
                    data.map(ev=>(
                        <Link  href={`/events/${ev.id}`} key={ev.id}>
                            

                                <Image src={ev.image} height={300} width={300}/>
                                <h2>{ev.title}</h2>
                            
                        </Link>
                    ))
                }



        </div>
      
    )
  }
