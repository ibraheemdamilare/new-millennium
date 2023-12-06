import React from 'react'
import Body from "./Body"
import HeroSection from "./HeroSection"
import Navbar from "./Navbar"
import Bottom from "./Bottom"
import Footer from "./footer"
const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <Body/>
        <Bottom />
        <div id="apply">
        <Footer />
        </div>
    </div>
  )
}

export default Home