import React from "react";

export default function Offers() {
const programs = [
  {
    id: "fat-loss",
    title: "Fat Loss Program",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#84CC16" class="bi bi-fire" viewBox="0 0 16 16" className="w-6 h-6">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg>`,
    description:
      "Lose stubborn fat while preserving muscle mass. Customized nutrition and training for sustainable results.",
    features: [
      "Personalized meal plans",
      "Custom training program",
      "Weekly check-ins",
      "24/7 WhatsApp support"
    ],
    buttonText: "Apply Now",
    highlight: false
  },
  {
    id: "muscle-building",
    title: "Muscle Building",
    icon: `   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#84CC16"
     width="30" height="30"
      className="w-4 h-4"
    >
      <path d="M3 10a1 1 0 0 1 1-1h2V7a1 1 0 0 1 2 0v10a1 1 0 0 1-2 0v-2H4a1 1 0 0 1-1-1v-4Zm14-3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0V7ZM9 11h6v2H9v-2Z" />
    </svg>`,
    badge: "Most Popular",
    description:
      "Build lean muscle mass and strength. Science-based approach to maximize muscle growth naturally.",
    features: [
      "Bulking & cutting phases",
      "Progressive training",
      "Supplement guidance",
      "Priority support"
    ],
    buttonText: "Apply Now",
    highlight: true
  },
  {
    id: "lifestyle-transformation",
    title: "Lifestyle Transformation",
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="#84CC16" xmlns="http://www.w3.org/2000/svg">
  <path d="M12 21s-7.5-4.35-10-8.5C-0.5 8.35 2.4 3 7 3c2.5 0 4 1.5 5 3
           1-1.5 2.5-3 5-3 4.6 0 7.5 5.35 5 9.5C19.5 16.65 12 21 12 21z"/>
</svg>`,
    description:
      "Complete lifestyle overhaul. Build sustainable habits for long-term health and fitness success.",
    features: [
      "Habit coaching",
      "Stress & sleep optimization",
      "Mindset training",
      "Monthly 1-on-1 calls"
    ],
    buttonText: "Apply Now",
    highlight: false
  }
];
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
   <div className="mt-4 mx-10 flex justify-between flex-col md:flex-row  ">     
{programs.map((program)=>(
    <div className="rounded bg-zinc-950 h-80 w-72 md:w-60 p-5 pb-14 md:pb-10 mt-5 md:mt-0">
   {/*Icon*/}
<div
  className="bg-zinc-800 w-10 h-10 roundedx flex justify-center items-center bg-lime-500"
  dangerouslySetInnerHTML={{ __html: program.icon }}
/>
  {/*Heading*/}
  <h2 className="pt-2 font-bold text-lg text-left">{program.title}</h2>
  {/*Paragraph*/}
  <p className="text-xs text-gray-400 leading-4 text-left pt-2">{program.description}</p>
    {/* Pointers */}
    <div className="flex flex-col gap-2 pt-2">
      {program.features.map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#84CC16" class="bi bi-check" viewBox="0 0 16 16">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
</svg>
          {item}
        </div>
      ))}
    </div>
  {/*Button*/}
  <button className="bg-lime-500 text-black mt-2 h-10 text-center p-0 pr-4 pl-4">Apply Now</button>
     </div>
))}
   </div>
    </section>
    );
}
  