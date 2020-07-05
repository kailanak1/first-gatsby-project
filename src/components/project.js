import React from "react"; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image";
import { Link } from "gatsby";

const Project = () => {
    const data = useStaticQuery(graphql`
    query {
      davidpic: file(relativePath: { eq: "david-pic.jpg" }) {
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
             <div className="project-content">
                 <div className="project-square">
                    <a href="https://david-quora-frontend.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                        <div className="project-title">Project 1</div>
                     <div className="project-image">
                         <Img fluid={data.davidpic.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                     </a>
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