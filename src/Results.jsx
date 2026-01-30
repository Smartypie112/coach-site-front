import React from "react";

export default function Results() {
  
  const transformations = [
  {
    id: 1,
    name: "Rahul K.",
    image: "https://github.com/Smartypie112/coach-site-front/blob/main/src/assets/ef35dbb61d-78ce55341fc7063dac0f.png?raw=true",
    result: "-18 kg",
    duration: "4 months",
    goal: "Muscle Gain",
    quote:
      "Lost 18kg in 4 months while building muscle. The approach was practical, sustainable, and based on real science."
  },
  {
    id: 2,
    name: "Priya S.",
    image: "https://raw.githubusercontent.com/Smartypie112/coach-site-front/refs/heads/main/src/assets/ef35dbb61d-4ed17c8cef3ac058c177.png",
    result: "-12 kg",
    duration: "3 months",
    goal: "Fat Loss",
    quote:
      "Finally achieved my dream body without giving up my favorite foods. The nutrition plan was flexible and easy to follow."
  },
  {
    id: 3,
    name: "Arjun M.",
    image: "https://raw.githubusercontent.com/Smartypie112/coach-site-front/refs/heads/main/src/assets/ef35dbb61d-d3d1040746dcfc322c75.png",
    result: "+8 kg",
    duration: "5 months",
    goal: "Muscle Building",
    quote:
      "Gained 8kg of pure muscle mass. Training was intense, but the results speak for themselves."
  }
];
  
  return (
    <section className=" pt-6 pb-6 h-68 w-[100vw] flex items-center flex-col bg-zinc-950">
      {/*Heading*/}
      <h1 className="pt-4 text-4xl font-bold">Real People.<span className="text-lime-500"> Real Results.</span>
      </h1>
      <p className="pt-2 text-gray-500 text-xl"> Sustainable transformations that last</p>
      {/*Cards*/}
      <div className="flex gap-12 mt-12 md:mt-0 flex-col md:flex-row md:gap-7">
      {
      transformations.map((item) => (
      <div key={item.id} className="md:my-12 h-96 w-72 bg-zinc-900 rounded-xl flex flex-col items-start justify-center pb-6">
        <img className="w-full h-60 object-fit rounded-t-xl" src={item.image}/>
        <div className="">
          <div className="flex items-center justify-between px-3 py-3">
       <h2 className="font-semibold text-lg ">{item.name}</h2>
       <span className="bg-lime-400/20 text-lime-400 rounded-2xl py-0.5 px-2">{item.result}</span>
          </div>
          <p className="leading-relaxed
          text-gray-400 text-sm px-1 py-2">{item.quote}</p>
          <div className="flex items-center gap-3 pl-3 pt-2 pb-4">
  <div className="flex items-center gap-2 text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1.5A2.5 2.5 0 0 1 22 6.5v13A2.5 2.5 0 0 1 19.5 22h-15A2.5 2.5 0 0 1 2 19.5v-13A2.5 2.5 0 0 1 4.5 4H6V3a1 1 0 0 1 1-1Z" />
    </svg>
    <span className="text-sm whitespace-nowrap">{item.duration}</span>
  </div>

  <div className="flex items-center gap-2 text-gray-400">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M3 10a1 1 0 0 1 1-1h2V7a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0v-2H4a1 1 0 0 1-1-1v-4Zm14-3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0V7ZM9 11h6v2H9v-2Z" />
    </svg>
    <span className="text-sm">{item.goal}</span>
  </div>
</div>
        </div>
      </div>
      ))}
      </div>
      {/*Button*/}
      <button className="mt-6 md:mt-0">View All Testimonials</button>
    </section>
    );
}