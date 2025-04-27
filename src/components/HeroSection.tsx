import React from "react";

const Hero = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center px-6 md:px-20 py-32 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHw%3D&w=1080&h=720&ixlib=rb-1.2.1')`, // Unsplash CDN image URL
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      <div className="relative z-10 max-w-7xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
          Your Gateway to the World 🌎
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
          Get the latest visa requirements, expert advice, and application support for every country — all in one place. Start your journey with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        </div>
      </div>
    </section>
  );
};

export default Hero;
