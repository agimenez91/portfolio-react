import { useContext } from "react";
import ProjectNav from "../components/Atoms/ProjectNav/ProjectNav"
import Projects from "../components/Project/Projects"
import { projectContext } from "../App";
import { useParams } from "react-router-dom";



function Project() {
  const {projects} = useContext (projectContext);
  const params = useParams();
  const listado = projects
  const selectedProject = listado.find((project) => projects.id === params.projectId);

  console.log (selectedProject);

    return (
      <>
          <Projects
          title={projects.title}
          tagline={projects.tagline}
          image={projects.image}
          description={projects.description}
          year={projects.year}
          role={projects.role}
          />
        <ProjectNav />
      </>
    )
  }
  
export default Project
  