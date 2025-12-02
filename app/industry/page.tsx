import { Companies } from '@/components/common/companies'
import { Contact } from '@/components/common/contact'
import { Content } from '@/components/industry/content'
import { Hero } from '@/components/industry/hero'
import React from 'react'

const Industry = () => {
    return (
        <main className="h-full w-full flex flex-col gap-20">
            <Hero />
            <Content />
            <Companies />
            <Contact />
        </main>
    )
}

export default Industry