'use client'

import React, { useEffect } from 'react'
import { Hero } from '@/components/services/hero'
import { Companies } from '@/components/common/companies'
import { Contact } from '@/components/common/contact'


const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Reset scroll to top on mount to prevent auto-scroll to lower sections
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

        // Also prevent default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    return (
        <main className="h-full w-full flex flex-col gap-20">
            <Hero />
            {children}
            <Companies />
            <Contact />
        </main>
    )
}

export default ServiceLayout