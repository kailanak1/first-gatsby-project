import React from "react"
import '../styles/styles.scss'

//components 
import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'
import Project from '../components/project'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <About/>
    <Project />
  </div>
)

export default IndexPage
