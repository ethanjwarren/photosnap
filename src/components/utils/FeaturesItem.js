const FeaturesItem = ({ image, imgAlt, title, text }) => {
  return (
    <div className="features-area__item">
      <div className="features-area__media">
        <img src={`/assets/features/desktop/${image}.svg`} alt={imgAlt} />
      </div>
      <div className="features-area__title">
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default FeaturesItem;
