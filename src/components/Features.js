import HeroArea from "./utils/HeroArea";

const Features = () => {
  return (
    <div className="features-content">
      <section className="hero-area">
        <HeroArea
          heading="Features"
          text="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
          image="/assets/features/desktop/hero"
        />
      </section>
    </div>
  );
};

export default Features;
