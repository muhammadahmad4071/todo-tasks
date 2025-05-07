import React from 'react'
import { Footer } from '../components/footer'
import { Navbar } from '../components/navbar'

export const Main = ({ children }) => {
  return (
    <div className='relative min-h-screen flex flex-col'>
      <Navbar />
      <main className='flex-1 flex'>{children}</main>
      <Footer />
    </div>
  )
}

