import Link from "next/link";
import { FunctionComponent } from "react";

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, setActiveItem, route, name }) => {
  return (
    <>
      {activeItem !== name ? (
        <Link href={route}>
          <a>
            <span className="hover:text-green-400" onClick={() => setActiveItem(name)}>{name}</span>
          </a>
        </Link>
      ) : null}
    </>
  );
};

export default NavItem;
