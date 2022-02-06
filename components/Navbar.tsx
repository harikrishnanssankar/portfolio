import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import NavItem from "./NavItem";

const navRoutes = [
  {
    name: "About",
    route: "/",
  },
  {
    name: "Projects",
    route: "/projects",
  },
  {
    name: "Resume",
    route: "/resume",
  },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("About");
    } else if (pathname === "/projects") {
      setActiveItem("Projects");
    } else if (pathname === "/resume") {
      setActiveItem("Resume");
    } else {
      setActiveItem("About");
    }
    return () => {};
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3" >
      <span className="font-bold text-green-500  text-xl border-b-4 border-green-400 md:text-2xl">{activeItem}</span>
      <div className="font-lg flex space-x-5">
        {navRoutes.map((item) => {
         return <NavItem
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name={item.name}
            route={item.route}
            key={item.name}
          />
        })}
       
      </div>
    </div>
  );
};

export default Navbar;
