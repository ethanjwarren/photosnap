import HeroArea from "./utils/HeroArea";
import FeaturesItem from "./utils/FeaturesItem";

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
      <section className="features-area">
        <div className="l-container">
          <FeaturesItem
            image="responsive"
            title="100% Responsive"
            text="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
          />
          <FeaturesItem
            image="no-limit"
            title="No Photo Upload Limit"
            text="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
          />
          <FeaturesItem
            image="embed"
            title="Available to Embed"
            text="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
          />
          <FeaturesItem
            image="custom-domain"
            title="Custom Domain"
            text="With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! "
          />
          <FeaturesItem
            image="boost-exposure"
            title="Available to Embed"
            text="Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list. "
          />
          <FeaturesItem
            image="drag-drop"
            title="Available to Embed"
            text="Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories. "
          />
        </div>
      </section>
    </div>
  );
};

export default Features;
