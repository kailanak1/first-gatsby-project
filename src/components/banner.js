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
                    <div className="main-text">Kailana</div>
                    <div className="main-image">
                    <Img fluid={data.kailanaProfile.childImageSharp.fluid} />
                    </div>
                </div>
                <div className="scroll"></div>
                <span>Scroll Down</span>
            </div>
        </div>
    )
}

export default Banner 