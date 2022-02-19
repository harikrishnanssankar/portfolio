import { motion } from "framer-motion";
import Head from "next/head";
import { fadeInUp, routeAnimation, stagger } from "../components/animations";
import Bar from "../components/Bar";
import { languages, tools } from "../components/data";

const Resume = () => {

 

  return (
    <motion.div  variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="py-2 px-6">
      <Head>
        <title>Harikrishnans | Resume</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4ade80"/>
      </Head>
      <motion.div variants={fadeInUp} initial="initial" animate="animate" className="grid gap-6 md:grid-cols-2">
        <div>
          <span className="my-3 text-2xl font-bold">Education</span>
          <div>
            <span className="my-2 text-xl font-bold">
              Electrical and Electronics Engineering
            </span>
            <p className="font-semibold py-1">Kerala Technological Univercity</p>
            <p className="py-1">2017-2021 batch</p>
          </div>
        </div>
        <div>
          <span className="my-3 text-2xl font-bold">Experience</span>
          <div>
            <span className="my-2 text-xl font-bold">ReactJs Developer</span>
            <p className="font-semibold py-1">iAntz IT Solutions(2021 - present)</p>
            <p className="py-1">
              {"Working as Jr. React Developer with Sr. Frontend Developer responsibilities!!!"}
            </p>
          </div>
        </div>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <span className="my-3 text-2xl font-bold">Languages and Frameworks</span>
          <motion.div variants={stagger} initial="initial" animate="animate" className="my-2">
              {
                  languages.map(language => <Bar data={language} key={language.name} />)
              }
          </motion.div>
        </div>
        <div>
          <span className="my-3 text-2xl font-bold">Tools and Softwares</span>
          <motion.div variants={stagger} initial="initial" animate="animate" className="my-2">
              {
                  tools.map(tool => <Bar data={tool} key={tool.name} />)
              }
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
