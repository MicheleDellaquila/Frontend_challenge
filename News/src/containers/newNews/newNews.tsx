import "./newNews.scss";

const NewNews = () => {
  return (
    <aside className="NewNews">
      <h1 className="NewNews__label">New</h1>
      <ul className="NewNews__list">
        <li className="NewNews__item">
          <h4 className="NewNews__title">Hydrogen VS Eletric Cars</h4>
          <p className="NewNews__text">Will hydrogen-fueled card ever catch up to Evs?</p>
        </li>
        <li className="NewNews__item">
          <h4 className="NewNews__title">The Downsides of AI Artistry</h4>
          <p className="NewNews__text">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </li>
        <li className="NewNews__item">
          <h4 className="NewNews__title">Is VC Funding Drying Up?</h4>
          <p className="NewNews__text">
            Private funding by VC firms is down 50% YOY. We take a look at what that means.
          </p>
        </li>
      </ul>
    </aside>
  );
};

export default NewNews;
