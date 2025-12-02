import { Content } from '@/components/careers/content'
import { Hero } from '@/components/careers/hero'
import { Contact } from '@/components/common/contact'
import React from 'react'

const Careers = () => {
    return (
        <main className="h-full w-full flex flex-col gap-20">
            <Hero />
            <Content />
            <Contact />
        </main>
    )
}

export default Careers