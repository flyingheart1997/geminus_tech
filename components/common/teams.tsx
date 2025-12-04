"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ContainerProvider } from '../providers/container-provider';
import { LinkSvg } from './svgs/Svgs';
import { SectionLabel } from './section-label';
import { CompanyDetails } from '../company/utils';

export const Teams = () => {
    const [hover, set_hover] = useState<number>(0);

    return (
        <section className='w-full flex flex-col'>
            <SectionLabel label='Teams' placement='right' />
            <div className='bg-white overflow-hidden relative h-full w-full py-10 lg:py-20 sm:py-[clamp(20px,6vw,60px)]'>
                <Image src='/about_bg.svg' alt='about' fill className='object-cover absolute h-full w-full' />
                <ContainerProvider>
                    <motion.div
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                        className='flex flex-col sm:gap-[clamp(20px,6vw,60px)] gap-10 z-10'
                    >
                        <div className='w-full flex items-end justify-between'>
                            <div className='flex flex-col gap-4 w-full md:w-[60%]'>
                                <span className='text-[clamp(18px,3vw,32px)] text-black font-bold underline underline-offset-[12px] decoration-black decoration-1 font-chakra'>Meet Our Team</span>
                                <p className='w-full text-[clamp(12px,2vw,20px)] text-black/80'>We’re a collective of innovators, problem-solvers, and doers driven by curiosity and a constant wish to build better.</p>
                            </div>
                            <Link className="border border-[#379888] hidden md:flex text-black items-center justify-center rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-medium"
                                href="#">
                                Know more about us
                                <LinkSvg color='black' />
                            </Link>
                        </div>

                        <div className='flex w-full rounded-lg overflow-hidden'>
                            <div className='flex w-full h-full overflow-x-auto no__scrollbar'>
                                <div className='flex flex-nowrap min-w-full gap-4'>
                                    {CompanyDetails.founders.founders.map((team, index) => (
                                        <div
                                            key={index}
                                            className={`h-[clamp(280px,30vw,350px)] flex-shrink-0 rounded-lg bg-black/20 transition-all duration-500 ${index === hover ? 'w-[clamp(240px,28vw,300px)]' : 'w-[clamp(160px,20vw,200px)]'}`}
                                            onMouseEnter={() => set_hover(index)}
                                            onMouseLeave={() => set_hover(0)}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, x: -100 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: false, amount: 0.2 }}
                                                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.2 }}
                                                className='h-full w-full flex items-end justify-start relative'
                                            >
                                                <Image src={team.image} alt={team.name} fill className='object-cover rounded-lg w-full h-full absolute' />
                                                <div className={`bg-gradient-to-t z-10 from-black p-5 h-[100px] flex justify-end rounded-lg via-black/80 to-transparent w-full flex-col ${index === hover ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
                                                    <span className='text-base font-medium'>{team.name}</span>
                                                    <p className='text-xs font-normal text-white/80'>{team.designation}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </ContainerProvider>
            </div>
        </section>
    );
};

