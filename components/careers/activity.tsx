'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { CareerDetails } from './utils'

export const Activity = () => {
    const activity = CareerDetails['activity']

    const [selectedAcivity, setSelectedActivity] = useState(0)
    const [selectedComment, setSelectedComment] = useState(0)
    const [direction, setDirection] = useState(1)

    // ✅ Ultra-smooth GPU based animation
    const slideVariants: Variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 120 : -120,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: [0.16, 1, 0.3, 1], // ✅ butter smooth cubic-bezier
            },
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -120 : 120,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: [0.4, 0, 1, 1],
            },
        }),
    }

    return (
        <section id="activity" className="flex flex-col gap-20">

            {/* ✅ Overview (unchanged look) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full flex-grow flex flex-col p-5 sm:p-10 bg-white"
            >
                <div className="flex-col flex gap-6">
                    <span className="text-[clamp(18px,3vw,30px)] text-black underline decoration-2 underline-offset-8 font-bold">
                        {activity.title}
                    </span>

                    <div className={cn('gap-10 grid grid-cols-1 lg:grid-cols-2 items-center')}>
                        <span className="text-black opacity-80 text-[clamp(14px,2vw,16px)] font-light leading-6 text-wrap">
                            {activity.description}
                        </span>

                        <div className="flex items-center justify-center h-[250px] w-full relative rounded-md">
                            <Image
                                src={activity.image}
                                alt={activity.title}
                                width={100}
                                height={100}
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ✅ Slider */}
            <div className="w-full flex-grow flex flex-col p-5 sm:p-10 bg-[rgba(255,255,255,0.06)]">
                <div className="flex-col flex gap-8">

                    {/* Header */}
                    <div className="flex w-full items-center justify-between">
                        <span className="text-[clamp(18px,3vw,30px)] text-white font-bold">
                            Latest at Geminus
                        </span>

                        <div className="flex gap-2">
                            <Button
                                variant="ghost"
                                className="rounded-full p-2 bg-transparent border"
                                disabled={selectedAcivity === 0}
                                onClick={() => {
                                    setDirection(-1)
                                    setSelectedActivity(p => p - 1)
                                    setSelectedComment(0)
                                }}
                            >
                                <ArrowLeft className="text-white" />
                            </Button>

                            <Button
                                variant="ghost"
                                className="rounded-full p-2 bg-transparent border"
                                disabled={selectedAcivity === activity.newslatters.length - 1}
                                onClick={() => {
                                    setDirection(1)
                                    setSelectedActivity(p => p + 1)
                                    setSelectedComment(0)
                                }}
                            >
                                <ArrowRight className="text-white" />
                            </Button>
                        </div>
                    </div>

                    {/* ✅ MAIN CARD SLIDE */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={selectedAcivity}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            style={{ willChange: 'transform, opacity' }}
                            className="flex flex-col gap-6"
                        >
                            <div className="bg-white p-5 sm:p-10 rounded-md">
                                <span className="text-[clamp(18px,2.5vw,22px)] text-black font-bold">
                                    {activity.newslatters[selectedAcivity].title}
                                </span>

                                <div className="h-[380px] w-full rounded-md mt-4">
                                    <Image
                                        src={activity.newslatters[selectedAcivity].image}
                                        alt=""
                                        height={100}
                                        width={100}
                                        className="object-cover h-full w-full rounded-md"
                                    />
                                </div>

                                <div className="mt-4 flex flex-col gap-2">
                                    <span className="text-black font-semibold">
                                        {activity.newslatters[selectedAcivity].subtitle}
                                    </span>

                                    <span className="text-black opacity-80 font-light text-wrap">
                                        {activity.newslatters[selectedAcivity].description}
                                    </span>
                                </div>
                            </div>

                            {/* ✅ COMMENT ANIMATION */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedComment}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.25, ease: 'easeOut' }}
                                    className="bg-[rgba(173,198,198,0.19)] p-5 sm:p-10 flex flex-col gap-5 rounded-md relative"
                                >
                                    <div className="flex justify-between">
                                        <span className="text-white text-sm">
                                            {selectedComment + 1} / {activity.newslatters[selectedAcivity].comments.length}
                                        </span>

                                        <div className="flex gap-2">
                                            <Button
                                                variant="ghost"
                                                className="rounded-full p-2 bg-transparent border"
                                                disabled={selectedComment === 0}
                                                onClick={() => setSelectedComment(p => p - 1)}
                                            >
                                                <ArrowLeft className="text-white" />
                                            </Button>

                                            <Button
                                                variant="ghost"
                                                className="rounded-full p-2 bg-transparent border"
                                                disabled={
                                                    selectedComment ===
                                                    activity.newslatters[selectedAcivity].comments.length - 1
                                                }
                                                onClick={() => setSelectedComment(p => p + 1)}
                                            >
                                                <ArrowRight className="text-white" />
                                            </Button>
                                        </div>
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <span className='text-[clamp(14px,1vw,18px)] text-white font-light text-wrap'>
                                            {activity.newslatters[selectedAcivity].comments[selectedComment].comment}
                                        </span>
                                        <div className='flex flex-col'>
                                            <span className='text-white opacity-90 font-semibold'>
                                                {activity.newslatters[selectedAcivity].comments[selectedComment].owner}
                                            </span>
                                            <span className='text-white opacity-80 text-sm'>
                                                {activity.newslatters[selectedAcivity].comments[selectedComment].designation}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='absolute bottom-0 right-0 h-10 w-10'>
                                        <Image
                                            src="/about_logo.svg"
                                            alt="logo"
                                            width={20}
                                            height={20}
                                            className="object-contain text-white"
                                        />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
