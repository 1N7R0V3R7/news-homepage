import React from "react";
import NewItems from "./NewItems";

export const New = () => {
  const newHeadlines = [
    {
      heading: "Hydrogen VS Electric Cards",
      description: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      heading: "The Downsides of AI Artistry",
      description:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      heading: "Is VS Funding Drying Up?",
      description:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  const renderNews = newHeadlines.map((n, index) => (
    <NewItems key={index} heading={n.heading} description={n.description} />
  ));
  return (
    <div className="bg-neutral-very-dark-blue px-6 mt-16 lg:mt-0">
      <h1 className="font-bold text-primary-orange pt-8 text-4xl">New</h1>
      <div className="divide-y">
      {renderNews}
      </div>
    </div>
  );
};
