import "./news.scss";
import { NewsProps } from "../../../types/types.component";

const News = ({ image, title, content, number }: NewsProps) => {
  return (
    <div className='News'>
      <figure className="News__contentImage">
        <img className="News__image" src={image} alt={title} />
      </figure>
      <div className='News__content'>
        <h1 className='News__number'>0{number}</h1>
        <h4 className='News__title'>{title}</h4>
        <p className='News__text'>{content}</p>
      </div>
    </div>
  );
};

export default News;
