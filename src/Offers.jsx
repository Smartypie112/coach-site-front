import React from "react";

export default function Offers() {
  return (
    <section className="pt-6 pb-6  bg-zinc-900 h-68 w-[100vw] mt-0">
    {/*heading*/}
   <div className="pt-10">     
    <h2 className="text-3xl font-extrabold">Choose Your 
      <span className="text-lime-500"> Transformation Path.</span>
      </h2>
     <p className="text-gray-500 mt-2">
      Personalised programs maded for your specific goal.
     </p>
  </div>
    {/*Cards*/}
   <div className="mt-4 mx-10">     
    <div className="rounded bg-zinc-950 h-80 w-60">
   {/*Icon*/}
     <div className=""></div>
  {/*Heading*/}
  <h2>Fat Loss Program</h2>
  {/*Paragraph*/}
  <p>Burn fat the right way with a structured program that focuses on smart workouts, balanced nutrition, and recovery.
No shortcuts—just consistent training, clean habits, and progress you can feel.
Start today, stay disciplined, and let results follow. 💪</p>
 {/*Pointers*/}
  <div>
  
  </div>
  {/*Button*/}
  <button className="bg-lime-500 text-black">Apply Now</button>
     </div>
   </div>
    </section>
    );
}
  