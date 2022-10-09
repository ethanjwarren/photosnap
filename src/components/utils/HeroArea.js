import { Link } from "react-router-dom";

const HeroInternal = ({ image, imgAlt, heading, text, linkText }) => {
  return (
    <div className="hero-area__internal">
      <div className="hero-area__content">
        <h1>{heading}</h1>
        <p>{text}</p>
        <Link to="#" className="button button-two">
          {linkText}
        </Link>
      </div>
      <div className="hero-area__media">
        <img src={`${image}.jpg`} alt={imgAlt} />
      </div>
    </div>
  );
};

export default HeroInternal;
