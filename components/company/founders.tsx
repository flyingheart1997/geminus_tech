import { cn, CompanyDetails } from '@/lib/utils';
import { LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Founders = () => {
    const contents = CompanyDetails.founders
    return (
        <section
            id={contents.id}
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0 gap-4'>
            <div className='flex flex-col gap-2 text-wrap'>
                <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold'>
                    {contents.title}
                </span>
                <p className='text-[clamp(14px,1vw,18px)] text-white/80 '>{contents.description}</p>
            </div>
            <div className='flex flex-col gap-4'>
                {contents.founders.map((content, index) => {
                    return (
                        <motion.div
                            initial={{ y: -100, x: -100, opacity: 0 }}
                            whileInView={{ y: 0, x: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut',
                                delay: 0.1 + index * 0.1
                            }} key={index} className={cn('gap-5 relative p-5 text-wrap flex md:flex-row flex-col w-full border items-center shadow rounded-md bg-rgba(0,0,0,0.8)')}>
                            <div className='md:w-[150px] md:h-[200px] h-[200px] w-full rounded-md relative shrink-0'>
                                <Image src={content.image} alt={content.name} height={100} width={100} className='object-cover h-full w-full rounded-md' />
                                <div className='flex flex-col w-full p-2 bg-gradient-to-t from-black via-black/70 to-black/10 absolute bottom-0'>
                                    <span className='truncate text-sm font-semibold'>{content.name}</span>
                                    <span className='truncate text-xs'>{content.designation}</span>
                                </div>
                            </div>
                            <p className='text-sm text-white/80'>{content.description}</p>
                            <div className='flex items-center gap-2 absolute bottom-2 right-2'>
                                {content.social.map((social, index) => {
                                    const Icon = social.name === 'LinkedIn' ? LinkedInLogoIcon : TwitterLogoIcon
                                    return (
                                        <Link href={social.link} key={index} target="_blank" rel="noopener noreferrer">
                                            <Icon className='h-5 w-5 text-white' />
                                        </Link>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}
