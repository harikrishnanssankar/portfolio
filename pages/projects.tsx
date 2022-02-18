import { motion } from "framer-motion";
import Head from "next/head";
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
    <motion.div  variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="px-5 py-2"  >
      <Head>
        <title>Harikrishnans | Projects</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4ade80"/>
      </Head>
      <ProjectNavbar handleFilterCategory={handleFilterCategory} activeCategory={activeCategory} />
      <motion.div variants={stagger} initial="initial" animate="animate" className="grid grid-cols-12 gap-4 my-3  projectList__container overflow-y-auto" style={{height:"430px"}}>
        {projectList.map((project, key) => {
          return (
            <motion.div variants={fadeInUp} className="col-span-12 justify-items-center sm:col-span-6 md:col-span-4 lg:col-span-3 bg-gray-200 dark:bg-dark-200 rounded-md w-48 h-32" key={key}>
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
