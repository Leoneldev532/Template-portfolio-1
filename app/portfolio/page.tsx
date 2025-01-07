"use client"
import React, { useEffect } from 'react'
import image1 from "@/public/1.jpg"
import { PortfolioCardType } from '@/lib/type'
import PortfolioCard from '../components/portfolioCard'
import gsap from 'gsap'

import image2 from "@/public/1.png"
import image3 from "@/public/8.png"
import image4 from "@/public/9.png"
import image5 from "@/public/5.png"
const Page = () => {

    const PortfolioDataTab: PortfolioCardType[] = [
        {
            link: "/",
            image: image1,
            title: "Website of American Bank"
        },
        {
            link: "https://special-sale-product-mkgr.vercel.app/",
            image: image2,
            title: "E-commerce Platform for Fashion Retail"
        },
        {
            link: "https://dashboard-port-5zlb.vercel.app/",
            image: image3,
            title: "Personal Portfolio Website"
        },
        {
            link: "https://saas-template-blond.vercel.app/",
            image: image4,
            title: "Blog for Travel Enthusiasts"
        },
        {
            link: "https://fashion-website-indol-nine.vercel.app/",
            image: image5,
            title: "Corporate Website for Tech Startup"
        },

    ]


    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".portfolio-card ",
            { y: 0, autoAlpha: 0, },
            { y: -30, autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.2 }
        );

        return () => { tl.kill() };
    }, []);

    return (
        <section className="flex gap-y-4 justify-center items-center w-full ">

            <div className="flex flex-col min-h-[70vh] w-full gap-y-4 justify-center items-center">
                <div className="flex h-12 w-full font-bold my-8 flex-col overflow-hidden justify-center items-center text-5xl text-neutral-600">
                    <h2 className="title-1">Portfolio</h2>
                </div>

                <div className="  w-full flex flex-col  gap-y-4  rounded-lg justify-center items-center overflow-hidden">

                    {PortfolioDataTab.map((portfolioData: PortfolioCardType, index: number) => (
                        <PortfolioCard PortfolioCardProps={portfolioData} key={`pfl ${index}`} />
                    ))

                    }


                </div>

            </div>
        </section>
    )
}

export default Page
