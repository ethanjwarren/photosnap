import React, { useState } from "react";
import StoriesHero from "./utils/StoriesHero";
import StoriesItem from "./utils/StoriesItem";

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
        <StoriesItem
          image="world-tour"
          title="World Tour 2019"
          author="by Timothy Wagner"
        />
        <StoriesItem
          image="unforeseen-corners"
          title="Unforseen Corners"
          author="by William Malcolm"
        />
        <StoriesItem
          image="king-on-africa"
          title="King on Africa: Part II"
          author="by Tim Hillenburg"
        />
        <StoriesItem
          image="trip-to-nowhere"
          title="The Trip to Nowhere"
          author="by Felicia Rourke"
        />
        <StoriesItem
          image="rage-of-the-sea"
          title="Rage of The Sea"
          author="by Mohammed Abdul"
        />
        <StoriesItem
          image="running-free"
          title="Running Free"
          author="by Michelle"
        />
        <StoriesItem
          image="behind-the-waves"
          title="Behind the Waves"
          author="by Lamarr Wilson"
        />
        <StoriesItem
          image="calm-waters"
          title="Calm Waters"
          author="by Samantha Brooke"
        />
        <StoriesItem
          image="milky-way"
          title="The Milky Way"
          author="by Benjamin Cruz"
        />
        <StoriesItem
          image="dark-forest"
          title="Night at The Dark Forest"
          author="by Mohammed Abdul"
        />
        <StoriesItem
          image="somwarpet"
          title="Somwarpet’s Beauty"
          author="by Michelle"
        />
        <StoriesItem
          image="land-of-dreams"
          title="Land of Dreams"
          author="by William Malcolm"
        />
      </section>
    </div>
  );
};

export default Stories;
