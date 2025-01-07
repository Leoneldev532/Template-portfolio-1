
"use client"
import React, { useEffect } from 'react'
import GreetingAnimation from '../components/GreetingAnimation'
import Image from 'next/image'

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import Link from 'next/link'
import image5 from "@/public/5.png"
import image3 from "@/public/3.png"
import image4 from "@/public/4.jpg"
const page = () => {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const items = document.querySelectorAll('.scroll-item');
        const rt = gsap.timeline()

        items.forEach((item) => {
            rt.fromTo(
                item,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    transition: "all ease 0.5s",
                    duration: 0.6,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                        onEnter: () => {
                            gsap.to(item, { opacity: 1, y: 0 });
                        },
                        onLeaveBack: () => {
                            gsap.to(item, { opacity: 0, y: 50 });
                        },
                    },
                }
            );
        });
        return () => { rt.kill() };
    }, []);



    return (
        <section className="flex gap-y-4 justify-center items-center w-full ">

            <div className="flex flex-col min-h-[70vh] w-full  gap-y-4 justify-center items-center">
                <GreetingAnimation />
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

                <div className='flex flex-col scroll-item  justify-start items-start gap-y-2'>
                    <h4 className="font-bold text-2xl"> About </h4>
                    <p>

                        Hello, I&apos;m Leonel, a seasoned developer with over a decade of experience in creating exceptional software solutions. My passion for development has enabled me to design robust and high-performing applications for a variety of platforms.
                    </p>
                    <p className='py-4'>
                        Throughout my career, I&apos; been driven by a passion for combining efficiency and innovation to develop software solutions that not only perform exceptionally but also provide seamless and intuitive user experiences. </p>
                </div>


                <div className='flex flex-col  scroll-item justify-start items-start gap-y-4 w-full'>
                    <h4 className="font-bold text-lg"> Experience </h4>
                    <div className="flex  lg:flex-row flex-col gap-4 scroll-item justify-between w-full items-start">

                        <span className="opacity-70 w-full lg:w-1/3"> 2020 — 2023 </span>
                        <div className="flex flex-col gap-y-2  w-full  justify-start items-start">
                            <div className="flex flex-col gap-y-2  justify-start items-start">

                                <b> Front developper  </b>
                                <span className="opacity-50"> Yaounde - cameroun   </span>
                                <p className="text-balance text-sm opacity-75">
                                    Successfully developed and deployed a mobile application that significantly boosted user engagement.
                                </p>

                            </div>

                        </div>
                    </div>
                    <div className="flex  lg:flex-row flex-col gap-4 scroll-item justify-between w-full items-start">

                        <span className="opacity-70 w-full lg:w-1/3"> 2023 — Now </span>
                        <div className="flex flex-col gap-y-2  w-full  justify-start items-start">

                            <b> Front-end developper </b>
                            <span className="opacity-50">Yaounde - cameroun  </span>
                            <p className="text-balance text-sm opacity-75">
                                Successfully developed and deployed a mobile application that significantly boosted user engagement.
                            </p>

                        </div>

                    </div>
                </div>



                <div className='flex flex-col justify-start items-start gap-y-4 w-full'>
                    <h4 className="font-bold text-lg scroll-item "> Projects </h4>

                    <Link href="https://fashion-website-indol-nine.vercel.app"
                        className='flex scroll-item gap-6 justify-start md:flex-row flex-col hover:bg-neutral-800/70 p-4 rounded-lg cursor-pointer w-full items-start'>
                        <div className="w-full md:w-1/3 h-24 overflow-hidden rounded-lg">
                            <Image src={image5} alt="project" className={"object-cover h-full w-full"} />
                        </div>
                        <div className='w-full flex flex-col gap-y-3 justify-start items-center'>
                        <div className="w-full flex justify-between items-start">
                            <b> Build smata </b>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                        <p className='text-sm opacity-75'>
                            Working on a gamification platform empowering over two billion people to unlock their full learning potential.
                        </p>


                        </div>
                    </Link>


                    <Link href="https://african-market-art.vercel.app"
                        className='flex scroll-item gap-6 justify-start md:flex-row flex-col hover:bg-neutral-800/70 p-4 rounded-lg cursor-pointer w-full items-start'>
                        <div className="w-full md:w-1/3 h-24 overflow-hidden rounded-lg">
                            <Image src={image3} alt="project" className={"object-cover h-full w-full"} />
                        </div>
                        <div className='w-full flex flex-col gap-y-3 justify-start items-center'>
                        <div className="w-full flex justify-between items-start">
                            <b> Build smata </b>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </div>
                        <p className='text-sm opacity-75'>
                            Working on a gamification platform empowering over two billion people to unlock their full learning potential.
                        </p>

                        </div>
                    </Link>
                    <div>

                    </div>



                </div>


                <div className='flex flex-col scroll-item justify-start items-start gap-y-4 w-full'>

                    <h4 className="font-bold text-lg scroll-item"> Side Project </h4>

                    <div className="flex  lg:flex-row flex-col gap-4 scroll-item justify-between w-full items-start">

                        <span className="opacity-70 w-full lg:w-1/3"> 2023 — Now </span>
                        <div className="flex flex-col gap-y-2  w-full  justify-start items-start">

                            <b> Senior UI Designer at Bolet </b>
                            <span className="opacity-50"> Los Angeles, Remote  </span>
                            <p className="text-balance text-sm opacity-75">
                                Successfully designed and launched a mobile application that increased user engagement
                            </p>

                        </div>

                    </div>

                    <div className="flex  lg:flex-row flex-col gap-4 scroll-item justify-between w-full items-start">

                        <span className="opacity-70 w-full lg:w-1/3"> 2023 — Now </span>
                        <div className="flex flex-col gap-y-2  w-full  justify-start items-start">

                            <b> Senior UI Designer at Bolet </b>
                            <span className="opacity-50"> Los Angeles, Remote  </span>
                            <p className="text-balance text-sm opacity-75">
                                Successfully designed and launched a mobile application that increased user engagement
                            </p>

                        </div>

                    </div>

                    <div>

                    </div>



                </div>



            </div>

        </section>
    )
}

export default page
