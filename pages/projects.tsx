import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, routeAnimation, stagger } from "../components/animations";
import { projects } from "../components/data";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { Category } from "../components/type";

const Projects = () => {
const [projectList, setProjectList] = useState(projects);
const [activeCategory, setActiveCategory] = useState("all");

const handleFilterCategory = (category:Category | "all") => {
  if (category === "all") {
    setProjectList(projects)
    setActiveCategory(category)
  }else{
    const filteredProjects = projects.filter(project => project.category.includes(category))
    setProjectList(filteredProjects)
    setActiveCategory(category)
  }
};


  return (
    <motion.div  variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2 overflow-y-auto  " style={{height:"500px"}}  >
      <ProjectNavbar handleFilterCategory={handleFilterCategory} activeCategory={activeCategory} />
      <motion.div variants={stagger} initial="initial" animate="animate" className="grid grid-cols-12 gap-4 my-3 relative  projectList__container">
        {projectList.map((project, key) => {
          return (
            <motion.div variants={fadeInUp} className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 " key={key}>
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
