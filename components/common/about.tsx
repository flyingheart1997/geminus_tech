'use client'

import { AboutDetails } from '@/lib/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ContainerProvider } from '../providers/container-provider'
import { SectionLabel } from './section-label'

export const About = () => {

    const [show_details, set_show_details] = useState<number>(0)

    const get_details = (index: number, arrow: string) => {
        if ((index >= AboutDetails.length - 1) && arrow === 'right') {
            set_show_details(0)
        } else if (index <= 0 && arrow === 'left') {
            set_show_details(AboutDetails.length - 1)
        } else {
            set_show_details(arrow === 'left' ? index - 1 : index + 1)
        }
    }

    return (
        <section className='w-100'>
            <SectionLabel label='Testimonials' placement='left' />
            <div className='bg-[#131215] shadow py-10 lg:py-20 sm:py-[clamp(20px,4vw,60px)] flex flex-col sm:gap-[clamp(20px,6vw,60px)] gap-10 h-full w-full'>
                <span className='text-[clamp(18px,3vw,32px)] text-white font-bold text-center underline underline-offset-[12px] decoration-white/20 decoration-1'>What They Say About Us</span>
                <ContainerProvider>
                    <motion.div
                        initial={{ opacity: 0, transform: 'scale(0)' }}
                        whileInView={{ opacity: 1, transform: 'scale(1)' }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.4,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        className='p-6 sm:p-[clamp(12px,4vw,50px)] shadow bg-white rounded-lg flex overflow-hidden relative'>
                        <Image src='/about_bg.svg' alt='about' fill className='object-cover absolute h-full w-full' />
                        {AboutDetails.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, transform: 'scale(0)' }}
                                whileInView={{ opacity: 1, transform: 'scale(1)' }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: 0.2,
                                }}
                                key={index} className={`w-full h-auto flex-1 ${show_details === index ? 'flex' : 'hidden'} transition-all duration-500 ease-in-out`}>
                                <div className='flex flex-col gap-[clamp(6px,1.6vw,12px)] w-full relative'>
                                    <div className='flex gap-[clamp(6px,1.6vw,10px)] items-center absolute right-0 top-0'>
                                        <Image src='/left_arrow.svg' alt='left_arrow' width={20} height={20} className='cursor-pointer w-auto h-auto object-contain' onClick={() => get_details(index, 'left')} />
                                        <Image src='/right_arrow.svg' alt='left_arrow' width={20} height={20} className='cursor-pointer w-auto h-auto object-contain' onClick={() => get_details(index, 'right')} />
                                    </div>
                                    <span className='text-[clamp(20px,3vw,32px)] font-bold text-black/60'>{`${item.id}-${AboutDetails[AboutDetails.length - 1].id}`}</span>
                                    <p className='text-[clamp(16px,2.5vw,20px)] font-normal line-clamp-4 text-black/60 w-[clamp(220px,100%,90%)]'>{item.description}</p>
                                    <div className='flex flex-col'>
                                        <p className='text-[clamp(12px,2vw,18px)] text-black font-normal'>{item.name}</p>
                                        <p className='text-[clamp(10px,1.6vw,14px)] -mt-1 text-black/80 font-normal'>{item.position}</p>
                                    </div>
                                    <div className='flex gap-[clamp(6px,1.6vw,10px)] items-center absolute right-0 bottom-0'>
                                        <Image src='/about_logo.svg' alt='left_arrow' width={20} height={20} className='cursor-pointer w-auto h-auto object-contain' onClick={() => set_show_details(index - 1)} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </ContainerProvider>
            </div>
        </section>
    )
}
