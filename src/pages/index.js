import React from "react"
import '../styles/styles.scss'
import { Helmet } from "react-helmet"

//components 
import Header from '../components/header'
import Banner from '../components/banner'
import About from '../components/about'
import Project from '../components/project'
import Social from '../components/social'
import Contact from '../components/contact'
import Footer from '../components/footer'
const siteDescription = "my personal website"
const IndexPage = () => (
  <div>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Kailana's Portfolio</title>
          <link rel="canonical" href="http://kailana.dev" />
          <meta name="description" content={siteDescription} />
        </Helmet>
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
