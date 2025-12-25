import React from "react";

type Props = {};

const featuresData = [
  {
    title: "Feature One",
    description: "Description for feature one.",
  },
  {
    title: "Feature Two",
    description: "Description for feature two.",
  },
  {
    title: "Feature Three",
    description: "Description for feature three.",
  },
];

const Features = (props: Props) => {
  return (
    <div>
      {featuresData.map((feature, index) => (
        <div key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
