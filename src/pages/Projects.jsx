import Project from "../components/Project.jsx";
import projectData from "../data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="row mt-4">
        {projectData.map(project => {
          return (
            <div className="col-sm-6 align-self-stretch" key={project.slug}>
              <Project
                name={project.name}
                slug={project.slug}
                img={project.img}
                desc={project.description}
                link={project.deployed}
                repo={project.repository}
              />
            </div>
          )
        })}
      </div>
    </>
  )
};

export default Projects;