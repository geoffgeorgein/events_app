import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const EventsPage=({data})=> {
    return (

        <div>

            <h1> Events Page</h1>

            <div className='events_page'>

                {
                    data.map(ev=>(
                        <Link  href={`/events/${ev.id}`} key={ev.id}>
                            

                                <Image src={ev.image} height={300} width={300}/>
                                <h2>{ev.title}</h2>
                            
                        </Link>
                    ))
                }


            </div>

             
                
               


        </div>
      
    )
  }

  export default EventsPage;

  export async  function getStaticProps(){

        const { events_categories }= await import('/data/data.json')

        return {

            props:{
                data:events_categories
            }
        }

  }
