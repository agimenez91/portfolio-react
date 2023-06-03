import Button from "../Atoms/Button/Button"
import Icon from "../Atoms/Icons/Icon"
import "./ProjectCard.scss"

function ProjectCard(props) {

    return (
      <>
        <div className="projectCard col3--item" style={{background: `url(${props.image}) no-repeat`, backgroundSize: 'cover',}}>
          <div className="projectCard__content">
            <div className="projectCard__info">
              <h2 className="h3">{props.title}</h2>
              <small>{props.tagline}</small>
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
  