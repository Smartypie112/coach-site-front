import { React,useEffect} from "react";

export default function FourBox() {
  const fourBoxData = [
  {
    id: 1,
    title: "Forbes",
    subtitle: "Featured Coach",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" class="w-14 h-14 text-lime-500">
        <path d="M4 4h16v2H4V4zm0 4h16v12H4V8zm2 2v2h12v-2H6zm0 4v2h8v-2H6z"/>
      </svg>
    `,
  },
  {
    id: 2,
    title: "298k+",
    subtitle: "Followers",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" class="w-14 h-14 text-lime-500">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a1.12 1.12 0 110 2.25 1.12 1.12 0 010-2.25z"/>
      </svg>
    `,
  },
  {
    id: 3,
    title: "Certified",
    subtitle: "Nutrition Expert",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"
        fill="currentColor" class="w-14 h-14 text-lime-500">
        <polygon points="32,2 36,16 32,14 28,16"/>
        <polygon points="32,62 36,48 32,50 28,48"/>
        <polygon points="2,32 16,36 14,32 16,28"/>
        <polygon points="62,32 48,36 50,32 48,28"/>
        <polygon points="10,10 22,18 20,20 18,22"/>
        <polygon points="54,10 46,22 44,20 42,18"/>
        <polygon points="10,54 18,42 20,44 22,46"/>
        <polygon points="54,54 42,46 44,44 46,42"/>
        <circle cx="32" cy="32" r="14"/>
      </svg>
    `,
  },
  {
    id: 4,
    title: "4.9/5",
    subtitle: "Client Rating",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor" class="w-14 h-14 text-lime-500">
        <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7-5.4-4.7 7.1-.6L12 2z"/>
      </svg>
    `,
  },
];
  return (
    <section className=" pt-6 pb-6  bg-zinc-900 h-68 w-[100vw] flex items-center flex-col bg-gradient-to-b from-zinc-950 to-zinc-900">
      {/*Heading*/}
      <div>
        <h2 className="font-serif text-3xl">Trusted Authority in Health & Wellness</h2>
        <p className=" text-gray-500 md:text-gray-400 text-xs md:text-base mt-1 md:mt-0">Recognised by leading platforms and trusted by thousands.</p>
      </div>
      {/*Boxes*/}
      <div className=" pt-6 mt-0 md:mt-4 flex flex-col md:flex-row gap-8 mx-8">
        { fourBoxData.map(item => (
        <div key={item.id}
        className="bg-zinc-950 flex  flex-col items-center justify-center p-4 w-72 md:w-52
         rounded-2xl border border-zinc-900">
   <div dangerouslySetInnerHTML={{__html:item.icon}}/>
<h2 className="text-white whitespace-nowrap">{item.title}</h2>
<p className="text-gray-400">{item.subtitle}</p>
        </div>
       ) )}
      </div>
    </section>
      );
}