import React from "react";
import { Link } from "react-router-dom";

const GridItem = ({ headingType, image, imgAlt, heading, text, linkText }) => {
  return (
    <div className="grid-area__item">
      <div className="grid-area__content">
        <h2>{heading}</h2>
        <p>{text}</p>
        <Link to="#" className="button button-two">
          {linkText}
        </Link>
      </div>
      <div className="grid-area__media">
        <img src={`/assets/home/desktop/${image}.jpg`} alt={imgAlt} />
      </div>
    </div>
  );
};

export default GridItem;
