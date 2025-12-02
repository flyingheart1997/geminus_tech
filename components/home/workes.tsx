'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ImageContainer } from '../common/Image-container'
import { WorksDetails } from './utils'
import { WorkerCard } from '../common/worker-card'
import { ContainerProvider } from '../providers/container-provider'

export const Workes = () => {
    return (
        <section id='worker'>
            <div className='w-100 flex px-6'>
                <span className='special__text sm:flex hidden text-[clamp(20px,4vw,56px)] font-bold opacity-20'>Expertise</span>
            </div>
            <ContainerProvider>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='flex h-auto w-full py-16 relative flex-col gap-24 items-center justify-center'
                >
                    <div className='flex flex-col text-center items-center justify-center gap-[20px]'>
                        <span className='text-[clamp(18px,3vw,32px)] font-bold underline underline-offset-[12px] decoration-white/20 decoration-1 text-white'>Dimensions We Work in</span>
                        <p className='text-[clamp(12px,2vw,20px)] text-white opacity-80 max-w-[1024px]'>A software company develops, designs, creates, tests, and maintains software applications. These applications can range from simple mobile apps to complex enterprise systems.</p>
                    </div>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
                        {WorksDetails.map(work => (
                            <WorkerCard key={work.id}>
                                <div className='h-full flex flex-col items-center justify-start flex-1 gap-10'>
                                    <ImageContainer>
                                        {work.image}
                                    </ImageContainer>
                                    <div className='flex flex-col items-center justify-start gap-4 w-full z-10'>
                                        <span className='text-[clamp(18px,2.5vw,28px)] font-semibold text-white'>{work.title}</span>
                                        <p className='text-[clamp(14px,2vw,16px)] text-center text-[#8C8C8C]'>{work.description}</p>
                                        <div className='flex gap-2 flex-wrap items-center justify-start'>
                                            {work.tags.map(tag => (
                                                <div key={tag} className='py-2 px-4 text-[clamp(10px,1.6vw,12px)] bg-[#0F0F0F] text-white rounded-full border border-[#262626]'>{tag}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </WorkerCard>
                        ))}
                    </div>
                    <WorkerCard>
                        <div className='h-auto shadow-sm w-full flex flex-col lg:flex-row gap-10 z-20'>
                            <div className='h-[200px] w-full lg:w-[450px] rounded-md overflow-hidden bg-white/50'>
                                <Image src="/blog_1.svg" alt="blog svg" height={100} width={100} className="object-cover w-full h-full opacity-60" />
                            </div>
                            <div className='flex-1 lg:max-w-[500px] w-full flex flex-col gap-6 lg:items-start items-center text-center lg:text-start z-10'>
                                <div className='flex flex-col gap-2 lg:items-start items-center w-full justify-center text-center lg:text-start'>
                                    <span className='text-[clamp(16px,2.5vw,20px)] font-semibold text-white'>Ideation to Design to Development </span>
                                    <p className='text-[clamp(12px,1.6vw,14px)] text-[#8C8C8C]'>User-centricity is key in our product development. Our skilled design team crafts intuitive <span className='text-white'>experiences</span>, ensuring our products meet users' needs effectively.</p>
                                    <div className='flex gap-2 flex-wrap lg:justify-start justify-center'>
                                        {['Define Strategies', 'Craft MVP', 'Product Design', 'Branding'].map(tag => (
                                            <div key={tag} className='py-2 px-4 text-[clamp(10px,1.6vw,12px)] bg-[#0F0F0F] rounded-full border border-[#262626] text-white'>{tag}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center justify-center
                            h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] 
                            bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]"
                                >
                                    <Link className="bg-[rgba(12,1,1,1)] text-white rounded-full text-sm flex px-5 py-2 gap-2 text-[clamp(12px,2.2vw,16px)] font-light"
                                        href="#">
                                        Design it well
                                        <Image src="/link.svg" alt="link" width={14} height={14} className="w-auto h-auto" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </WorkerCard>
                </motion.div>
            </ContainerProvider>
        </section>
    )
}
