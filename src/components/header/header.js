import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  return (
    <>
    
      
        <header>
        <div>
          <div className='topNav'>
            <Image alt='logo' src={'/images/logo_black.png'} height={50} width={50}></Image>
            <nav>

              <Link href='/'>Home</Link>

              <Link href='/events'>Events</Link>
              <Link href='/about-us'>About Us</Link>
            </nav>

            
            </div>
            <p className="title"> Sed ut perspiciatis unde omnis</p>
          </div>
        </header>
      </>
  
  )
}

export default Header