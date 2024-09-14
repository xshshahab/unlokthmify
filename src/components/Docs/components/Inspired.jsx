import React from "react";

const Inspired = () => {
  return (
    <div className="container w-full p-4 mt-4 bg-white border-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-4 text-3xl font-bold text-gray-900">Inspired</h1>
      <p className="mb-6 text-gray-700">
        This project was inspired by the amazing work of{" "}
        <span className="font-semibold">Julien Thibeaut</span>. His
        contributions to the development community have been invaluable, and we
        have drawn inspiration from his techniques and design patterns.
      </p>

      <div className="flex items-center mb-4">
        <img
          src="https://ibelick.com/_next/image?url=%2Fme.jpg&w=828&q=75" // Replace with actual image or logo
          alt="John Doe's Website"
          className="w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Julien Thibeaut's Website
          </h2>
          <a
            href="https://ibelick.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Visit Website
          </a>
        </div>
      </div>

      <div className="flex items-center">
        <img
          src="https://ibelick.com/_next/image?url=%2Fme.jpg&w=828&q=75" // Replace with actual image or logo
          alt="Twitter Profile"
          className="w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Julien Thibeaut's Twitter
          </h2>
          <a
            href="https://x.com/Ibelick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Follow on Twitter
          </a>
        </div>
      </div>
      <h2 className="my-4 text-xl font-semibold text-gray-800">
        Key Contributions:
      </h2>
      <ul className="mb-6 ml-5 text-gray-700 list-disc">
        <li>
          Collection of modern background snippets.
          <a
            target="_blank"
            className="ml-1 text-blue-700 hover:text-sky-700 hover:underline"
            href="https://bg.ibelick.com/"
          >
            url
          </a>
        </li>
        <li>
          Discover a collection of Tailwind CSS buttons.
          <a
            target="_blank"
            className="ml-1 text-blue-700 hover:text-sky-700 hover:underline"
            href="https://buttons.ibelick.com/"
          >
            url
          </a>
        </li>
      </ul>
      {/* Important */}
      <div id="importandnote" className="flex gap-2 text-slate-600">
        <div className="w-1 h-6 bg-slate-300"></div>
        <strong>NOTE :</strong>
        <p>
          This project has just started. Over time, more features will be added.
        </p>
      </div>
      <br />
      <div id="importandnote" className="flex gap-2 text-slate-600">
        <div className="w-1 h-11 bg-slate-300"></div>
        <p>
          I know this project has many flaws, but I will gradually enhance it,
          and once I reach a good level, I will create my own UI library.
        </p>
      </div>
    </div>
  );
};

export default Inspired;
