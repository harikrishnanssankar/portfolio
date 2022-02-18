import { motion } from "framer-motion";
import Image from "next/image";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { fadeInUp, stagger } from "./animations";
import { IProject } from "./type";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    category,
    technologies,
    description,
    github_url,
    deployed_url,
    image_path,
  },
}) => {
  const [modelOpen, setModelOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    // only add the event listener when the modalRef is opened
    if (!modelOpen) return;
    function handleClick(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModelOpen(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [modelOpen]);

  return (
    <div className="p-2">
      <Image
        onClick={() => setModelOpen(!modelOpen)}
        src={image_path}
        alt={name}
        className="cursor-pointer"
        width={320}
        height={155}
        layout="responsive"
      />
      <p onClick={() => setModelOpen(!modelOpen)} className="my-2 text-center w-full cursor-pointer">
        {name}
      </p>

      {modelOpen && (
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          ref={modalRef}
          className="absolute top-20 left-0 z-10 w-full p-2 md:p-10 h-auto gap-x-12 grid md:grid-cols-2 text-black dark:text-white bg-gray-100 dark:bg-dark-100 rounded-xl shadow-custom-light dark:shadow-custom-dark "
        >
          <motion.div
            variants={stagger}
            className="flex flex-col justify-center"
          >
            {/* <img src={image_path} alt="" /> */}
            <motion.div variants={fadeInUp}>
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
                className="rounded-md"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="justify-center flex my-4 space-x-3"
            >
              <a
                href={github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Source Code</span>
              </a>
              <a
                href={deployed_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Deployed</span>
              </a>
            </motion.div>
          </motion.div>
          <motion.div variants={stagger} className="flex flex-col justify-center">
            <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>
            <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {technologies.map((tech) => {
                return (
                  <span
                    className="px-2 py-1 bg-gray-200 dark:bg-dark-200 rounded"
                    key={tech}
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setModelOpen(!modelOpen)}
            className="absolute p-1 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 "
          >
            <MdClose size={30} />{" "}
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
