import React from "react";

export default function Top() {
  return (
    <section className="relative w-full bg-black text-white pb-10 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Fitness background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* CONTENT WRAPPER (FULL WIDTH) */}
      <div className="relative z-10 w-full">

        {/* Navbar */}
        <nav className="flex items-center justify-between w-full px-6 md:px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center font-bold text-black">
              DS
            </div>
            <div>
              <p className="font-semibold">Digvijay Singh</p>
              <p className="text-sm text-gray-400">@digvijaylifestyle</p>
            </div>
          </div>

          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Programs</li>
            <li className="hover:text-white cursor-pointer">Results</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>

          <button className="bg-lime-500 text-black px-5 py-2 rounded-full font-medium hover:bg-lime-400 transition">
            Apply Now
          </button>
        </nav>

        {/* Hero */}
        <div className="w-full text-left mt-24 px-6 md:px-12">
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-lime-500/20 text-lime-400 text-sm">
            Forbes Featured Coach
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl">
            Transform Your Body.
            <br />
            <span className="text-lime-500">Sustain The Results.</span>
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl">
            Science-backed nutrition and training programs designed for real
            people. No quick fixes. Just sustainable transformation trusted by
            298K+ followers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-lime-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-lime-400 transition">
              Start Your Transformation
            </button>
            <button className="bg-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition">
              View Results
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            <div>
              <p className="text-2xl font-bold text-lime-500">298K+</p>
              <p className="text-sm text-gray-400">Instagram Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-lime-500">5000+</p>
              <p className="text-sm text-gray-400">Transformations</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-lime-500">98%</p>
              <p className="text-sm text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}