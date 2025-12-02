'use client'

import React from 'react'
import { CareerDetails } from '@/lib/utils'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const Jobs = () => {
    const contents = CareerDetails.jobs
    return (
        <section
            id='jobs'
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0'>
            <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold'>
                Openings
            </span>
            <div className='flex-col flex w-full mt-10 gap-5 bg-[rgba(0,0,0,0.8)] border shadow rounded-md p-5 sm:p-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {contents.map((job, index) => {
                        return (
                            <motion.div
                                initial={{ x: -20, y: -20, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    delay: 0.1 * index, // This creates the staggered effect
                                }}
                                className={cn('flex sm:flex-col w-full items-start justify-start shadow backdrop-blur p-2 rounded-md')} key={index}>
                                <div className='flex items-center gap-2'>
                                    <div className='w-[24px] h-[24px]'>
                                        <Image src={'user.svg'} alt={job.title} width={100} height={100} className='object-cover w-full h-full rounded-md' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <span className='text-[clamp(14px,1vw,18px)] font-semibold text-white truncate'>{job.title}</span>
                                        <span className='text-[clamp(12px,1vw,16px)] truncate opacity-80'>{job.experience} | {job.location}</span>
                                    </div>
                                </div>
                                <div className='w-full flex items-center justify-end px-4'>
                                    <Link href={''} className='text-[clamp(12px,1vw,16px)] text-white bg-[#379888] px-3 py-1 rounded-md'>Apply</Link>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
