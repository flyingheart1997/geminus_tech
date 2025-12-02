'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
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


export const Landscape: React.FC<LandscapeCardProps> = ({ contents }) => {
    return (
        <section
            id='Landscape'
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0'>
            <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold'>
                Landscape
            </span>
            <div className='flex-col flex w-full mt-10'>
                {contents.map((content, index) => {
                    const show_border = index !== contents.length - 1;
                    return (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: 0.2,

                            }} key={index} className={cn('gap-5 sm:gap-10 flex w-full pb-10 relative', show_border && 'border-l border-[rgba(140,218,209,0.20)]')}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                    delay: 0.2,

                                }}
                                className={cn('w-[clamp(18px,3vw,40px)] h-[clamp(18px,3vw,40px)] sm:w-[clamp(18px,3vw,40px)] sm:h-[clamp(18px,3vw,40px)] flex justify-center items-center absolute -left-[12px] sm:-left-[20px]')} >
                                <Image src='/landscape_progress.svg' alt='landscape_progress' width={100} height={100} className='object-contain w-full h-full' />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut",
                                    delay: 0.2,

                                }}
                                className={cn('gap-3 sm:gap-6 flex flex-1 ml-5 sm:ml-10')}>
                                <div className='flex items-center rounded-md overflow-hidden justify-center relative w-[clamp(24px,4vw,40px)] h-[clamp(24px,4vw,40px)] sm:w-[clamp(24px,4vw,40px)] sm:h-[clamp(24px,4vw,40px)]'>
                                    <Image src={content.icon ? content.icon : '/storage.svg'} alt={content.category || ''} width={100} height={100} className='object-contain w-full h-full rounded-md' />
                                </div>
                                <div className='flex gap-5 flex-col flex-1'>
                                    <span className='text-[clamp(16px,2.5vw,22px)] font-bold text-white text-wrap'>{content.category}</span>
                                    {content.details.map((detail, index) => (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{
                                                duration: 0.4,
                                                ease: "easeInOut",
                                                delay: 0.2 * index,

                                            }}
                                            className='flex flex-col gap-3 border rounded-[20px] border-[#1F1F1F] bg-[rgba(255,255,255,0.05)] p-5' key={index}>
                                            {detail.name &&
                                                <span className='text-[clamp(12px,2vw,18px)] text-[#DADADA] font-semibold text-wrap'>
                                                    {detail.name}
                                                </span>
                                            }
                                            <span className='text-[#B4B4B4] text-[clamp(10px,1.6vw,14px)] text-wrap font-light'>
                                                {detail.description}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
