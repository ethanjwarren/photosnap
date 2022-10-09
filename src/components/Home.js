import React, { useState } from "react";
import HeroArea from "./utils/HeroArea";
import GridItem from "./utils/GridItem";
import StoriesItem from "./utils/StoriesItem";
import FeaturesItem from "./utils/FeaturesItem";

const Home = props => {
  return (
    <div className="home-content">
      <section className="hero-area">
        <HeroArea
          heading="Create and share your photo stories. "
          text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
          image="/assets/home/desktop/create-and-share"
          imgAlt="Man standing on decking holding a camera"
          linkText="Get an invite"
        />
      </section>
      <section className="grid-area">
        <GridItem
          heading="BEAUTIFUL STORIES EVERY TIME"
          text="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
          image="beautiful-stories"
          imgAlt="Laptop sitting on a desk"
          linkText="View the stories"
        />
        <GridItem
          heading="DESIGNED FOR EVERYONE"
          text="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          image="designed-for-everyone"
          imgAlt="Man holding a professional camera"
          linkText="View the stories"
        />
      </section>
      <section className="stories-area">
        <StoriesItem
          image="mountains"
          title="The Mountains"
          author="by John Appleseed"
        />
        <StoriesItem
          image="cityscapes"
          title="Sunset Cityscapes"
          author="by Benjamin Cruz"
        />
        <StoriesItem
          image="18-days-voyage"
          title="18 Days Voyage"
          author="by Alexei Borodin"
        />
        <StoriesItem
          image="architecturals"
          title="Architecturals"
          author="by Samantha Brooke"
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
        </div>
      </section>
    </div>
  );
};

export default Home;
