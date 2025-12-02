'use client';

import { cn, Services } from '@/lib/utils'
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export const Service = () => {
    const { service_id } = useParams()
    const service = Services.find(service => service.name.replace(/\s+/g, '_').toLowerCase() === service_id)
    if (!service) return <div>Service not found {service_id}</div>
    return (
        <section id='service' className='w-full h-auto flex flex-col gap-10'>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 0.3,

                }}
                className={cn('flex md:flex-row items-center justify-center gap-5 flex-1 rounded-lg flex-col-reverse bg-white p-5 sm:p-10',)}>
                <div className='flex flex-col gap-5 w-full md:w-1/2 justify-center'>
                    <span className={cn('text-[clamp(12px,2vw,18px)] font-semibold text-wrap text-black underline underline-offset-8 decoration-2')}>{service?.name}</span>
                    <span className={cn('text-[clamp(10px,1.6vw,14px)] font-light text-wrap opacity-80 pr-5 text-black',)}>{service?.description}</span>
                </div>
                <div className='w-full md:w-1/2 h-[clamp(200px,30vw,300px)] rounded-lg overflow-hidden'>
                    <Image src={service?.image || ''} alt={service?.name || ''} height={100} width={100} className='object-cover h-full w-full rounded-md' />
                </div>
            </motion.div>
            <div className='flex flex-col w-full justify-center p-5 sm:p-10'>
                {(service?.content || []).map((content, index) => {
                    const row_no = index < 10 ? `0${index + 1}` : `${index + 1}`;
                    return (
                        <motion.div
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                                delay: 0.1 * index, // This creates the staggered effect
                            }}
                            className='flex gap-5' key={index}>
                            <span className={cn('hidden sm:flex text-[clamp(28px,6vw,40px)] font-bold text-wrap text-[#101010]')}>{row_no}</span>
                            <div className='border-l flex flex-col gap-5 relative p-5 sm:px-10 sm:pt-3 sm:pb-10 w-full'>
                                <div className='w-1 h-10 bg-[#379888] absolute top-2 -left-0.5 rounded-md' />
                                <span className='text-[clamp(16px,3vw,22px)] font-semibold text-wrap'>{content.title}</span>
                                <div className='bg-[#0F0F0F] rounded-md border border-[#1F1F1F] flex flex-col gap-3 p-5'>
                                    <span className='text-[clamp(12px,2vw,16px)] font-light text-wrap text-[#8C8C8C]'>{content.description}</span>
                                    <div className='w-full flex gap-3 flex-wrap items-start'>
                                        {content.tags.map((tag, index) => {
                                            return (
                                                <motion.div
                                                    initial={{ x: -20, y: -20, opacity: 0 }}
                                                    whileInView={{ x: 0, y: 0, opacity: 1 }}
                                                    viewport={{ once: true, amount: 0.2 }}
                                                    transition={{
                                                        duration: 0.5,
                                                        ease: 'easeInOut',
                                                        delay: 0.1 * index, // This creates the staggered effect
                                                    }}
                                                    key={index} className='bg-[#0F0F0F] rounded-full border shadow border-[#262626] flex px-5 py-2'>
                                                    <span className='text-[clamp(10px,1.6vw,14px)] font-light text-wrap opacity-80'>{tag}</span>
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )
                })}

            </div>
        </section>
    )
}
