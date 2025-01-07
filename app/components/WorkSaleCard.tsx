


import { workSaleCardType } from '@/lib/type'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WorkSaleCard = ({ workSaleCardProps }: { workSaleCardProps: workSaleCardType }) => {
    return (
        <Link href={workSaleCardProps.link} className={`flex flex-col border border-neutral-700/30 w-full max-h-72 rounded-lg overflow-hidden item-${workSaleCardProps.id}`}  >

            <div className="w-full h-[80%]  ">
                {workSaleCardProps.image && <Image width={200} height={200} alt={workSaleCardProps.subTitle} className='w-full h-full object-cover' src={workSaleCardProps.image} />}
            </div>
            <div className="px-4 py-8 h-[20%] bg-neutral-700/30 w-full flex justify-between items-center ">
                <div className="flex flex-col justify-start items-start">
                    <b> {workSaleCardProps.title} </b>
                    <span className="opacity-50 text-sm">{workSaleCardProps.subTitle}</span>
                </div>
                <span className='text-lg font-bold'>
                    {workSaleCardProps.price}
                </span>

            </div>

        </Link>
    )
}

export default WorkSaleCard
