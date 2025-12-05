import React from 'react'
import { ContainerProvider } from '../providers/container-provider'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import Link from 'next/link'
import Image from 'next/image'
import { LatestNews } from '@/lib/utils'
import { SectionLabel } from './section-label'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'

export const NewsLatters = () => {
    return (
        <section className='w-full flex flex-col'>
            <SectionLabel label='Latest' placement='right' />
            <ContainerProvider>
                <div className='flex flex-col sm:gap-[60px] gap-10'>
                    <div className='w-full flex items-end justify-between'>
                        <div className='flex flex-col gap-4 w-full md:w-[55%]'>
                            <span className='text-[clamp(18px,3vw,32px)] w-full font-bold underline underline-offset-[12px] decoration-white/20 decoration-1 text-white font-chakra'>Latest at </span>
                            <p className='w-full text-[clamp(12px,2vw,20px)] text-white/80'>Each event here tells a story of progress of teams pushing boundaries, delivering excellence, and creating lasting impact along the way.</p>
                        </div>
                    </div>

                    <BentoGrid>
                        {LatestNews.map((item, i) => (
                            <Dialog key={i}>
                                <DialogTrigger asChild>
                                    <div className='flex w-auto h-auto'>
                                        <BentoGridItem
                                            key={i}
                                            index={i}
                                            title={item.title}
                                            description={item.description}
                                            image={item.image}
                                            // icon={item.icon}
                                            createdAt={item.createdAt}
                                        />
                                    </div>
                                </DialogTrigger>
                                <DialogContent className="flex flex-col gap-4 h-[90%] w-[90%]">
                                    <DialogTitle>{item.title}</DialogTitle>
                                    <div className='flex flex-1 border'>
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`${item.link}#toolbar=0&navpanes=0&scrollbar=0`}
                                            title={item.title}
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>

                        ))}
                    </BentoGrid>
                </div>
            </ContainerProvider>
        </section>
    )
}
