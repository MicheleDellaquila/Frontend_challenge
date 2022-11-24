import "./logo.scss";
import LogoImage from "../../../assets/icons/logo.svg";

const Logo = () => {
  return (
    <a className='Logo' href='/'>
      <img src={LogoImage} alt='logo' />
    </a>
  );
};

export default Logo;
