"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CareerDetails } from './utils';

export const Technologies = () => {
    const contents = CareerDetails.technologies
    return (
        <section
            id='technologies'
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0'>
            <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold'>
                {contents.title}
            </span>
            <div className='flex-col flex w-full mt-10 gap-5 bg-[rgba(0,0,0,0.8)] border shadow rounded-md p-5 sm:p-10'>
                <div className='flex gap-3 items-center'>
                    <div className='w-1.5 h-7 rounded-md bg-[#379888]' />
                    <span className={cn('text-[clamp(16px,2vw,20px)] font-bold text-wrap text-white',)}>{contents.description}</span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {contents.languages.map((language, index) => {
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
                                className={cn('flex items-center gap-2 shadow backdrop-blur p-2 rounded-md')} key={index}>
                                <div className='h-[24px] w-[24px]'>
                                    <Image src={language.image} alt={language.name} width={100} height={100} className='object-cover opacity-80 w-full h-full rounded-md' />
                                </div>
                                <span className={cn('text-[clamp(12px,1vw,18px)] text-wrap text-white/80 max-w-[60%]')}>{language.name}</span>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
