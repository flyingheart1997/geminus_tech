'use client'

import { CompaniesList } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ContainerProvider } from '../providers/container-provider'

export const Companies = () => {

    return (
        <section className='flex h-auto w-full relative overflow-hidden bg-[#060D0D] shadow-sm'>
            <Image src='/company_bg_left.svg' alt='companies' width={600} height={1000} className='object-contain absolute top-0 left-0 h-auto w-auto' />
            <Image src='/company_bg_left.svg' alt='companies' width={600} height={1000} className='object-contain absolute top-0 right-0 rotate-180 h-auto w-auto' />
            <ContainerProvider>
                <div className='overflow-x-auto whitespace-nowrap no__scrollbar z-10 py-16 gap-4 flex' >
                    {CompaniesList.map((company, index) => (
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                                delay: 0.1 * index, // This creates the staggered effect
                            }}
                            key={company.src} className='shrink-0 cursor-pointer z-10 flex items-center mx-auto justify-center bg-[rgba(20,29,26,0.52)] py-2 px-10 badge__shadow rounded-full '>
                            <Image src={company.src} alt={company.src} width={100} height={100} className='object-contain h-[clamp(20px,6vw,30px)] w-[clamp(100px,6vw,130px)]' />
                        </motion.div>
                    ))}
                </div>
            </ContainerProvider>
        </section>
    )
}
