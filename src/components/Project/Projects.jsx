import { Link } from "react-router-dom"
import Button from "../Atoms/Button/Button"
import Icon from "../Atoms/Icons/Icon"
import "./ProjectsGrid.scss"

function Projects(props) {

    return (
      <>
        <div className="projects">
          <div className="flex--row item1">
            <h1>{props.title}</h1>
            <Link to={props.projectUrl}>
              <Button type="btn btn--accent" content={<Icon name="salir" />}></Button>
            </Link>
          </div>
          <figure className="item2">
            <img className="projects__img" src={props.image} alt={props.title} />
          </figure>
          <p className="item3">{props.description}</p>
          <div className="flex--column item4">
            <h2 className="h6">Links:</h2>
            <div className="flex--row">
            {props.links?.map(links => <a href={links?.url} target="_blank"><Button content={links?.name}/></a>)}
            </div>
          </div>
          <div className="flex--column item5">
            <h2 className="h6">Technology:</h2>
            <div className="flex--row">
              <Icon/><Icon/><Icon/>
            </div>
          </div>
          <div className="flex--row item6">
            <div className="flex--column">
              <h2 className="h6">Role:</h2>
              <p>{props.role}</p>
            </div>
            <div className="flex--column">
              <h2 className="h6">Year:</h2>
              <p>{props.year}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Projects
  