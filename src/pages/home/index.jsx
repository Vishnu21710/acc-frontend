import React from 'react'
import Hero from '../../components/hero'
import LogoTicker from '../../components/logo-ticker'
import Features from '../../components/features'
import Cta from '../../components/cta'
import Faq from '../../components/faq'

const Home = () => {
  return (
    <main className='overflow-hidden'>
        <Hero/>
        <LogoTicker/>
        <Features/>
        <Faq/>
        <Cta/>
    </main>
  )
}

export default Home