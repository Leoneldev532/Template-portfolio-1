
import { PortfolioCardType } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PortfolioCard = ({ PortfolioCardProps }: { PortfolioCardProps: PortfolioCardType }) => {
    return (
        <div className='relative w-full h-56 group portfolio-card  p-4 border rounded-lg overflow-hidden border-neutral-700/30 '>
            {PortfolioCardProps.image &&
                <Image src={PortfolioCardProps.image} height={200} width={200} alt={""} className='h-full absolute left-0 top-0  rounded-lg z-0 object-cover w-full' />}

            <div className="absolute  gradient-black  z-10 flex justify-start p-2 left-0 top-0 w-full h-full   items-end">
                <h5 className='text-xl text-neutral-500'> {PortfolioCardProps.title}  </h5>
            </div>
            <div className="absolute z-20 flex justify-end p-10 left-0 top-0 w-full h-full   items-end">

                <Link href={PortfolioCardProps.link} className="lg:translate-y-36 group  group-hover:translate-y-4 transition-all ease duration-300">

                    <button type="button" className="size-12 group-hover:-rotate-45 transition-all ease duration-300  flex justify-center items-center border border-neutral-700/30 bg-neutral-900 rounded-full " >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>


                    </button>

                </Link>

            </div>



        </div>
    )
}

export default PortfolioCard
