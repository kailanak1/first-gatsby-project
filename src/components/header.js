import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
      <div className="logo">
        <Link to="/">Kailana</Link>
      </div>
      <div className="navigation">
        <nav>
          <AnchorLink to="/#about">About</AnchorLink>
          <AnchorLink to="/#project">Projects</AnchorLink>
          <Link to="/#contact">Contact</Link>
        </nav>
      </div>
      </div>
    </div>
  </header>
)

export default Header
