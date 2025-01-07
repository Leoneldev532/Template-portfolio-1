"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { tl } from '@/lib/util'

const links = [
  {
    href: '/',
    svg: (
      <svg viewBox="0 0 16 16" className="size-6 hover:fill-white transition-colors duration-300 ease " id="svg10701072368">
        <g id="ss10701072368_1">
          <path d="M 0 16 L 0 0 L 16 0 L 16 16 Z" fill="transparent" />
          <path
            d="M 8 14.667 C 11.682 14.667 14.667 11.682 14.667 8 C 14.667 4.318 11.682 1.333 8 1.333 C 4.318 1.333 1.333 4.318 1.333 8 C 1.333 11.682 4.318 14.667 8 14.667 Z"
            fill="transparent"
            strokeWidth="1.2"
            stroke="var(--token-b6c945ba-c4a5-44f0-a280-de9396dc3a76, rgb(152, 162, 179))"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          />
          <path
            d="M 9.815 5.511 C 10.141 5.402 10.303 5.348 10.412 5.386 C 10.506 5.42 10.58 5.494 10.614 5.588 C 10.652 5.697 10.598 5.86 10.489 6.185 L 9.498 9.16 C 9.467 9.253 9.451 9.299 9.425 9.338 C 9.402 9.372 9.372 9.402 9.338 9.425 C 9.3 9.451 9.253 9.467 9.161 9.498 L 6.185 10.489 C 5.86 10.598 5.697 10.652 5.589 10.614 C 5.494 10.58 5.42 10.506 5.387 10.412 C 5.348 10.303 5.402 10.14 5.511 9.815 L 6.503 6.84 C 6.533 6.747 6.549 6.7 6.575 6.662 C 6.599 6.628 6.628 6.598 6.662 6.575 C 6.701 6.549 6.747 6.533 6.84 6.502 Z"
            fill="transparent"
            strokeWidth="1.2"
            stroke="var(--token-b6c945ba-c4a5-44f0-a280-de9396dc3a76, rgb(152, 162, 179))"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray=""
          />
        </g>
      </svg>
    )
  },
  {
    href: '/about',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(152, 162, 179)" className="size-6 hover:stroke-white transition-colors duration-300 ease ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    )
  },
  {
    href: '/portfolio',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(152, 162, 179)" className="size-6 hover:stroke-white transition-colors duration-300 ease ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
      </svg>
    )
  },
  {
    href: '/contact',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(152, 162, 179)" className="size-6 hover:stroke-white transition-colors duration-300 ease ">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    )
  }, {

    href: '/digital-goods',
    svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="rgb(152, 162, 179)" className="size-6 hover:stroke-white transition-colors duration-300 ease ">>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>

  }
];

const Header = () => {
  useEffect(() => {
    tl.fromTo(
      ".header-blog",
      {
        yPercent: -150,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power4.inOut"
      }, 0
    ).fromTo(
      ".link",
      {
        yPercent: -150,
        autoAlpha: 0,
      },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.7,
        ease: "power3",
        stagger: 0.4
      }, 0
    );

    return () => {
      tl.kill();
    }
  }, []);

  const pathname = usePathname();


  return (
    <div className="w-full flex justify-center mt-4 items-center">
      <div className='border header-blog border-neutral-700/30 overflow-hidden gap-x-4 flex justify-center items-center rounded-lg px-2 py-2'>
        {links.map((link, index) => (
          <Link key={index} className="link h-full flex flex-col justify-between gap-y-2" href={link.href}>
            <div className="border border-neutral-700/30 rounded-lg p-2">
              {link.svg}
            </div>
            {pathname === link.href && <div className="h-1 bg-neutral-800 w-10 rounded-tl-lg rounded-tr-lg absolute top-[100%] mt-1 mr-2"></div>}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header;
