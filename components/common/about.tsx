'use client'

import { AboutDetails } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { ContainerProvider } from '../providers/container-provider'
import { SectionLabel } from './section-label'

const slideVariants: Variants = {
    enter: (direction: 'left' | 'right') => ({
        x: direction === 'right' ? 100 : -100,
        opacity: 0,
        scale: 0.95,
    }),

    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1], // ✅ buttery smooth
        },
    },

    exit: (direction: 'left' | 'right') => ({
        x: direction === 'right' ? -100 : 100,
        opacity: 0,
        scale: 0.95,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    }),
}

export const About = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [direction, setDirection] = useState<'left' | 'right'>('right')

    const handleSlide = (dir: 'left' | 'right') => {
        setDirection(dir)

        setActiveIndex(prev => {
            if (dir === 'right') {
                return prev === AboutDetails.length - 1 ? 0 : prev + 1
            } else {
                return prev === 0 ? AboutDetails.length - 1 : prev - 1
            }
        })
    }

    const activeItem = AboutDetails[activeIndex]

    return (
        <section className="w-100">
            <SectionLabel label="Testimonials" placement="left" />

            <div className="bg-[#131215] shadow py-10 lg:py-20 flex flex-col gap-10 w-full">
                <span className="text-[clamp(18px,3vw,32px)] text-white font-bold text-center underline underline-offset-[12px] decoration-white/20">
                    What They Say About Us
                </span>

                <ContainerProvider>
                    <div className="relative overflow-hidden bg-white rounded-lg p-6 sm:p-12 shadow">

                        <Image
                            src="/about_bg.svg"
                            alt="about"
                            fill
                            className="object-cover absolute inset-0 z-0"
                        />

                        {/* ✅ SLIDER */}
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="relative z-10 flex flex-col gap-4"
                            >
                                {/* ✅ Arrows */}
                                <div className="flex gap-3 items-center absolute right-0 top-0">
                                    <Image
                                        src="/left_arrow.svg"
                                        alt="left"
                                        width={24}
                                        height={24}
                                        className="cursor-pointer"
                                        onClick={() => handleSlide('left')}
                                    />

                                    <Image
                                        src="/right_arrow.svg"
                                        alt="right"
                                        width={24}
                                        height={24}
                                        className="cursor-pointer"
                                        onClick={() => handleSlide('right')}
                                    />
                                </div>

                                {/* ✅ Content */}
                                <span className="text-[clamp(20px,3vw,32px)] font-bold text-black/60">
                                    {activeItem.id} - {AboutDetails[AboutDetails.length - 1].id}
                                </span>

                                <p className="text-[clamp(16px,2.5vw,20px)] text-black/60 line-clamp-4 max-w-[90%]">
                                    {activeItem.description}
                                </p>

                                <div className="flex flex-col">
                                    <p className="text-[clamp(12px,2vw,18px)] text-black font-normal">
                                        {activeItem.name}
                                    </p>

                                    <p className="text-[clamp(10px,1.6vw,14px)] -mt-1 text-black/80 font-normal">
                                        {activeItem.position}
                                    </p>
                                </div>

                                {/* ✅ Logo */}
                                <div className="absolute right-0 bottom-0">
                                    <Image
                                        src="/about_logo.svg"
                                        alt="logo"
                                        width={20}
                                        height={20}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                    </div>
                </ContainerProvider>
            </div>
        </section>
    )
}
