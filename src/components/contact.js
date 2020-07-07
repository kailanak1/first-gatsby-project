import React from "react"; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image";
import { Link } from "gatsby";

const Contact = () => {
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
        <div className="contact" id="contact">
            <div className="container">
              <div className="contact-title">Contact</div>
              <div className="contact-form">
                <form name="contact" method="POST" data-netlify="true">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
              </form>
             </div>
            </div>
        </div>
    )
}

export default Contact 