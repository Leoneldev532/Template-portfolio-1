"use client"
import { WorksAccordionType } from '@/lib/type'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const WorksAccordion = ({ WorksAccordionProps }: { WorksAccordionProps: WorksAccordionType }) => {
    const accordionRef = useRef<HTMLDivElement>(null)
    const descriptionRef = useRef<HTMLDivElement>(null)
    const arrowRef = useRef<HTMLButtonElement>(null)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const tl = gsap.timeline({})

    const handleOpenAnimation = () => {
        tl.to(accordionRef.current, {
            maxHeight: "200px",
            ease: "expo",
            duration: 0.5,
        }, 0).to(descriptionRef.current, {
            opacity: 0.7,
            duration: 0.2,
        }, 0.1).to(arrowRef.current, {
            transform: "rotate(30deg)"
        }, 0)
    }

    const handleCloseAnimation = () => {
        tl.to(accordionRef.current, {
            maxHeight: "50px",
            duration: 0.5,
            ease: "expo",
        }, 0).to(descriptionRef.current, {
            opacity: 0,
            duration: 0.2,
        }, 0.1).to(arrowRef.current, {
            transform: "rotate(0deg)"
        }, 0)
    }

    const toggleAction = () => {
        if (!accordionRef.current) return;
        if (!isOpen) {
            handleOpenAnimation()
            setIsOpen(true)
        } else {
            handleCloseAnimation()
            setIsOpen(false)
        }
    }

    return (
        <div
            onClick={toggleAction}
            ref={accordionRef}
            className="border w-full accordion cursor-pointer rounded-lg max-h-[50px]  element   overflow-hidden py-2 border-neutral-700/30 flex flex-col gap-x-4 justify-start items-center"
        >
            <div className="flex gap-x-4 w-full justify-between items-center px-4">
                <div className='flex justify-start items-center gap-x-3'>
                    <span className="uppercase text-xl text-neutral-700/60">{WorksAccordionProps.numerotation}</span>
                    <span>{WorksAccordionProps.title}</span>
                </div>
                <button ref={arrowRef} className="arrow-right">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 opacity-30">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
            <div ref={descriptionRef} className="px-4 py-3 text-balance opacity-50 description">
                <span>{WorksAccordionProps.description}</span>
            </div>
        </div>
    )
}

export default WorksAccordion
