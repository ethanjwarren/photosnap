import React, { useState } from "react";
import GridItem from "./utils/GridItem";

const Home = props => {
  return (
    <section className="grid-area">
      <GridItem
        heading="Create and share your photo stories. "
        text="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        image="create-and-share"
        imgAlt="Man standing on decking"
        linkText="Get an invite"
      />
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
  );
};

export default Home;
