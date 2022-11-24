import { news } from "../../utils/constants/news";
import "./anotherNews.scss";
import News from "./news/news";

const AnotherNews = () => {
  return (
    <div className='AnotherNews'>
      <div className='container'>
        <ul className='row'>
          {news.map((item, index) => (
            <li className='col-xs-12 col-lg-4 flex'>
              <News key={index} {...item} number={index + 1} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnotherNews;
