"use client"
import { workSaleCardType } from '@/lib/type'
import React, { useEffect } from 'react'
import WorkSaleCard from '../components/WorkSaleCard'
import image2 from "@/public/1.png"
import image3 from "@/public/8.png"
import image4 from "@/public/9.png"
import image5 from "@/public/5.png"
import gsap from 'gsap'
const Page = () => {

    const workSaleTab: workSaleCardType[] = [
        {
            price: "$50",
            subTitle: "Framer template",
            title: "Obsidian",
            image: image2,
            link: "https://special-sale-product-mkgr.vercel.app/",
            id: 1
        },
        {
            price: "$75",
            subTitle: "Website Template",
            title: "Eclipse",

            image: image3,
            link: "https://dashboard-port-5zlb.vercel.app/",
            id: 2
        },
        {
            price: "$100",
            subTitle: "Business Card Design",
            title: "Luna",
            image: image4,
            link: "https://saas-template-blond.vercel.app/",
            id: 3
        },
        {
            price: "$30",
            subTitle: "Social Media Kit",
            title: "Nova",
            image: image5,
            link: "https://fashion-website-indol-nine.vercel.app/",
            id: 4
        }

    ];



    useEffect(() => {
        const tl = gsap.timeline()
        workSaleTab.forEach((work) => {
            tl.fromTo(
                `.item-${work?.id}`,
                { y: -50, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
            );
        });


        return () => { tl.kill() };
    }, [workSaleTab]);




    return (
        <section className="flex gap-y-4 justify-center items-center w-full ">

            <div className="flex flex-col min-h-[70vh] w-full  gap-y-4 justify-center items-center">

                <div className="flex h-12 w-full  font-bold my-8 flex-col overflow-hidden justify-center items-center text-3xl lg:text-5xl text-neutral-600">
                    <h2 className="title-1">Digital-goods</h2>
                </div>

                <div className="grid  grid-cols-1 w-full gap-4   md:grid-cols-2 ">

                    {workSaleTab.map((work: workSaleCardType, index: number) => (
                        <WorkSaleCard workSaleCardProps={work} key={`ws+${index}`} />
                    ))

                    }

                </div>


            </div>

        </section>
    )
}

export default Page
