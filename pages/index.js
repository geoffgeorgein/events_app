import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>

          <Link href='/'>Home</Link>

          <Link href='/events'>Events</Link>
          <Link href='/about-us'>About Us</Link>
        </nav>
      </header>

      {/* <p>{title}</p> */}


      <main className={`${styles.main} ${inter.className}`}>
      {console.log(data)}
a
      {data?.map((ev)=>(
        <a key={ev.id} href={`/events/${ev.id}`}>
        <Image width={200} height={300} src={ev.image} />

        <h2>{ev.title}</h2>
        <p>{ev.description}</p>
        </a>
      ))}

        
      </main>
    </>
  )
}

export async function getServerSideProps(){

  const{events_categories}=await import('/data/data.json');
  console.log("hi");
  console.log(events_categories);
 
  return {
    props:{
      
      data:events_categories,
    }
  }
}
