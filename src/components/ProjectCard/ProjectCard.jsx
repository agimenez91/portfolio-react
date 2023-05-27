import Button from "../Atoms/Button/Button"
import Icon from "../Atoms/Icons/icon"
import "./ProjectCard.scss"

function ProjectCard() {

    return (
      <>
        <div className="projectCard col3--item">
          <div className="projectCard__content">
            <div className="projectCard__info">
              <h2 className="h3">Project Tile</h2>
              <small>Project Description</small>
            </div>
            <div className="projectCard__link">
              <div className="projectCard__icons"><Icon/><Icon/><Icon/></div>
              <Button type='btn--accent' content="→"></Button>
            </div>
          </div>
          <div className="projectCard__overlay"></div>
        </div>
      </>
    )
  }
  
export default ProjectCard
  