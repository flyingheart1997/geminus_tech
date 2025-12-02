import { Companies } from '@/components/common/companies'
import { Contact } from '@/components/common/contact'
import { Content } from '@/components/company/content'
import { Hero } from '@/components/company/hero'
import React from 'react'

const Company = () => {
    return (
        <main className="h-full w-full flex flex-col gap-20">
            <Hero />
            <Content />
            <Companies />
            <Contact />
        </main>
    )
}

export default Company