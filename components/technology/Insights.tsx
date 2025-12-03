'use client';

import React from 'react'
import { motion } from 'framer-motion';

interface OverviewCardProps {
    contents: {
        title?: string;
        description?: string;
    }[];
}

export const Insights: React.FC<OverviewCardProps> = ({ contents }) => {
    return (
        <section
            id='Insights'
            className='w-full flex-grow flex flex-col p-5 pb-10 sm:p-10 sm:pb-20'>
            <div className='flex-col flex gap-6'>
                <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold'>
                    Insights
                </span>
                <div className='flex flex-col gap-6 border rounded-[20px] border-[#1F1F1F] shadow px-5 sm:px-10 py-5'>
                    {contents.map((content, index) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: 0.2 * index,

                            }}
                            className='flex flex-col gap-2' key={index}>
                            {content.title &&
                                <span className='text-[clamp(12px,2vw,18px)] text-white font-semibold text-wrap'>
                                    {content.title}
                                </span>
                            }
                            <span className='text-[#B4B4B4] text-[clamp(10px,1vw,14px)] text-wrap font-light'>
                                {content.description}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
