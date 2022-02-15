import { motion } from "framer-motion";
import { fadeInUp, routeAnimation, stagger } from "../components/animations";
import { aboutContent, services } from "../components/data";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  return (
    <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit" className="flex flex-col px-6 pt-1 justify-center align-center flex-grow ">
      <h5 className="my-3 font-medium text-justify">
        {aboutContent}
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow " style={{marginLeft: "-1.5rem", marginRight: "-1.5rem"}} >
        <h6 className="my-3 text-xl font-bold tracking-wide" >Skills</h6>
        <motion.div variants={stagger} initial="initial"animate="animate" className="grid lg:grid-cols-2 gap-6">
          {services.map((service) => {
            return (
              <motion.div key={service.title} variants={fadeInUp}  className="flex items-center lg:col-span-1 rounded-lg bg-gray-200 dark:bg-dark-200" >
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Index;
