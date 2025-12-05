'use client'

import React, { useEffect } from 'react'
import { ContainerProvider } from '../providers/container-provider'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { Landscape } from './landscape'
import { Insights } from './Insights'
import { CaseStudy } from './case-study'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Overview } from '../common/overview'
import { Technologys } from './utils'

type Technology = {
    name: string;
    image: string;
    has_content: boolean;
    content: {
        Overview: {
            title?: string;
            description?: string;
            image?: string;
        }[];
        Landscape: {
            category: string;
            details: {
                name?: string;
                description: string;
            }[],
            icon?: string;
        }[];
        Insights: {
            title?: string;
            description?: string;
        }[];
        "Case Study": {
            title?: string;
            description?: string;
            details: {
                Challenges: string[];
                Outcome: string[];
                Benefits: string[];
                'Expertise Used': string[];
            }
        }[];
    };
};


export const Content = () => {

    const [technology, set_technology] = React.useState<Technology>(Technologys[0] as Technology)
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
        const sections = document.querySelectorAll('section');
        if (!sections.length) return;
        const SectionIds = ['Overview', 'Landscape', 'Insights', 'Case Study']
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.target.id) {
                        set_section({
                            name: entry.target.id,
                            scroll: false,
                        });
                    }
                });
            },
            {
                root: null,      // ✅ Ab viewport (body/window) ko observe karega
                threshold: 0.5,  // ✅ 50% visible hone par trigger
            }
        );
        sections.forEach((section) => observer.observe(section));
        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []);


    return (
        <div className='flex relative'>
            <ContainerProvider className='p-0 pb-10'>
                <section className='flex flex-col w-full h-full gap-5 relative'>
                    <div className='w-full flex overflow-x-auto bg-black backdrop-blur h-[50px] items-center sticky top-0 z-10'>
                        {Technologys.map(tech => (
                            <Button
                                onClick={() => {
                                    set_technology(tech)
                                    set_section({
                                        name: 'Overview',
                                        scroll: true
                                    })
                                }}
                                disabled={!tech.has_content}
                                className={cn('px-5 flex h-full items-center h-f transition-all whitespace-nowrap text-[14px] text-white opacity-60 border-b border-b-[#262626] bg-transparent hover:bg-[rgba(52,143,128,0.1)] hover:opacity-90 rounded-sm',
                                    tech.name === technology.name && 'border-b-[#379888] opacity-100 bg-[rgba(52,143,128,0.1)] hover:bg-[rgba(52,143,128,0.1)]',
                                )} key={tech.name}>
                                {tech.name}
                            </Button>
                        ))}
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col'>
                            <div className='w-[200px] h-[200px] flex-col hidden md:flex sticky top-20 z-[5] backdrop-blur shadow'>
                                {Object.keys(technology?.['content']).map(key => (
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
                                ))}
                            </div>
                            <div className='sticky top-72 h-[400px]'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        delay: 0.3,

                                    }}
                                    className="md:flex hidden absolute top-0 h-full -left-[170px] w-[400px] items-center text-center justify-center border border-transparent">
                                    <Image src={technology?.image} alt={technology?.name} height={100} width={100} className="object-contain h-full w-full opacity-60 z-0" />
                                    <span className='text-[clamp(20px,4vw,40px)] text-[#D9EEEA] text-center opacity-20 font-chakra font-bold absolute w-[300px] left-16'>{technology.name}</span>
                                </motion.div>
                            </div>
                        </div>
                        <div className='flex-1 flex flex-col whitespace-nowrap backdrop-blur gap-8 shadow border-l-[0.5px] border-l-[rgba(140,218,209,0.20)] rounded-md'>
                            {Object.keys(technology?.['content']).map(key => {
                                if (key === 'Overview') {
                                    return (
                                        <Overview
                                            key={key}
                                            contents={technology?.['content']['Overview']}
                                        />
                                    )
                                } else if (key === 'Landscape') {
                                    return (
                                        <Landscape
                                            key={key}
                                            contents={technology?.['content']['Landscape']}
                                        />
                                    )
                                } else if (key === 'Insights') {
                                    return (
                                        <Insights
                                            key={key}
                                            contents={technology?.['content']['Insights']}
                                        />
                                    )
                                } else if (key === 'Case Study') {
                                    return (
                                        <CaseStudy
                                            key={key}
                                            contents={technology?.['content']['Case Study']}
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