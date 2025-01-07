"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'



const GreetingAnimation = () => {

    const titlesRef = useRef<(HTMLHeadingElement | null)[]>([]);
    const parentRef = useRef<HTMLDivElement | null>(null);
    let currentIndex = 0;


    const animateTitles = () => {
        if (!titlesRef.current) return null

        const totalTitles = titlesRef.current.length;
        if (!titlesRef.current[currentIndex]) return;
        gsap.to(titlesRef.current[currentIndex], {
            y: '-100%',
            duration: 0.5,
            ease: 'power1.inOut',
            onComplete: () => {
                if (!titlesRef.current || !titlesRef.current[currentIndex]) return;

                titlesRef.current[currentIndex || 0].style.display = 'none';

                currentIndex = (currentIndex + 1) % totalTitles;

                titlesRef.current[currentIndex || 0].style.display = 'block';

                gsap.fromTo(titlesRef.current[currentIndex], { y: '100%' }, {
                    y: '0%',
                    duration: 0.5,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        setTimeout(animateTitles, 2000);
                    }
                });
            }
        });
    };

    useEffect(() => {
        titlesRef.current.forEach((title: HTMLHeadingElement | null, index: number) => {
            if (!title) return;
            title.style.display = index === 0 ? 'block' : 'none';
        });

        animateTitles();
    }, []);




    return (
        <div ref={parentRef} className="flex h-14 w-full font-bold my-8 flex-col overflow-hidden justify-center items-center text-5xl text-neutral-600">
            <h2 ref={el => { titlesRef.current[0] = el; }} className="title-1">Bonjour</h2>
            <h2 ref={el => { titlesRef.current[1] = el; }} className="title-2">Hello</h2>
            <h2 ref={el => { titlesRef.current[2] = el; }} className="title-3">Hi</h2>
        </div>
    )
}

export default GreetingAnimation
