'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export const Hero = () => {

    return (
        <section id='hero' className="h-screen w-screen relative flex items-start md:items-center justify-center py-[clamp(24px,6vw,32px)] md:p-0 gap-[clamp(16px,4vw,30px)] md:gap-[clamp(20px,6vw,40px)] overflow-hidden bg-[#020103]">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,

                }}
                className="flex h-full sm:h-auto md:w-[50%] w-full cursor-pointer z-10 right-0 absolute top-0">
                <Image src="/bg_technology.svg" alt="arrow down" height={100} width={100} className="object-contain w-full opacity-60" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,

                }}
                className="w-[90%] md:w-[80%] lg:w-[65%] flex flex-col gap-[clamp(28px,6vw,60px)] sm:px-[clamp(8px,2vw,10px)] md:px-[clamp(16px,4vw,40px)] lg:px-[clamp(24px,6vw,100px)] h-auto z-10 absolute md:left-0 top-40 md:top-auto"
            >
                <div className='flex flex-col sm:gap-4 gap-2'>
                    <div className='flex gap-2 items-center w-full md:justify-start justify-center'>
                        <span className='text-white opacity-[0.6] text-[clamp(14px,2.2vw,20px)]'>Home</span>
                        <span className='text-white text-[clamp(14px,2.2vw,20px)]'>|</span>
                        <span className='text-white text-[clamp(14px,2.2vw,20px)]'>Technology</span>
                    </div>
                    <span className="text-[clamp(24px,5vw,50px)] leading-[1.2] text-center md:text-start font-bold font-sans text-white">
                        Leading-Edge Technologies Driving Innovation
                    </span>
                </div>
                <div className='flex sm:gap-4 gap-2 w-full items-center justify-center md:justify-start md:items-start text-center md:text-start'>
                    <div className='flex gap-2 sm:w-[70%] lg:w-[80%] w-full flex-col'>
                        <span className='text-white opacity-[0.6] text-[clamp(14px,2.2vw,16px)]'>The future belongs to those who embrace the power of leading-edge technologies to drive innovation.</span>
                        <span className="text-[clamp(16px,2.5vw,18px)] font-bold font-sans text-white">
                            — Satya Nadella
                        </span>
                    </div>
                </div>
            </motion.div>
            <div className='flex absolute h-[clamp(36px,4.5vw,48px)] cursor-pointer animate-bounce w-[clamp(24px,4.5vw,28px)] z-50 bottom-5 border-[rgba(221,221,221,0.40)] rounded-full border-2'>
                <Image src='/arrow_down.svg' alt='arrow down' width={100} height={100} />
            </div>
        </section>
    )
}

