import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../components/animations";
import Bar from "../components/Bar";
import { languages, tools } from "../components/data";

const Resume = () => {

 

  return (
    <motion.div  variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="py-2 px-6">
      <motion.div variants={fadeInUp} initial="initial" animate="animate" className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Electrical and Electronics Engineering
            </h5>
            <p className="font-semibold">Kerala Technological Univercity</p>
            <p>2017-2021 batch</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">ReactJs Developer</h5>
            <p className="font-semibold">iAntz IT Solutions(2021 - on)</p>
            <p>
              I'm a Fresher with Jr. React Developer Post and Sr. Frontend
              Developer works!!!
            </p>
          </div>
        </div>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <motion.div variants={stagger} initial="initial" animate="animate" className="my-2">
              {
                  languages.map(language => <Bar data={language} key={language.name} />)
              }
          </motion.div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
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
