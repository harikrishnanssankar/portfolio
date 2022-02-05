import { FunctionComponent } from "react";
import { ISkill } from "./type";
import { motion } from "framer-motion"

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {


const variants = {
  initial:{
    width:0
  },
  animate:{
    width:level,
    transition:{
      duration:0.4,
      type:"spring",
      damping:10,
      stiffness:100,
    }
  }
}



  return (
    <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full " >
      <motion.div variants={variants}  className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-600" style={{width:level}} >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;
