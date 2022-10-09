import { Link } from "react-router-dom";

const StoriesHero = ({ strapline, heading, text, date, author, linkText }) => {
  return (
    <div className="stories-hero__internal">
      <div className="stories-hero__content">
        <span className="strapline stories-hero__strapline">{strapline}</span>
        <h1>{heading}</h1>
        <div className="stories-hero__info">
          <span className="date">{date}</span>
          <p className="author">by {author}</p>
        </div>
        <p>{text}</p>
        <Link to="#" className="button button-two">
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default StoriesHero;
