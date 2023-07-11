import Button from "../Atoms/Button/Button"
import Icon from "../Atoms/Icons/Icon"
import "./Projects.scss"

function Projects(props) {

    return (
      <>
        <div className="projects">
          <div className="flex--row projects__grid--1">
            <h1>{props.title}</h1>
              {/* <Button href={props.projectUrl} ariaButton="button that includes a link" ariaLink="link that drives to project website" type="btn btn--accent" content={<Icon name="leave-to"/>}></Button> */}
          </div>
          <figure className="projects__grid--2">
            <img className="projects__img" src={props.image} alt={props.alt}/>
          </figure>
          <div className="projects__grid--3">
            {props.description}
          </div>
          <div className="flex--column projects__grid--4">
            <h2 className="h6">Technology used:</h2>
            <div className="flex--row">
              {props.technologies?.map((tech) => (
                <Icon key={tech} name={tech} />
              ))}
            </div>
          </div>
            <div className="flex--column projects__grid--5">
              <h2 className="h6">Role:</h2>
              <p>{props.role}</p>
            </div>
            <div className="flex--column projects__grid--6">
              <h2 className="h6">Year:</h2>
              <p>{props.year}</p>
            </div>
            <div className="flex--column projects__grid--7">
              <h2 className="h6">Links:</h2>
              <div className="flex--row">
                {props.links?.map(links =><Button href={links?.url} ariaLink={links?.ariaLink} key={links?.url} target="_blank" content={links?.name} icon="leave-to"/>)}
              </div>
            </div>
          </div>
      </>
    )
  }
  
export default Projects
  