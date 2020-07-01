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
        <div className="about">
            <div className="container">
                <div className="inner-blurb">
                 <div className="content">
                     <h3>About me</h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas est luctus, suscipit orci id, posuere orci. Nullam neque nunc, faucibus id nibh eu, auctor fringilla odio. Integer varius mollis felis. Quisque non est id nibh malesuada faucibus. Quisque eget orci non odio gravida vestibulum. Praesent turpis ex, congue a sem quis, ornare scelerisque nunc. Sed eget placerat libero.</p>
                     <div className="btn-row"></div>
                     <Link to ="/project">See My Projects</Link>
                 </div>
                </div>
                <div className="images">
                    <div className="top-right">
                        <Img fluid={data.kailanaAbout.childImageSharp.fluid}></Img>
                    </div>
                </div>
           
            </div>
          
        </div>
    )
}

export default About 