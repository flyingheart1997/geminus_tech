'use client'

import { CareerDetails, cn, } from '@/lib/utils'
import Image from 'next/image'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Activity = () => {
    const activity = CareerDetails['activity']
    const [selectedAcivity, setSelectedActivity] = useState(0)
    const [selectedComment, setSelectedComment] = useState(0)

    return (
        <section className='flex flex-col gap-20' id='activity'>
            <motion.div
                id='overview'
                initial={{ opacity: 0, transform: 'scale(0.5)' }}
                whileInView={{ opacity: 1, transform: 'scale(1)' }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                className='w-full flex-grow flex flex-col p-5 sm:p-10 bg-white'>
                <div className='flex-col flex gap-6'>
                    <span className='text-[clamp(18px,3vw,30px)] text-black underline decoration-2 underline-offset-8 font-bold'>
                        {activity.title}
                    </span>
                    <div className={cn('gap-10 grid grid-cols-1 lg:grid-cols-2 items-center',)}>
                        <span className='text-black opacity-80 text-[clamp(14px,2vw,16px)] text-wrap font-light leading-6'>
                            {activity.description}
                        </span>
                        <div className='flex items-center justify-center h-[250px] w-full relative rounded-md'>
                            <Image src={activity.image} alt={activity.title} width={100} height={100} className='object-cover w-full h-full rounded-md' />
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className='w-full flex-grow flex flex-col p-5 sm:p-10 bg-[rgba(255,255,255,0.06)]'>
                <div className='flex-col flex gap-8'>
                    <div className='flex w-full items-center justify-between'>
                        <div className='text-[clamp(18px,3vw,30px)] text-white gap-1.5 flex sm:flex-row flex-col text-wrap font-bold'>
                            <span className='sm:underline decoration-2 underline-offset-8'>
                                Latest at geminus
                            </span>
                        </div>
                        <div className='flex gap-2 shrink-0'>
                            <Button className='rounded-full p-2 sm:p-3 h-auto bg-transparent border hover:bg-transparent'
                                disabled={selectedAcivity === 0}
                                onClick={() => {
                                    setSelectedActivity((prev) => prev - 1)
                                    setSelectedComment(0)
                                }}
                            >
                                <ArrowLeft className='text-white' />
                            </Button>
                            <Button className='rounded-full p-2 sm:p-3 h-auto bg-transparent hover:bg-transparent border'
                                disabled={selectedAcivity === activity.newslatters.length - 1}
                                onClick={() => {
                                    setSelectedActivity((prev) => prev + 1)
                                    setSelectedComment(0)
                                }}
                            >
                                <ArrowRight className='text-white' />
                            </Button>
                        </div>
                    </div>
                    {activity.newslatters.map((content, index) => {
                        if (selectedAcivity !== index) return
                        return (
                            <motion.div
                                initial={{ x: -20, y: -20, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                viewport={{ once: false, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    ease: 'easeInOut',
                                    delay: 0.1 * index, // This creates the staggered effect
                                }} key={`activity-${index}`} className={'gap-6 flex flex-col'}>
                                <div className='bg-white p-5 sm:p-10 rounded-md'>
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-[clamp(18px,2.5vw,22px)] text-black font-bold text-wrap'>
                                            {content.title}
                                        </span>
                                        <div className='h-[250px] w-full rounded-md'>
                                            <Image src={content.image} alt={content.title} height={100} width={100} className='object-cover  h-full w-full rounded-md' />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <span className='text-black text-[clamp(14px,2vw,16px)] text-wrap font-semibold'>
                                                {content.subtitle}
                                            </span>
                                            <span className='text-black opacity-80 text-[clamp(14px,2vw,16px)] text-wrap font-light'>
                                                {content.description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {content.comments.map((comment, index) => {
                                    if (selectedComment !== index) return
                                    return (
                                        <motion.div
                                            initial={{ opacity: 0, transform: 'scale(0)' }}
                                            whileInView={{ opacity: 1, transform: 'scale(1)' }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
                                            key={`comment-${index}`} className='bg-[rgba(173,198,198,0.19)] p-5 sm:p-10 flex flex-col gap-5 rounded-md'>
                                            <div className='flex w-full items-center justify-between'>
                                                <span className='text-[16px] text-white gap-1.5 flex flex-row'>
                                                    {`${selectedComment + 1 < 10 ? `0${selectedComment + 1}` : selectedComment + 1}-${content.comments.length < 10 ? `0${content.comments.length}` : content.comments.length}`}
                                                </span>
                                                <div className='flex gap-2 shrink-0'>
                                                    <Button className='rounded-full p-2 h-auto bg-transparent border hover:bg-transparent'
                                                        disabled={selectedComment === 0}
                                                        onClick={() => setSelectedComment((prev) => prev - 1)}
                                                    >
                                                        <ArrowLeft className='text-white' />
                                                    </Button>
                                                    <Button className='rounded-full p-2 h-auto bg-transparent hover:bg-transparent border'
                                                        disabled={selectedComment === content.comments.length - 1}
                                                        onClick={() => setSelectedComment((prev) => prev + 1)}
                                                    >
                                                        <ArrowRight className='text-white' />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <span className='text-[clamp(14px,1vw,18px)] text-white font-light text-wrap'>
                                                    {comment.comment}
                                                </span>
                                                <div className='flex flex-col'>
                                                    <span className='text-white opacity-90 text-[clamp(14px,1vw,18px)] text-wrap font-semibold'>
                                                        {comment.owner}
                                                    </span>
                                                    <span className='text-white opacity-80 text-[clamp(12px,1vw,14px)] text-wrap font-light'>
                                                        {comment.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
