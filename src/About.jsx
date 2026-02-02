import React from "react";

export default function About() {
  return(
    <section className="pt-6 pb-6  bg-zinc-950 h-68 w-[100vw] mt-0">
    <div className="flex flex-col md:flex-row py-7 ml-5 h-[70%]">
     {/*Image*/}
     <img src="https://raw.githubusercontent.com/Smartypie112/coach-site-front/refs/heads/main/src/assets/7aba11d968-9da72746ef8fc472c372.png"
       className="w-[100%] mb-8 md:mb-0 md:w-[50%]" />
     <div className="flex flex-col justify-start md:max-w-[60%]">
            <span className=" flex items-center mb-6 px-4 py-1 rounded-full bg-lime-500/20 text-lime-400 text-sm w-44">About Coach Digvijay</span>
        <h2 className="text-left text-4xl font-bold">Build <span className="text-lime-500">Sustainable</span><br/> Transformation</h2>
     <div className="bg-zinc-950 text-zinc-300 pr-8 pb-8 pt-8 max-w-3xl">
  {/* Description text */}
  <p className="mb-6 leading-relaxed text-zinc-400 text-left">
    With over 8 years of experience in health and fitness, I've helped
    thousands achieve their dream physique through evidence-based
    nutrition and training programs.
  </p>

  <p className="mb-6 leading-relaxed text-zinc-400 text-left">
    My philosophy is simple: no quick fixes, no extreme diets, no
    unrealistic promises. Just sustainable, science-backed strategies
    that work for real people with real lives.
  </p>

  <p className="mb-10 leading-relaxed text-zinc-400 text-left">
    Featured in <span className="text-white font-medium">Forbes</span> and trusted by{" "}
    <span className="text-white font-medium">298K+</span> followers on Instagram,
    I'm committed to helping you build a body and lifestyle you're proud of.
  </p>

  {/* Stats */}
  <div className="flex justify-between gap-2">
    <div>
      <h3 className="text-lime-500 text-3xl font-bold">8+</h3>
      <p className="text-sm text-zinc-400 mt-1">Years Experience</p>
    </div>

    <div>
      <h3 className="text-lime-500 text-3xl font-bold">5000+</h3>
      <p className="text-sm text-zinc-400 mt-1">Clients Coached</p>
    </div>

    <div>
      <h3 className="text-lime-500 text-3xl font-bold">15+</h3>
      <p className="text-sm text-zinc-400 mt-1">Certifications</p>
    </div>
  </div>
</div>
   </div>
    </div>
   </section>
    );
}
  