import React from 'react'
import Navbar from "./Components/Navbar"
import About from './Components/About'
import Team from './Components/Team'
import Service from './Components/Service'
import Header from './Components/Header'
import Skills from './Components/Skills'

const App = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Team/>
      <Service/>
      <Skills/>
    </>
  )
}

export default App