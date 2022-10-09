import React, { useState } from "react";
import StoriesHero from "./utils/StoriesHero";

const Stories = props => {
  return (
    <div className="stories-content">
      <section
        className="stories-hero"
        style={{
          backgroundImage: `url("/assets/stories/desktop/moon-of-appalacia.jpg")`,
        }}
      >
        <StoriesHero
          strapline="Last months featured story"
          heading="Hazy Full Moon of Appalchia"
          text='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
          date="March 2nd 2020"
          author="John Appleseed"
          linkText="Read the story"
        />
      </section>
    </div>
  );
};

export default Stories;
