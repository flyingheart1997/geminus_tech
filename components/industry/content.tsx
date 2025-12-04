'use client'

import React, { useEffect, useRef } from 'react'
import { ContainerProvider } from '../providers/container-provider'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Overview } from '../common/overview'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Specification } from './Specification'
import { Industrys } from './utils'

type Industry = {
    name: string;
    image: string;
    has_content: boolean;
    content: {
        Overview: {
            title?: string;
            description?: string;
            image?: string;
        }[];
        Specification: {
            category: string;
            details: {
                name?: string;
                description: string;
            }[],
        }[];
    };
};


export const Content = () => {

    const section_ref = useRef<HTMLDivElement>(null);

    const [industry, set_industry] = React.useState<Industry>(Industrys[0])
    const [section, set_section] = React.useState<{
        name: string;
        scroll: boolean
    }>({
        name: 'Overview',
        scroll: false
    })

    useEffect(() => {
        if (section.name && section.scroll) {
            const targetSection = document.getElementById(section.name);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            set_section({
                name: section.name,
                scroll: false
            })
        }
    }, [section]);

    useEffect(() => {
        const container = section_ref.current;
        if (container) {
            const sections = container.querySelectorAll('section');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            set_section({
                                name: entry.target.id,
                                scroll: false
                            }); // Update the section ID based on the visible section
                        }
                    });
                },
                { root: container, threshold: 0.5 } // Adjust threshold as needed
            );
            sections.forEach((section) => observer.observe(section));
            return () => {
                sections.forEach((section) => observer.unobserve(section));
            };
        }
    }, [])

    return (
        <div className='flex relative bg-[#020103]'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,

                }}
                className="md:flex hidden h-full w-[400px] items-center text-start -left-10 top-[10%] absolute">
                <Image src={industry?.image} alt={industry?.name} height={100} width={100} className="object-contain bg-transparent w-full opacity-60 z-0" />
                <span className='text-5xl font-chakra text-[#D9EEEA] opacity-20 font-bold absolute left-12 '>{industry?.name}</span>
            </motion.div>
            <ContainerProvider className='p-0 pb-10'>
                <section className='flex flex-col w-full h-screen gap-5' ref={section_ref}>
                    <div className='w-full flex overflow-x-auto bg-black backdrop-blur h-[50px] items-center sticky top-0 z-10'>
                        {Industrys.map((item: Industry) => (
                            <Button
                                onClick={() => {
                                    set_industry(item)
                                    set_section({
                                        name: 'Overview',
                                        scroll: true
                                    })
                                }}
                                disabled={!item.has_content}
                                className={cn('px-5 flex h-full items-center h-f transition-all whitespace-nowrap text-[14px] text-white opacity-60 border-b border-b-[#262626] bg-transparent hover:bg-[rgba(52,143,128,0.1)] hover:opacity-90 rounded-sm',
                                    item.name === industry.name && 'border-b-[#379888] opacity-100 bg-[rgba(52,143,128,0.1)] hover:bg-[rgba(52,143,128,0.1)]',
                                )} key={item.name}>
                                {item.name}
                            </Button>
                        ))}
                    </div>
                    <div className='flex max-h-screen'>
                        <div className='w-[clamp(160px,20vw,200px)] h-[clamp(160px,20vw,200px)] flex-col hidden md:flex sticky top-20 z-[5] backdrop-blur shadow'>
                            {Object.keys(industry?.['content']).map(key => (
                                <Button
                                    onClick={() => {
                                        set_section({
                                            name: key,
                                            scroll: true
                                        })
                                    }}
                                    className={cn('flex transition-all pl-5 py-5 gap-2 opacity-60 justify-start text-white bg-transparent hover:bg-[rgba(52,143,128,0.1)] hover:opacity-90 rounded-sm',
                                        section.name === key && 'border-l-white border-l opacity-100 hover:bg-[rgba(52,143,128,0.1)] bg-[rgba(52,143,128,0.1)]',
                                    )} key={key}>
                                    {key}
                                </Button>
                            ))
                            }
                        </div>
                        <div className='flex-1 flex flex-col whitespace-nowrap overflow-y-auto backdrop-blur gap-8 shadow border-l-[0.5px] border-l-[rgba(140,218,209,0.20)] rounded-md'>
                            {Object.keys(industry?.['content']).map(key => {
                                if (key === 'Overview') {
                                    return (
                                        <Overview
                                            key={key}
                                            contents={industry?.['content']['Overview']}
                                        />
                                    )
                                } else if (key === 'Specification') {
                                    return (
                                        <Specification
                                            key={key}
                                            contents={industry?.['content']['Specification']}
                                        />
                                    )
                                }
                            })}
                        </div>
                    </div>
                </section>
            </ContainerProvider>
        </div>
    )
}