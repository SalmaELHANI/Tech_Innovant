import React from 'react'
import Portfolio from './portfolio/page.jsx'
import Hero from './Hero/page.jsx'
import Service from './service/page.jsx'

const page = () => {
  return (
   <main className='flex min-h-screen flex-col container mx-auto px-12 py-4 bg-white'>
    
     <Hero/>
     <Service/>
     <Portfolio/>
   
   </main>
  )
} 

export default page 