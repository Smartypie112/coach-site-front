import react from 'react';

export default function CTA() {
  return (
    <section className="bg-lime-600 py-20 px-4 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black">
        Ready To Transform Your Life?
      </h2>

      {/* Subheading */}
      <p className="mt-4 max-w-2xl mx-auto text-zinc-800">
        Join 5000+ clients who’ve achieved their dream physique with
        sustainable, science-backed coaching.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-8 py-3 rounded-lg bg-black text-white font-semibold hover:bg-zinc-800 transition">
          Start Your Transformation
        </button>

        <button className="px-8 py-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-zinc-100 transition">
          Book Free Consultation
        </button>
      </div>

      {/* Trust badges */}
      <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6 text-sm text-zinc-800">
        <div className="flex items-center gap-2">
          {/* icon slot */}
          <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
          <span>No Credit Card Required</span>
        </div>

        <div className="flex items-center gap-2">
          {/* icon slot */}
          <span className="w-2 h-2 rounded-full bg-zinc-900"></span>
          <span>100% Money-Back Guarantee</span>
        </div>
      </div>
    </section>
  );
}