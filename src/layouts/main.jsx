import React from 'react'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

export const Main = ({ children }) => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

