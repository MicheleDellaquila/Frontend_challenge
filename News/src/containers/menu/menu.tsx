import "./menu.scss";
import { GrClose } from "react-icons/gr";
import { navLink } from "../../utils/constants/navLink";
import NavItem from "../../components/header/navItem/navItem";

const Menu = () => {
  return (
    <div className='Menu'>
      <div className='Menu__container'>
        <header className='Menu__header'>
          <span className='Menu__contentIcon'>
            <GrClose className='Menu__icon' />
          </span>
        </header>
        <nav className='Menu__nav'>
          <ul className='Menu__nav-list'>
            {navLink.map((link, index) => (
              <NavItem key={index} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
