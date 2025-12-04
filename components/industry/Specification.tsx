'use client';

import { cn } from '@/lib/utils';
import React, { Fragment } from 'react'
import { motion } from 'framer-motion';

interface LandscapeCardProps {
    contents: {
        category: string;
        details: {
            name?: string;
            description: string;
        }[],
        icon?: string;
    }[];
}


export const Specification: React.FC<LandscapeCardProps> = ({ contents }) => {
    return (
        <section
            id='Specification'
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0'>
            <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-chakra font-bold'>
                Specification
            </span>
            <div className='flex-col flex w-full mt-10 gap-10'>
                {contents.map((content, index) => {
                    const show__bg = index % 2 === 1 ? 'bg-[#F0F0F0]' : 'bg-rgba(0,0,0,0.8)';
                    const show__text = index % 2 === 1 ? 'text-black' : 'text-white';
                    return (
                        <div key={index} className={cn('gap-5 flex-col p-5 flex w-full border shadow rounded-md', show__bg)}>
                            <div className='flex gap-3 items-center'>
                                <div className='w-1.5 h-7 rounded-md bg-[#379888]' />
                                <span className={cn('text-[clamp(16px,2.5vw,22px)] font-bold text-wrap font-chakra', show__text)}>{content.category}</span>
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
                                            <span className={cn('text-[clamp(12px,2vw,18px)] font-semibold text-wrap font-chakra', show__text)}>{detail.name}</span>
                                            <span className={cn('text-[clamp(10px,1.6vw,14px)] text-wrap font-light opacity-80', show__text)}>{detail.description}</span>
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
