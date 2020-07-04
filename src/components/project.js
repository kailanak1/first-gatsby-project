import React from "react"; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image";
import { Link } from "gatsby";

const Project = () => {
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
        <div className="project-blurb" id="project">
        <div className="container">
            <div className="row">
                <div>Web Apps</div>
             <div className="project-content">
                 <div className="project-square">
                     <div className="project-title">Project 1</div>
                 </div>
                 <div className="project-square">
                     <div className="project-title">Project 2</div>
                 </div>
                 <div className="project-square">
                     <div className="project-title">Project 3</div>
                 </div>
                 <div className="project-square">
                     <div className="project-title">Project 4</div>
                 </div>
             </div>
            
        
        </div>
        </div>
    </div>
    )
}

export default Project 