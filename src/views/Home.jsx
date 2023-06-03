import { useContext } from "react";
import { projectContext } from "../App";
import Cover from "../components/Cover/Cover"
import Filter from "../components/Filter/Filter"
import ProjectCard from "../components/ProjectCard/ProjectCard"

function Home() {
  const {projects} = useContext (projectContext);

  
  return (
      <>
        <Cover />
        <Filter />
        <div className="col3">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tagline={project.tagline}
              image={project.image}
            />
          ))}
        </div>
      </>
    )
  }
  
export default Home
  