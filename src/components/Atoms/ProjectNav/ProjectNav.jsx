import { Link } from "react-router-dom"
import "./ProjectNav.scss"

function ProjectNav(props) {

    return (
      <>
        <div className={`project-nav ${props.class ?? ''}`}>
          <div className="project-nav--wrap">
          {props.previousProject.id ? (
            <Link to={'/project/' + props.previousProject.id} className="project-nav__link" href="#" aria-label="link to previous project">
                <svg className="project-nav__arrow" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M8 1.42 3.42 6 8 10.59 6.59 12l-6-6 6-6L8 1.42Z" fill="currentColor"/></svg>
                <p className="h6">Prev</p>
            </Link>) : (" ")}
            <p className="h6">/</p>
            {props.nextProject.id ? (
            <Link to={'/project/' + props.nextProject.id} className="project-nav__link" href="#" aria-label="link to next project">
                <p className="h6">Next</p>
                <svg className="project-nav__arrow" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M0 10.58 4.58 6 0 1.41 1.41 0l6 6-6 6L0 10.58Z" fill="currentColor"/></svg>
            </Link>) : (" ")}
            </div>
        </div>
      </>
    )
  }
  
export default ProjectNav
  