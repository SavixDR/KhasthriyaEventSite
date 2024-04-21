import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import ImageSlider from './components/imageSlider'
import Showlist from './components/showList'
import About from './components/about'
import Reviews from './components/reviews'
import Footer from './components/footer'

export default function Home() {
  return (
    <div>
    <Navbar />
    <ImageSlider />

    <Showlist />
    <About />
    <Reviews />
    <Footer />
    </div>

  )
}
