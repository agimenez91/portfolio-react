import Button from "../Atoms/Button/Button"
import Icon from "../Atoms/Icons/Icon"
import "./ProjectsGrid.scss"

function Projects() {

    return (
      <>
        <div className="projects">
          <div className="flex--row item1">
            <h1>Project Name</h1>
            <Button type="btn--accent" content={<Icon/>}/>
          </div>
          <figure className="item2">
            <img className="projects__img" src="https://placekeanu.com/350/250g" alt="" />
          </figure>
          <p className="item3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae illum dicta. Quod reiciendis dolorum iste dolor qui quisquam? Consequuntur iste eum esse ducimus quae earum excepturi debitis ex veritatis!</p>
          <div className="flex--column item4">
            <h2 className="h6">Links:</h2>
            <div className="flex--row">
              <Button content="Figma"/><Button content="Figma"/><Button content="Figma"/>
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
              <p>Bla bla</p>
            </div>
            <div className="flex--column">
              <h2 className="h6">Year:</h2>
              <p>Bla bla</p>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Projects
  