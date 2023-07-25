import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
    
      
        <header>
        <div>
          <div className="topNav">
            <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} />
            <nav>
              <ul>
                <motion.li
                whileHover={{ scale: 1.1 }}
                >
                  <Link href="/" passHref>
                     Home
                  </Link>
                  </motion.li>

                  <motion.li
                  whileHover={{ scale: 1.1 }}>
                    <Link href="/events" passHref>
                      Events
                    </Link>
                  </motion.li>
                
                <motion.li
                whileHover={{ scale: 1.1 }}>
                  <Link href="/about-us" passHref>
                    About us
                  </Link>
                </motion.li>
                </ul>
            </nav>
          </div>
            <p className="title"> Sed ut perspiciatis unde omnis</p>
          </div>
        </header>
      </>
  
  )
}

export default Header