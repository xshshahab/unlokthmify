import React from "react";

const GettingStarted = () => {
  return (
    <main className="container p-6 mx-auto">
      <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-3xl font-semibold">Getting Started</h2>
        <p className="mb-4 text-gray-700">
          Welcome to Unlok Thmify! Follow these simple steps to get started with
          our theme customization tool.
        </p>

        <section className="mb-6">
          <h3 className="mb-2 text-xl font-semibold">1. Explore Buttons</h3>
          <p className="text-gray-600">
            Visit our{" "}
            <a href="/pages/buttons" className="text-blue-500 hover:underline">
              Buttons
            </a>{" "}
            page to see the different button styles available. You can copy and
            paste the HTML/CSS code to integrate them into your project.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2 text-xl font-semibold">
            2. Customize Backgrounds
          </h3>
          <p className="text-gray-600">
            Check out our{" "}
            <a
              href="/pages/background"
              className="text-blue-500 hover:underline"
            >
              Background
            </a>{" "}
            page to explore various background options. You can easily apply
            these backgrounds to your website by copying the provided CSS code.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="mb-2 text-xl font-semibold">3. Use the Styles</h3>
          <p className="text-gray-600">
            All styles and components are designed to be easily integrated.
            Simply copy the code snippets from the respective pages and paste
            them into your project. Make sure to adjust the styles as needed to
            match your site's design.
          </p>
        </section>

        <section>
          <h3 className="mb-2 text-xl font-semibold">Need Help?</h3>
          <p className="text-gray-600">
            If you have any questions or need further assistance, feel free to
            reach out to us:
          </p>
          <a
            href="https://www.linkedin.com/in/mdshahabuddin82/"
            className="text-blue-500 hover:underline"
          >
            Md Shahabuddin
          </a>
        </section>
      </div>
    </main>
  );
};

export default GettingStarted;
