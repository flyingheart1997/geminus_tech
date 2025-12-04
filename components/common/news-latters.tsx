import React from 'react'
import { ContainerProvider } from '../providers/container-provider'
import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import Link from 'next/link'
import Image from 'next/image'
import { LatestNews } from '@/lib/utils'
import { SectionLabel } from './section-label'

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
                        <div className="hidden md:flex items-center justify-center
                    h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] 
                    bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]"
                        >
                            <Link className="bg-[rgba(12,1,1,1)] rounded-full flex px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-light text-white"
                                href="#">
                                View All
                                <Image src="/link.svg" alt="link" width={16} height={16} className="w-auto h-auto" />
                            </Link>
                        </div>
                    </div>

                    <BentoGrid>
                        {LatestNews.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                index={i}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                // icon={item.icon}
                                createdAt={item.createdAt}
                            />
                        ))}
                    </BentoGrid>
                </div>
            </ContainerProvider>
        </section>
    )
}
