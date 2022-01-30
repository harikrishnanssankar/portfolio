import { FunctionComponent } from "react";
import { ISkill } from "./type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, level },
}) => {
  return (
    <div className="text-white my-2 bg-gray-300 dark:bg-dark-300 rounded-full " >
      <div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-400 to-blue-600" style={{width:level}} >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
