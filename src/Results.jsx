import { React,useEffect} from "react";

export default function Results() {
  return (
    <section className=" pt-6 pb-6  bg-zinc-900 h-68 w-[100vw] flex items-center flex-col bg-zinc-950">
      {/*Heading*/}
      <h1 className="pt-4 text-4xl font-bold">Real People.<span className="text-lime-500"> Real Results.</span>
      </h1>
      <p className="pt-2 text-gray-500 text-xl"> Sustainable transformations that last</p>
      {/*Cards*/}
      <div className="my-5 h-80 w-6 bg-zinc-800 rounded">
        
      </div>
      {/*Button*/}
      <button>View All Testimonials</button>
    </section>
    );
}