"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap';

const Page = () => {

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            ".block-animated",
            { y: 50, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.2 }
        );

        return () => {
            tl.kill();
        };
    }, []);


    return (
        <section className="flex gap-y-4 justify-center items-center w-full ">

            <div className="flex flex-col min-h-[70vh] w-full  gap-y-4 justify-center items-center">
                <div className="flex h-12 w-full font-bold my-8 flex-col overflow-hidden justify-center items-center text-5xl text-neutral-600">
                    <h2 className="title-1 ">Contact</h2>
                </div>
                <div className="  w-full flex flex-col   rounded-lg justify-center items-center overflow-hidden">

                    <div className="px-4 py-3 flex gap-x-8 justify-between  items-center w-full ">

                        <div className="flex justify-start gap-x-3 items-center">

                            <button className="px-3 py-2  lg:block  block-animated hidden rounded-lg border border-neutral-700/30 bg-neutral-700/60 ">
                                Have a call

                            </button>
                            <button className="px-3 py-3 rounded-lg lg:hidden block  block-animated  marker: border border-neutral-700/30 bg-neutral-700/60 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                            </button>
                            <button className="px-3 py-2  block-animated   rounded-lg border border-neutral-700/30 bg-neutral-700/20 ">
                                E-mail
                            </button>
                        </div>

                        <div className="flex justify-start block-animated  items-center gap-x-4">

                            <Link href="/">
                                <button className="px-3 py-2.5 rounded-lg border-2 border-neutral-700/30 bg-neutral-700/60 hover:bg-transparent  ">
                                    <svg
                                        width="18px"
                                        height="18px"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5zM7 21H4V10h3v11zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5zm4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14v7zM5.868 2.002A2.73 2.73 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729 2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455zM5.833 6.46a1.75 1.75 0 0 1-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46z" />
                                    </svg>

                                </button>
                            </Link>
                            <Link href="/">
                                <button className="px-3 py-3 rounded-lg border-2 border-neutral-700/30 bg-neutral-700/60 hover:bg-transparent  ">
                                    <svg
                                        width="14px"
                                        height="14px"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="m17.687 3.063-4.996 5.711-4.32-5.711H2.112l7.477 9.776-7.086 8.098h3.034l5.469-6.248 4.78 6.248h6.101l-7.793-10.303 6.625-7.572h-3.033zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34h-1.68z" />
                                    </svg>


                                </button>
                            </Link>
                        </div>


                    </div>






                </div>
                <div className='flex flex-col w-full justify-start items-start gap-y-2'>

                    <form className="flex flex-col w-full border border-neutral-700/30 /20 rounded-lg  gap-y-3 p-4">

                        <input className="text px-3 block-animated  py-2 rounded-lg border border-neutral-700/30 /20 bg-neutral-700/20 " type="text" placeholder="name" />
                        <input className="text px-3 block-animated  py-2 rounded-lg border border-neutral-700/30 /20 bg-neutral-700/20 " type="email" placeholder="email" />
                        <textarea placeholder="message..." className="text  block-animated px-3 py-2 rounded-lg border border-neutral-700/30 h-24 bg-neutral-700/20 " >
                        </textarea>
                        <input className="text px-3 py-2 rounded-lg border block-animated hover:bg-neutral-700 transition-colors duration-300 border-neutral-700/30 /20 cursor-pointer bg-neutral-900 " type="submit" value="send Message" />

                    </form>

                </div>

                <div className='flex flex-col my-4 border rounded-lg p-3  border-neutral-700/30 /20 w-full justify-start items-start gap-y-2'>
                    <h4 className="text-xl block-animated"> <b>Ready to Revolutionize Design?</b></h4>
                    <p className="text-balance text-neutral-500 block-animated">
                        Calling all UI/UX enthusiasts and freelancers! Elevate your skills and career with our design-savvy newsletter.
                    </p>
                    <div className="flex gap-3 w-full lg:flex-row flex-col  pt-3 block-animated">
                        <input type="email" placeholder="Your-email" className="bg-neutral-500/20 text-sm px-3 rounded-lg border py-2 w-full lg:w-8/12 border-neutral-700/30 " />
                        <input type="submit" value="Get started" className="bg-neutral-500/20 border lg:py-0 py-2 w-full lg:w-4/12 rounded-lg hover:bg-neutral-700 cursor-pointer border-neutral-700/30 /20 " />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page

