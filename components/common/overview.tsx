import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

interface OverviewCardProps {
    contents: {
        title?: string;
        description?: string;
        image?: string;
    }[];
}

export const Overview: React.FC<OverviewCardProps> = ({ contents }) => {
    return (
        <section
            id='Overview'
            className='w-full flex-grow flex flex-col p-5 sm:p-10 bg-white'>
            <div className='flex-col flex gap-6'>
                <span className='text-[clamp(18px,3vw,30px)] text-black underline decoration-2 underline-offset-8 font-bold font-chakra'>
                    Overview
                </span>
                {contents.map((content, index) => (
                    <div key={index} className={cn('gap-10 grid grid-cols-1 lg:grid-cols-2 items-center', index % 2 === 1 ? 'lg:reverse' : '')}>
                        <div className='flex flex-col gap-4'>
                            {content.title &&
                                <span className='text-[clamp(16px,2.5vw,20px)] text-black font-chakra font-semibold text-wrap leading-6'>
                                    {content.title}
                                </span>
                            }
                            <span className='text-black opacity-80 text-[clamp(14px,2vw,16px)] text-wrap font-light leading-6'>
                                {content.description}
                            </span>
                        </div>
                        <div className='flex items-center justify-center h-[300px] relative rounded-md'>
                            <Image src={content.image ? content.image : '/technology/overview.svg'} alt={content.title || ''} width={100} height={100} className='object-cover w-full h-full rounded-md' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}