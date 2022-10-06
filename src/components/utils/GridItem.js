import React from "react";

const GridItem = ({ image, imgAlt, heading, text, link }) => {
  return (
    <div className="grid-area__item">
      <div className="grid-area__content">
        <h2>{heading}</h2>
        <p>{text}</p>
        {/* Link here */}
      </div>
      <div className="grid-area__media">
        <img src={`/assets/home/desktop/${image}.jpg`} alt={imgAlt} />
      </div>
    </div>
  );
};

export default GridItem;
