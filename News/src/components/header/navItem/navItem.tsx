import "./navItem.scss";
import { NavItemProps } from "../../../types/types.component";

const NavItem = ({ path, name }: NavItemProps) => {
  return (
    <li className='NavItem'>
      <a className='NavItem__link' href={path}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
