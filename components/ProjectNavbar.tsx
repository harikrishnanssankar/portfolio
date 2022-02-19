import { FunctionComponent } from "react";
import { Category } from "./type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handleFilterCategory: Function;
  activeCategory:string
}> = ({ value, handleFilterCategory, activeCategory }) => {

  const activeClass = "text-green"

  return (
    <li
      className={`${activeCategory===value? activeClass:""} cursor-pointer hover:text-green capitalize`}
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectNavbar:FunctionComponent<{handleFilterCategory:Function, activeCategory:string}> = (props) => {
  return (
    <ul className="flex space-x-3 px-3 py-2 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="mongo" {...props} />
    </ul>
  );
};

export default ProjectNavbar;
