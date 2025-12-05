'use client'

import React, { useEffect } from 'react'
import { cn, } from '@/lib/utils'
import { ContainerProvider } from '../providers/container-provider'
import { Button } from '../ui/button'
import { Activity } from './activity'
import { Technologies } from './technologies'
import { Jobs } from './jobs'
import { CareerDetails } from './utils'

export const Content = () => {

    const AllSectionIds = CareerDetails.sidebar_links.map((link) => link.id)
    const [section, set_section] = React.useState<{
        name: string;
        scroll: boolean
    }>({
        name: 'activity',
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && AllSectionIds.includes(entry.target.id)) {
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
    }, [AllSectionIds.length]);

    const DetailsComponent: Record<string, React.FC> = {
        activity: Activity,
        technologies: Technologies,
        jobs: Jobs,
    };

    return (
        <div className='flex relative'>
            <ContainerProvider className='p-0 pb-10'>
                <section className='flex flex-col w-full h-full gap-5'>
                    <div className='flex'>
                        <div className='w-[clamp(160px,20vw,200px)] h-[clamp(160px,20vw,200px)] flex-col hidden md:flex sticky top-10 z-[5] backdrop-blur shadow'>
                            {CareerDetails.sidebar_links.map((link) => {
                                return (
                                    <Button
                                        onClick={() => {
                                            set_section({
                                                name: link.id,
                                                scroll: true
                                            })
                                        }}
                                        className={cn('flex transition-all pl-5 py-5 gap-2 opacity-60 justify-start text-white bg-transparent hover:bg-[rgba(52,143,128,0.1)] hover:opacity-90 rounded-sm',
                                            section.name === link.id && 'border-l-white border-l opacity-100 hover:bg-[rgba(52,143,128,0.1)] bg-[rgba(52,143,128,0.1)]',
                                        )} key={link.id}>
                                        {link.title}
                                    </Button>
                                )
                            })}
                        </div>
                        <div className='flex-1 flex flex-col backdrop-blur gap-10 shadow border-[0.5px] border-[rgba(140,218,209,0.20)] rounded-md pb-8'>
                            {CareerDetails.sidebar_links.map(comp => {
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
