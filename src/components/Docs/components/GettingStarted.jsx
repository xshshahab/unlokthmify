import React from "react";

const GettingStarted = () => {
  return (
    <div className="container w-full p-4 mx-auto mt-4 ">
      <h1 className="mb-4 text-2xl font-bold">Getting Started</h1>
      <p>
        Welcome to the Getting Started guide! Here you will find instructions on
        how to get up and running with our project.
      </p>
      <ul className="mt-4 list-disc list-inside">
        <li>Install the necessary dependencies.</li>
        <li>Run the project locally using the development server.</li>
        <li>Explore the documentation to learn more.</li>
      </ul>
    </div>
  );
};

export default GettingStarted;
