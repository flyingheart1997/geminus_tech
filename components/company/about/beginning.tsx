import { cn } from '@/lib/utils'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CompanyDetails } from '../utils'

export const Beginning = () => {
    const beginning = CompanyDetails['beginning']
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut',
                delay: 0.1
            }}
            id={beginning.id}
            className={cn('flex w-full h-auto items-center')}>
            <div className={cn('flex flex-col items-center justify-center gap-5 flex-1 rounded-lg bg-[#F0F0F0] md:flex-row-reverse')}>
                <div className='w-full md:w-1/2 h-[clamp(280px,30vw,360px)] rounded-lg overflow-hidden'>
                    <Image src={beginning.image} alt={beginning.title} height={100} width={100} className='object-cover h-full w-full rounded-md' />
                </div>
                <div className='flex flex-col gap-5 w-full md:w-1/2 justify-center p-5 md:pl-10'>
                    <span className={cn('text-[clamp(12px,2vw,18px)] font-semibold text-wrap text-black font-chakra')}>{beginning.title}</span>
                    <span className={cn('text-[clamp(10px,1.6vw,14px)] font-light text-wrap opacity-80 pr-5 text-black',)}>{beginning.description}</span>

                </div>
            </div>
        </motion.div>
    )
}
