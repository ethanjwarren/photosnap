import React from "react";
import { Link } from "react-router-dom";

const StoriesItem = ({ image, imgAlt, date, title, author, linkText }) => {
  return (
    <div className="stories-area__item">
      <div className="stories-area__media">
        <img src={`/assets/stories/desktop/${image}.jpg`} alt={imgAlt} />
      </div>
      <div className="stories-area__content">
        <p>{date}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <hr></hr>
        <Link to="#" className="button button-two">
          Read Story
        </Link>
      </div>
    </div>
  );
};

export default StoriesItem;
