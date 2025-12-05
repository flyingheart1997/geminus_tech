'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import useScrollNextSection from '@/hooks/useScrollNextSection';

const SECTION = {
    'about': 'About us',
    'leadership': 'Leadership',
}

const Details = {
    'about': {
        title: 'The Best Systems Understand People, Not Just Code.',
        description: 'We’ve always been true to our ethos. The culture we built - that’s what I take the most pride in.',
        designation: '— Rahul Soman (Co-founder)'
    },
    'leadership': {
        title: 'They Lead by example',
        description: '“We are stubborn on vision. We are flexible on details.”',
        designation: ' — Jeff Bezos'
    }
}

export const Hero = () => {


    const params = useParams()
    const { section } = params as { section: 'leadership' | 'about' } || { section: 'about' };
    useScrollNextSection()

    return (
        <section id='hero' className="h-screen w-screen relative flex items-center justify-center py-[clamp(24px,6vw,32px)] md:p-0 gap-[clamp(16px,4vw,30px)] md:gap-[clamp(20px,6vw,40px)] overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="flex h-full sm:h-auto md:w-[50%] w-full cursor-pointer z-10 right-0 top-0 absolute">
                <Image src="/company/bg_company.svg" alt="arrow down" height={100} width={100} className="object-contain w-full opacity-60" />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="w-[90%] md:w-[80%] lg:w-[60%] flex flex-col gap-[clamp(28px,6vw,60px)] sm:px-[clamp(8px,2vw,10px)] md:px-[clamp(16px,4vw,40px)] lg:px-[clamp(24px,6vw,100px)] h-auto z-10 absolute md:left-0 top-40 md:top-auto"
            >
                <div className='flex flex-col sm:gap-4 gap-2'>
                    <div className='flex gap-2 items-center w-full md:justify-start justify-center'>
                        <span className='text-white opacity-[0.6] text-[clamp(14px,2.2vw,20px)] hover:text-[#379888] hover:underline underline-offset-4'>
                            <Link href="/">Home</Link>
                        </span>
                        <span className='text-white text-[clamp(14px,2.2vw,20px)]'>|</span>
                        <span className='text-white text-[clamp(14px,2.2vw,20px)'>Company</span>
                        <span className='text-white text-[clamp(14px,2.2vw,20px)]'>|</span>
                        <span className='text-white text-[clamp(14px,2.2vw,18px)]'>{SECTION[section]}</span>
                    </div>
                    <span className="text-[clamp(24px,5vw,50px)] leading-[1.2] text-center md:text-start font-bold font-chakra text-white">
                        {Details[section].title}
                    </span>
                </div>
                <div className='md:flex hidden sm:gap-4 gap-2 w-full justify-start items-start text-start'>
                    <div className='flex gap-2 sm:w-[80%] lg:w-[70%] w-full flex-col'>
                        <span className='text-white opacity-[0.6] text-[clamp(14px,2.2vw,16px)]'>{Details[section].description}</span>
                        <span className="text-[clamp(16px,2.5vw,18px)] font-sans text-white">
                            {Details[section].designation}
                        </span>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.2,
                }}
                className="w-[90%] md:w-[80%] lg:w-[65%] flex flex-col gap-[clamp(28px,6vw,60px)] sm:px-[clamp(8px,2vw,10px)] md:px-[clamp(16px,4vw,40px)] lg:px-[clamp(24px,6vw,100px)] h-auto z-10 absolute left-5 bottom-32 md:hidden"
            >
                <div className='flex sm:gap-4 gap-2 w-full justify-start items-start text-start'>
                    <div className='flex gap-2 sm:w-[70%] lg:w-[80%] w-full flex-col'>
                        <span className='text-white opacity-[0.6] text-[clamp(14px,2.2vw,16px)]'>{Details[section].description}</span>
                        <span className="text-[clamp(16px,2.5vw,18px)] font-sans text-white">
                            {Details[section].designation}
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
