import "./header.scss";
import Logo from "../ui/logo/logo";
import { navLink } from "../../utils/constants/navLink";
import NavItem from "./navItem/navItem";
import useWindowsSize from "../../hooks/useWindowsSize";
import Hamburger from "./hamburger/hamburger";

const Header = () => {
  const width = useWindowsSize();

  return (
    <header className='Header'>
      <div className='container'>
        <div className='row items-center'>
          <div className='col-sm-6'>
            <Logo />
          </div>
          {width > 575 && (
            <nav className='col-sm-6'>
              <ul className='Header__list'>
                {navLink.map((link, index) => (
                  <NavItem key={index} {...link} />
                ))}
              </ul>
            </nav>
          )}
          {width <= 575 && <Hamburger />}
        </div>
      </div>
    </header>
  );
};

export default Header;
