import { projects } from "../components/data";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  console.log(projects);

  return (
    <div className="px-5 py-2 overflow-y-auto " style={{height:"500px"}}  >
      <nav>Nav</nav>
      <div className="grid grid-cols-12 gap-4 my-3 relative  ">
        {projects.map((project) => {
          return (
            <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 " key={project.name}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
