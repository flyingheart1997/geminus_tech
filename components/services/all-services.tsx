'use client';

import React from 'react'
import { ServiceType } from './type'
import { cn, Services } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const AllServices = () => {
    return (
        <section id='all-services' className='w-full flex-col flex h-auto overflow-auto gap-20 pb-20'>
            {Services.map((service: ServiceType, index) => {
                const show__bg = index % 2 === 1 ? 'bg-[#F0F0F0]' : 'bg-rgba(0,0,0,0.8)';
                const show__text = index % 2 === 1 ? 'text-black' : 'text-white';
                const reverse_row = index % 2 === 1 ? 'md:flex-row-reverse' : '';
                const badge_bg = index % 2 === 1 ? 'bg-[#F0F0F0]' : 'bg-[#0F0F0F]';
                const badge_border = index % 2 === 1 ? 'border-[rgba(0,0,0,0.2)]' : 'border-[#262626]';
                return (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut',
                            delay: 0.1 * index, // This creates the staggered effect
                        }}
                        className={cn('flex w-full h-auto items-center', reverse_row)} key={index}>
                        <div className={cn('w-[clamp(40px,6vw,50px)] h-[clamp(280px,30vw,360px)] hidden bg-[rgba(38,38,38,0.4)] md:flex items-center justify-center rounded-md')}>
                            <span className='text-[#B4B4B4] rotate-90 text-[clamp(20px,4vw,30px)] opacity-10'>{service.badge}</span>
                        </div>
                        <div className={cn('flex md:flex-row flex-col items-center justify-center gap-5 flex-1 rounded-lg', reverse_row, show__bg)}>
                            <div className='w-full md:w-1/2 h-[clamp(280px,30vw,360px)] rounded-lg overflow-hidden'>
                                <Image src={service.image} alt={service.name} height={100} width={100} className='object-cover h-full w-full rounded-md' />
                            </div>
                            <div className='flex flex-col gap-5 w-full md:w-1/2 justify-center p-5 md:pl-10'>
                                <span className={cn('text-[clamp(12px,2vw,18px)] font-semibold text-wrap', show__text)}>{service.name}</span>
                                <span className={cn('text-[clamp(10px,1.6vw,14px)] font-light text-wrap opacity-80 pr-5', show__text)}>{service.description}</span>
                                <div className='flex gap-3 w-full flex-wrap'>
                                    {service.content.map((content, id) => {
                                        return (
                                            <motion.div
                                                initial={{ x: -20, y: -20, opacity: 0 }}
                                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                                viewport={{ once: true, amount: 0.2 }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: 'easeInOut',
                                                    delay: 0.1 * id, // This creates the staggered effect
                                                }}
                                                key={content.title} className={cn('flex py-2 px-5 rounded-full border shadow', badge_bg, badge_border)}>
                                                <span className={cn('text-[clamp(10px,1.1vw,14px)] opacity-80 text-wrap', show__text)}>{content.title}</span>
                                            </motion.div>
                                        )
                                    })}
                                </div>
                                <Link className="bg-[rgba(12,1,1,1)] w-[clamp(120px,20vw,150px)] text-white hidden lg:flex items-center justify-center shadow-[-1px_0px_1px_1px_rgb(255,255,255,0.4)] hover:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.4)] rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-light transition duration-300"
                                    href={`/services/${service.name.replace(/\s+/g, '_').toLowerCase()}`}>
                                    Learn More
                                    <Image src="/link.svg" alt="link" width={16} height={16} className="w-auto h-auto" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                )
            })}
        </section>
    )
}

