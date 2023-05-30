import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import SingleEvent from '@/src/components/events/single-event';

const EventPage=({data})=> {
    return (
      <div>
        <SingleEvent data={data} />
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
