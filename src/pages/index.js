import React from "react"
import '../styles/styles.scss'

//components 
import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'
import Project from '../components/project'
import Social from '../components/social'
import Contact from '../components/contact'
import Footer from '../components/footer'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About/>
    <Project />
    <Social />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
