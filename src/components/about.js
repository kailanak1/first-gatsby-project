import React from "react"; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image";
import { Link } from "gatsby";

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      kailanaAbout: file(relativePath: { eq: "about_me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="about-blurb" id="about">
            <div className="container">
                <div className="inner-blurb">
                 <div className="content">
                     <h3>About me</h3>
                     <p>Hi! I'm Kailana. I'm from Maui, Hawai'i. I used to be an English teacher, but now I code in Seattle. I love the beach, hiking, and reading. My favorite food is soybeans. I got into coding through RenPy and have been writing up code ever since.
                     Right now, I work with ReactJS and Ruby on Rails and write about it on my DevTo blog.
                     What I also really love is travel and good food. I'm always down to check out a new restaurant or explore an exciting place on a whim.</p>
                 </div>
                
                <div className="images">
                    <div className="top-right">
                        <div className="circle">
                            <Img alt="kailana about photo" fluid={data.kailanaAbout.childImageSharp.fluid}
                            ></Img>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About 