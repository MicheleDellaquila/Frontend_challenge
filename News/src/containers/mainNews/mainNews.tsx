import "./mainNews.scss";
import ImageDesktop from "../../assets/images/image-web-3-desktop.jpg";
import Button from "../../components/ui/button/button";

const MainNews = () => {
  return (
    <div className='MainNews'>
      <figure>
        <img className='MainNews__image' src={ImageDesktop} alt='web 3' />
      </figure>
      <div className='MainNews__bottom'>
        <h1 className='MainNews__title'>The Bright Future of Web 3.0 ?</h1>
        <div className='MainNews__content'>
          <p className='MainNews__content-text'>
            We dive into the next evolution of the web that claims to put
            the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise ?
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default MainNews;
