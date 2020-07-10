import React, { useState } from "react"; 
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
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
    return (
        <div className="contact" id="contact">
            <div className="container">
              <div className="contact-title">Contact</div>
              <div className="contact-form">
                <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                    <p>
                        <label>Your Name: <input type="text" name="name" onChange={handleChange}/></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" onChange={handleChange}/></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message" onChange={handleChange}></textarea></label>
                    </p>
                    <p>
                        <button className="submit-button" type="submit" >Send</button>
                    </p>
              </form>
             </div>
            </div>
        </div>
    )
}

export default Contact 