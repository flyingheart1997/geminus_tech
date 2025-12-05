
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ContainerProvider } from '../providers/container-provider'
import { cn } from '@/lib/utils'
import useScrollNextSection from '@/hooks/useScrollNextSection'
import { CommonLink } from '../common/common-link'

export const Hero = () => {
    useScrollNextSection()
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
        { text: 'Kubernetes' },
        { text: 'Docker' },
        { text: 'Cloud Computing' },
        { text: 'Networking' },
        { text: 'Storage' },
        { text: 'AI and ML' },
        { text: 'Embedded Systems' }
    ];

    const annimation = texts[textIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prev => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [])


    return (
        <section id='hero' className="h-screen w-screen bg-grid-large-white/[0.15] relative flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black md:[mask-image:radial-gradient(ellipse_at_right,transparent_0%,black)] [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]" />
            <ContainerProvider>
                <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center h-full md:justify-between gap-[clamp(30px,3vw,40px)]">
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        className='lg:w-[45%] z-10 flex flex-col sm:gap-8 gap-2 items-center lg:items-start'>
                        <span className="text-[clamp(24px,5vw,50px)] leading-[1.2] lg:text-start text-center font-bold font-chakra text-white">
                            Realize Your Vision With Our Expertise
                        </span>

                        <span className='text-[clamp(14px,4vw,30px)] font-medium opacity-80 text-white'>Your Product Partner</span>
                        <CommonLink link="/services" text="Explore Services" showImage={false} className='md:flex hidden' />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        className='lg:absolute w-full right-0 flex relative flex-col items-center lg:items-end justify-center gap-4'>
                        <div className='h-[clamp(200px,25vw,350px)] w-[clamp(200px,25vw,350px)] border-[0.5px] border-[#329E91] rounded-full relative flex items-center justify-center' >
                            <div className='h-full w-full bg-[#8CDAD1] rounded-full absolute blur-3xl opacity-20' />
                            <span className='w-[50%] text-center font-chakra text-[clamp(12px,2vw,24px)] font-normal text-[rgba(221,255,249,1)] uppercase opacity-40'>
                                Product Engineering
                            </span>
                            <div className="absolute inset-0 animate-orbit">
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                                    <div className={cn(
                                        "h-[clamp(80px,10vw,150px)] w-[clamp(80px,10vw,150px)] border-[0.5px] border-[#329E91] rounded-full relative",
                                        "bg-transparent flex items-center justify-center animate-orbit"
                                    )}>
                                        <div className='h-[70%] w-[70%] rounded-full absolute bg-[#8CDAD1] blur-2xl' />
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                                            <div className="w-3 h-3 rounded-full bg-white shadow-md" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='special__text text-center text-[clamp(48px,6vw,128px)] font-bold'>
                            {annimation.text}
                        </span>
                    </motion.div>
                    <CommonLink link="/services" text="Explore Services" showImage={false} className='flex md:hidden' />
                </div>
            </ContainerProvider>
        </section>
    )
}

