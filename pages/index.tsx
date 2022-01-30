import { services } from "../components/data";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  return (
    <div className="flex flex-col px-6 pt-1 justify-center align-center flex-grow ">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rerum
        optio porro distinctio quisquam saepe ab, cupiditate eius dolorum. Eius
        numquam quibusdam modi quam. In dolorum fuga odio voluptatibus
        perferendis.
      </h5>
      <div className="p-4 mt-5 bg-gray-400 dark:bg-dark-100 flex-grow " style={{marginLeft: "-1.5rem", marginRight: "-1.5rem"}} >
        <h6 className="my-3 text-xl font-bold tracking-wide" >Skills</h6>
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((service) => {
            return (
              <div className="flex items-center lg:col-span-1 rounded-lg bg-gray-200 dark:bg-dark-200" >
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
