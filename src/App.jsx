import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Companies from './components/Section/Companies'
import MainFeatures from './components/Section/MainFeatures'
import Pricing from './components/Section/Pricing'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Companies/>
      <MainFeatures/>
      <Pricing/>
      
    </div>
  )
}

export default App
