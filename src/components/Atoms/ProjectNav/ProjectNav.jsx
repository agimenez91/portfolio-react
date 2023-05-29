import "./ProjectNav.scss"

function ProjectNav() {

    return (
      <>
        <div className="project-nav">
            <a className="project-nav__link" href="#">
                <svg className="project-nav__arrow" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M8 1.42 3.42 6 8 10.59 6.59 12l-6-6 6-6L8 1.42Z" fill="currentColor"/></svg>
                <p className="h6">Prev</p>
            </a>
            <p className="h6">/</p>
            <a className="project-nav__link" href="#">
                <p className="h6">Next</p>
                <svg className="project-nav__arrow" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 12"><path d="M0 10.58 4.58 6 0 1.41 1.41 0l6 6-6 6L0 10.58Z" fill="currentColor"/></svg>
            </a>
        </div>
      </>
    )
  }
  
export default ProjectNav
  