'use client'

import React, { useEffect, useRef } from 'react'
import { ContainerProvider } from '../../providers/container-provider'
import { cn } from '@/lib/utils'
import { Button } from '../../ui/button'
import { Beginning } from './beginning'
import { Founders } from './founders'
import { Vision } from './vision'
import { Core } from './core'
import { CompanyDetails } from '../utils'
import { useParams } from 'next/navigation'

export const About = () => {
    const { section } = useParams()
    const section_ref = useRef<HTMLDivElement>(null);

    const [aboutSection, setAboutSection] = React.useState<{
        name: string;
        scroll: boolean
    }>({
        name: 'beginning',
        scroll: false
    })

    useEffect(() => {
        if (aboutSection.name && aboutSection.scroll) {
            const targetSection = document.getElementById(aboutSection.name);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            setAboutSection({
                name: aboutSection.name,
                scroll: false
            })
        }
    }, [aboutSection]);

    useEffect(() => {
        const container = section_ref.current;
        if (container) {
            const sections = container.querySelectorAll('section');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setAboutSection({
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

    const DetailsComponent: Record<string, React.FC> = {
        beginning: Beginning,
        founders: Founders,
        vision: Vision,
        core: Core,
    };


    if (section === 'leadership') return null
    return (
        <div className='flex relative bg-[#020103]'>
            <ContainerProvider className='p-0 pb-10'>
                <section id='about' className='flex flex-col w-full h-full gap-5' ref={section_ref}>
                    <div className='flex max-h-screen'>
                        <div className='w-[clamp(160px,20vw,200px)] h-[clamp(160px,20vw,200px)] flex-col hidden md:flex sticky top-20 z-[5] backdrop-blur shadow'>
                            {CompanyDetails.sidebar_links.map((link) => {
                                return (
                                    <Button
                                        onClick={() => {
                                            setAboutSection({
                                                name: link.id,
                                                scroll: true
                                            })
                                        }}
                                        className={cn('flex transition-all pl-5 py-5 gap-2 opacity-60 justify-start text-white bg-transparent hover:bg-[rgba(52,143,128,0.1)] hover:opacity-90 rounded-sm',
                                            aboutSection.name === link.id && 'border-l-white border-l opacity-100 hover:bg-[rgba(52,143,128,0.1)] bg-[rgba(52,143,128,0.1)]',
                                        )} key={link.id}>
                                        {link.title}
                                    </Button>
                                )
                            })}
                        </div>
                        <div className='flex-1 flex flex-col whitespace-nowrap overflow-y-auto backdrop-blur gap-8 shadow border-[0.5px] border-[rgba(140,218,209,0.20)] rounded-md pb-8'>
                            {CompanyDetails.sidebar_links.map(comp => {
                                const Component = DetailsComponent[comp.id as keyof typeof DetailsComponent];
                                if (!Component) return null;
                                return <Component key={comp.title} />;
                            })}
                        </div>
                    </div>
                </section>
            </ContainerProvider>
        </div>
    )
}
