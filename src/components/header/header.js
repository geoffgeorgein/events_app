import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  return (
    <header>
    <nav>

      <Link href='/'>Home</Link>

      <Link href='/events'>Events</Link>
      <Link href='/about-us'>About Us</Link>
    </nav>
  </header>
  )
}

export default Header