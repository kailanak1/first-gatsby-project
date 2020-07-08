import React from "react"; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image";


const Social = () => {
    const data = useStaticQuery(graphql`
    query {
      devto: file(relativePath: { eq: "devtoicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resume: file(relativePath: { eq: "resume_screenshot.png" }) {
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
        <h3>More</h3>
            <div className="row">
             <div className="project-content">
                 <div className="project-square">
                    <a href="https://dev.to/kahawaiikailana" target="_blank" rel="noopener noreferrer">
                        <div className="project-title">DevTo</div>
                     <div className="project-image">
                         <Img fluid={data.devto.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">Tech Blog</div>
                     </a>
                 </div> 
                 <div className="project-square">
                     <a href="https://github.com/kailanak1?tab=repositories" target="_blank" rel="noopener noreferrer">
                     <div className="project-title">Github</div>
                     <div className="project-image">
                         <Img fluid={data.github.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">See more projects</div>
                     </a>
                 </div>
                 <div className="project-square">
                 <a href="https://github.com/kailanak1/recipe-blog-frontend" target="_blank" rel="noopener noreferrer">
                     <div className="project-title">LinkedIn</div>
                     <div className="project-image">
                         <Img fluid={data.linkedin.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">Connect with me!</div>
                     </a>
                 </div>
                 <div className="project-square">
                     <a href="https://docs.google.com/document/d/1E2oOzOY-gkdFxNVIz5dQDOM4oeWHvHlJPQmNQMoMUNQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                     <div className="project-title">Resume</div>
                     <div className="project-image">
                         <Img fluid={data.resume.childImageSharp.fluid}/>
                         <div className="project-desc">Check it out</div>
                     </div>
                     </a>
                 </div>
             </div>
        </div>
        </div>
    </div>
    )
}

export default Social 