import { Companies } from '@/components/common/companies'
import { Contact } from '@/components/common/contact'
import { About } from '@/components/company/about/about'
import { Hero } from '@/components/company/hero'
import { Leadership } from '@/components/company/leadership/leadership'

const Company = () => {
    return (
        <main className="h-full w-full flex flex-col gap-20">
            <Hero />
            <About />
            <Leadership />
            <Companies />
            <Contact />
        </main>
    )
}

export default Company