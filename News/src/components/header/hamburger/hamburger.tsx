import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import "./hamburger.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from "../../../containers/menu/menu";

const Hamburger = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const hamburgerRef = useRef<HTMLSpanElement>(null);

  // check hamburger status
  const checkHamburgerStatus = useCallback(({ target }: MouseEvent) => {
    if (!hamburgerRef.current?.contains(target as Node)) {
      setShowHamburger(false);
    }
  }, []);

  // check if hamburger is trigger
  useEffect(() => {
    window.addEventListener("click", checkHamburgerStatus);

    return () => {
      window.removeEventListener("click", checkHamburgerStatus);
    };
  }, []);

  return (
    <Fragment>
      <span
        ref={hamburgerRef}
        className='Hamburger'
        onClick={() => setShowHamburger(true)}
      >
        <GiHamburgerMenu className='Hamburger__icon' />
      </span>
      {showHamburger && <Menu />}
    </Fragment>
  );
};

export default Hamburger;
