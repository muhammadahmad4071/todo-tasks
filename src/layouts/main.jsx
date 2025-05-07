import React from 'react'
import { Navbar } from '../components/navbar'

export const Main = ({ children }) => {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

