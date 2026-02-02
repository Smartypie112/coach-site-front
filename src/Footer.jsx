import react from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-lime-500 text-zinc-900 font-bold flex items-center justify-center">
                DS
              </div>
              <h3 className="text-white font-semibold text-lg">
                Digvijay Singh
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              Transforming lives through sustainable fitness and nutrition coaching.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">Fat Loss</li>
              <li className="hover:text-white transition">Muscle Building</li>
              <li className="hover:text-white transition">Lifestyle Transformation</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition">About</li>
              <li className="hover:text-white transition">Testimonials</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-3 justify-center">
              {/* ICON SLOT */}
              <div className="w-10 h-10 rounded-md bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition">
                {/* SVG */}
              </div>
              <div className="w-10 h-10 rounded-md bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition">
                {/* SVG */}
              </div>
              <div className="w-10 h-10 rounded-md bg-zinc-900 flex items-center justify-center hover:bg-zinc-800 transition">
                {/* SVG */}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2024 Digvijay Singh. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}