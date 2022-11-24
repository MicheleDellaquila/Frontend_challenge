import MainNews from "../mainNews/mainNews";
import NewNews from "../newNews/newNews";
import "./hero.scss";

const Hero = () => {
  return (
    <section className='Hero'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-lg-8'>
            <MainNews />
          </div>
          <div className='col-xs-12 col-lg-4 flex'>
            <NewNews />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
