import { FunctionComponent } from "react";
import { IService } from "./type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
    const createMarkup = () => {
        return {
            __html : about
        }
    }
  return (
    <div className="p-2 flex items-center space-x-4" >
      <div className="flex items-center justify-center w-10" >
      <Icon className="w-10 h-10 text-green-400" />
      </div>
      <div>
        <h4 className="font-bold" >{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
