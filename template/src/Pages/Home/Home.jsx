import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200 sand">
      {/* Hero Section */}
      <div className="hero min-h-[70vh]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <div className="badge badge-primary badge-outline mb-4">
              v1.0.0 Beta
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Build Faster with React
            </h1>
            <p className="py-6 text-xl text-base-content/80">
              A production-ready template pre-configured with Vite, TailwindCSS,
              DaisyUI, and React Router. Skip the setup and start coding your
              next big idea.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="btn btn-primary btn-lg">Get Started</button>
              <button className="btn btn-outline btn-lg">Documentation</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-base-200 py-10 text-center">
        <p className="text-lg">
          Crafted with ❤️ by{" "}
          <a
            href="https://github.com/AtikHasan16"
            target="_blank"
            className="link link-primary font-bold hover:text-primary-focus transition-colors"
          >
            Hasan MD Atik
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
