"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const GreetingAnimation = () => {
    const titlesRef = useRef<(HTMLHeadingElement | null)[]>([]);
    const parentRef = useRef<HTMLDivElement | null>(null);
    let currentIndex = 0;

    const animateTitles = () => {
        if (!titlesRef.current) return;

        const totalTitles = titlesRef.current.length;

        gsap.to(titlesRef.current[currentIndex], {
            y: '-100%',
            duration: 0.5,
            ease: 'power1.inOut',
            onComplete: () => {
                if (!titlesRef.current || !titlesRef.current[currentIndex]) return;

                titlesRef.current[currentIndex]!.style.display = 'none';
                currentIndex = (currentIndex + 1) % totalTitles;

                if (titlesRef.current && titlesRef.current[currentIndex]) {
                    titlesRef.current[currentIndex]!.style.display = 'block';

                    gsap.fromTo(titlesRef.current[currentIndex], { y: '100%' }, {
                        y: '0%',
                        duration: 0.5,
                        ease: 'power1.inOut',
                        onComplete: () => {
                            setTimeout(animateTitles, 2000);
                        }
                    });
                }
            }
        });
    };

    useEffect(() => {
        if (titlesRef.current) {
            titlesRef.current.forEach((title, index) => {
                if (title) {
                    title.style.display = index === 0 ? 'block' : 'none';
                }
            });
        }

        animateTitles();
    }, []);

    return (
        <div ref={parentRef} className="flex h-14 w-full font-bold my-8 flex-col overflow-hidden justify-center items-center text-5xl text-neutral-600">
            <h2 ref={el => { titlesRef.current[0] = el }} className="title-1">Bonjour</h2>
            <h2 ref={el => { titlesRef.current[1] = el }} className="title-2">こんにちは.</h2>
            <h2 ref={el => { titlesRef.current[2] = el }} className="title-3">Hi</h2>
            <h2 ref={el => { titlesRef.current[3] = el }} className="title-3">नमस्ते.</h2>
        </div>
    );
}

export default GreetingAnimation;
