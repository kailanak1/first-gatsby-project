import React from "react"
import '../styles/styles.scss'

//components 
import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'
import Project from '../components/project'
import Contact from '../components/contact'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About/>
    <Project />
    <Contact />
  </div>
)

export default IndexPage
