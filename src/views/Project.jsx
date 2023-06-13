import { useContext } from "react";
import ProjectNav from "../components/Atoms/ProjectNav/ProjectNav"
import Projects from "../components/Project/Projects"
import { projectContext } from "../App";
import { useParams } from "react-router-dom";



function Project() {
  const {projects} = useContext (projectContext);
  const params = useParams();
  const listado = projects;
  const selectedProject = listado.find((projects) => projects.id === params.projectID);

  // Obtén los índices de los proyectos anterior y siguiente
  const currentIndex = listado.findIndex((project) => project.id === params.projectID);
  const previousIndex = currentIndex - 1;
  const nextIndex = currentIndex + 1;

  // Verifica si existen proyectos anterior y siguiente
  const previousProject = listado[previousIndex] || " ";
  const nextProject = listado[nextIndex] || " ";

  return (
      <>
        <Projects
          key={selectedProject?.id}
          title={selectedProject?.title}
          tagline={selectedProject?.tagline}
          image={selectedProject?.image}
          description={selectedProject?.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          year={selectedProject?.year}
          role={selectedProject?.role}
          links={selectedProject?.links}
          technologies={selectedProject?.technologies}
          alt={selectedProject?.altImg}
          />
        <ProjectNav previousProject={previousProject} nextProject={nextProject} />
      </>
    )
  }
  
export default Project
  