"use client"

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion';
import { CompanyDetails } from '../utils';

export const Core = () => {
    const content = CompanyDetails['core']
    return (
        <section
            id={content.id}
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0 gap-4'>
            <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold font-chakra'>
                {content.title}
            </span>
            <div className='flex flex-col gap-4'>
                {content.specifications.map((content, index) => {
                    const show__bg = index % 2 === 1 ? 'bg-[#F0F0F0]' : 'bg-rgba(0,0,0,0.8)';
                    const show__text = index % 2 === 1 ? 'text-black' : 'text-white';
                    return (
                        <div key={index} className={cn('gap-5 flex-col p-5 flex w-full border shadow rounded-md', show__bg)}>
                            <div className='flex gap-3 items-center'>
                                <div className='w-1.5 h-7 rounded-md bg-[#379888]' />
                                <span className={cn('text-[clamp(16px,2.5vw,22px)] font-bold text-wrap', show__text)}>{content.category}</span>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {content.details.map((detail, index) => {
                                    const full_space = ((index === content.details.length - 1) && index % 2 === 0) ? 'col-span-2' : 'col-span-2 sm:col-span-1';
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
                                            className={cn('flex flex-col gap-1 shadow backdrop-blur p-2 rounded-md', full_space)} key={index}>
                                            <span className={cn('text-[clamp(12px,2vw,18px)] font-semibold text-wrap', show__text)}>{detail.name}</span>
                                            <span className={cn('text-[clamp(10px,1vw,14px)] text-wrap font-light opacity-80', show__text)}>{detail.description}</span>
                                        </motion.div>
                                    )
                                })}
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}