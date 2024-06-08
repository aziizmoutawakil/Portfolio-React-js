import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import About from './Components/About/about'
import Services from './Components/services/services'
import Mywork from './Components/MyWork/my_work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/footer/footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
 </div>
  )
}

export default App
