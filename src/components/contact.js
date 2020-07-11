import React, { useState } from "react"; 
import { navigate } from 'gatsby-link';

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

export default function Contact(){
 
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
        'contact': form.getAttribute('name'),
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
                <input type="hidden" name="form-name" value="contact" />
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
                        <button className="submit-button" type="submit">Send</button>
                    </p>
              </form>
             </div>
            </div>
        </div>
    )
}

