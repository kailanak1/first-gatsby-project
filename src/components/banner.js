import React from 'react'; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      kailanaProfile: file(relativePath: { eq: "kailana_profile.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Welcome </div>
                    <div className="main-image">
                    <Img alt="kailana profile photo" fluid={data.kailanaProfile.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll Down</span>
                </div>
            </div>
        </div>
    )
}

export default Banner 