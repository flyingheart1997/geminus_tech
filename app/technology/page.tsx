import { Companies } from '@/components/common/companies'
import { Contact } from '@/components/common/contact'
import { Content } from '@/components/technology/content'
import { Hero } from '@/components/technology/hero'
import React from 'react'

const Technology = () => {
    return (
        <main className="h-full w-full flex flex-col gap-20">
            <Hero />
            <Content />
            <Companies />
            <Contact />
        </main>
    )
}

export default Technology