import "./header.scss";
import { HeaderProps } from "../../../types/types";

const Header = ({ notificationsToRead, onMarksReadAll }: HeaderProps) => {
  return (
    <header className='Header'>
      <div className='Header__left'>
        <h1 className='Header__title'>Notifications</h1>
        <span className='Header__notifyNumber'>{notificationsToRead}</span>
      </div>
      <p className='Header__text' onClick={onMarksReadAll}>
        Mark all as read
      </p>
    </header>
  );
};

export default Header;
