import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Catevent from '@/src/components/events/cat-event';

const EventPage=({data})=> {
    return (

        <div>

            

        <Catevent data={data} />
               


        </div>
      
    )
  }

  export default EventPage;

  export async  function getStaticPaths(){

        const {events_categories}=await import('/data/data.json')

        const allPaths=events_categories.map((ev)=>{
           return {
            params:{
                cat:ev.id.toString(),
            }
           } 
        })
        console.log(allPaths);
        return {

            paths:allPaths,
            fallback:false
                
            
        }

  }

  export async function getStaticProps(context){

    // console.log("context")
    // console.log(context);

    const id = context?.params.cat;
    const { allEvents } = await import('/data/data.json');

    const data = allEvents.filter((ev) => ev.city === id);
    
    return {
        props:{ data}
    }
        
  }
