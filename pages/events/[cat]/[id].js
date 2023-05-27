import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const EventPage=({data})=> {
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

  export default EventPage;

  export async function getStaticPaths(){

    const data=await import('/data/data.json');
    const allEvents=data.allEvents;

    const allPaths=allEvents.map(path=>{
      return {
        params:{
          cat:path.city,
          id:path.id,
        }
      }
    })

    console.log("All paths");
    console.log(allPaths);

    return {
      paths:allPaths,
      fallback:false,
    }


  }

  export async function getStaticProps(context){

    const id=context.params.id;
    const {allEvents}=await import('/data/data.json');

    const eventData=allEvents.filter((ev)=>id==ev.id);

    return{
      props:{data:eventData}
    }

  }
