import React from "react"; 
import {useStaticQuery, graphql} from "gatsby"; 
import Img from "gatsby-image";


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
      stellarpic: file(relativePath: { eq: "stellar.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      recipepic: file(relativePath: { eq: "recipe-app.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mealp: file(relativePath: { eq: "mealp.png" }) {
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
                <h3>Featured</h3>
             <div className="project-content">
                 <div className="project-square">
                    <a href="https://david-quora-frontend.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                        <div className="project-title">David Quora</div>
                     <div className="project-image">
                         <Img alt="david quora frontend" fluid={data.davidpic.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">Personal Website. Rails   React/Redux  EmailJS</div>
                     </a>
                 </div> 
                 <div className="project-square">
                     <a href="https://stellar-778e3.web.app/" target="_blank" rel="noopener noreferrer">
                     <div className="project-title">Stellar Calendar</div>
                     <div className="project-image">
                         <Img alt="stellar calendar" fluid={data.stellarpic.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">Astro calendar. Rails   React  APIs</div>
                     </a>
                 </div>
                 <div className="project-square">
                 <a href="https://github.com/kailanak1/recipe-blog-frontend" target="_blank" rel="noopener noreferrer">
                     <div className="project-title">Recipe App</div>
                     <div className="project-image">
                         <Img alt="recipe app" fluid={data.recipepic.childImageSharp.fluid}/>
                     </div>
                     <div className="project-desc">Recipe app. Rails React Boostrap</div>
                     </a>
                 </div>
                 <div className="project-square">
                     <a href="https://github.com/kailanak1/mealp" target="_blank" rel="noopener noreferrer">
                     <div className="project-title">Mealp</div>
                     <div className="project-image">
                         <Img alt="mealp project" fluid={data.mealp.childImageSharp.fluid}/>
                         <div className="project-desc">Yelp-like app. Rails </div>
                     </div>
                     </a>
                 </div>
             </div>
        </div>
        </div>
    </div>
    )
}

export default Project 