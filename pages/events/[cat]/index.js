const EventPage=({data})=> {
    return (

        <div>

            <h1>London</h1>

            <h1>San francisco</h1>
                
               


        </div>
      
    )
  }

  export default EventPage;

  export async  function getStaticpath(){

        const events_categories=await import('/data/data.json')

        const allPaths=events_categories.map((ev)=>{
           return {
            params:{
                cat:ev.id.toString(),
            }
           } 
        })
        console.log(allPaths);
        return {

            path:allPaths,
            fallback:false
                
            
        }

  }
