import React from "react";

export default function Links() {
  return (
    <section className="bg-zinc-900 py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Follow The <span className="text-lime-500">Journey</span>
        </h2>
        <p className="text-zinc-400 mt-2">
          Daily tips, transformations, and motivation
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Instagram */}
        <a
          href="#"
          className="group flex items-center gap-4 p-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition"
        >
          {/* ICON SLOT */}
          <div className="w-14 h-14 rounded-lg bg-zinc-800 flex items-center justify-center">
            {/* YOUR SVG HERE */}
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">
              @digvijaylifestyle
            </h3>
            <p className="text-zinc-400 text-sm">
              298K+ followers on Instagram
            </p>
            <span className="text-lime-500 text-sm font-medium group-hover:underline">
              Follow on Instagram →
            </span>
          </div>
        </a>

        {/* YouTube */}
        <a
          href="#"
          className="group flex items-center gap-4 p-6 rounded-xl bg-zinc-950 hover:bg-zinc-800 transition"
        >
          {/* ICON SLOT */}
          <div className="w-14 h-14 rounded-lg bg-zinc-800 flex items-center justify-center">
            {/* YOUR SVG HERE */}
          </div>

          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">
              Digvijay Singh
            </h3>
            <p className="text-zinc-400 text-sm">
              Expert fitness & nutrition content
            </p>
            <span className="text-lime-500 text-sm font-medium group-hover:underline">
              Subscribe on YouTube →
            </span>
          </div>
        </a>

      </div>
    </section>
  );
}