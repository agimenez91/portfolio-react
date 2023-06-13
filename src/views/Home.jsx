import { useState, useEffect, useContext } from "react";
import { projectContext } from "../App";
import Cover from "../components/Cover/Cover";
import Filter from "../components/Filter/Filter";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import DropdownBtn from "../components/Atoms/DropdownButton/DropdownBtn";

function Home() {
  const { projects } = useContext(projectContext);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedFilter, setSelectedFilter] = useState("All");

  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.typeOfProject.includes(selectedFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilter, projects]);

  const handleFilter = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <Cover />
      <Filter onFilter={handleFilter} />
      <div id="projects" className="col3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tagline={project.tagline}
            image={project.image}
            projectUrl={project.projectUrl}
            technologies={project.technologies}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
