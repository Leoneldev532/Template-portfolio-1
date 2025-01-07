
"use client"
import { WorksAccordionType } from "@/lib/type";
import Image from "next/image";
import WorksAccordion from "./components/WorksAccordion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import GreetingAnimation from "./components/GreetingAnimation";

import image4 from "@/public/4.jpg"
export default function Home() {


  const workRuleTab: WorksAccordionType[] = [
    {
      title: "Software Developer",
      description: "Creates software and websites, identifying user needs and programming solutions.",
      numerotation: "A"
    },
    {
      title: "Web Developer",
      description: "Builds and maintains web applications, ensuring functionality and quality.",
      numerotation: "B"
    },
    {
      title: "Analyst Developer",
      description: "Combines analysis and development to create software solutions.",
      numerotation: "C"
    },
  ]


  useEffect(() => {
    const rt = gsap.timeline()
    rt.fromTo(
      ".element",
      {
        yPercent: -150,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3",
        stagger: 0.4,
        delay: 0.2
      }, 0
    );

    return () => {
      rt.kill()
    }
  }, []);




  return (

    <div className="flex gap-y-4 justify-center items-center">

      <div className="flex flex-col min-h-[70vh] max-w-md gap-y-4  justify-center items-center">

        <GreetingAnimation />

        <div className="border element border-neutral-700/30 /30  w-full flex flex-col   rounded-lg justify-center items-center overflow-hidden">

          <div className="border border-neutral-700/30  scroll-item  w-full flex flex-col   rounded-lg justify-center items-center overflow-hidden">

            <div className="px-4 py-3 flex gap-x-8  justify-between  items-center w-full ">

              <div className="flex justify-start  gap-x-3 items-center">
                <div className="size-14 overflow-hidden rounded-full bg-neutral-700">
                  <Image alt="profile" src={image4} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col justify-start items-center">
                  <b> Leonel Yimga </b>
                  <span className="opacity-75"> Front-end Dev  </span>
                </div>
              </div>

              <div className="flex justify-start  items-center gap-x-4">
                <button className="px-3 py-3 rounded-lg border border-neutral-700/30 bg-neutral-700/60 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>

                </button>



                <button className=" gap-x-2 justify-center border lg:flex hidden  border-neutral-700/30 rounded-lg items-center px-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                  </svg>

                  <span>E-mail</span>

                </button>
              </div>

            </div>



          </div>

          <div className="flex flex-col px-5 text-lg py-4 text-balance bg-neutral-700/20 w-full">
            <span className="text-neutral-400"> I'm a front-end developer with a strong focus on creating engaging brand experiences and intuitive
            user interfaces  </span>
          </div>

        </div>

        {workRuleTab?.map((work: WorksAccordionType, index: number) => (

          <WorksAccordion key={`wA + ${index}`} WorksAccordionProps={work} />

        ))}

      </div>

    </div>

  );
}
