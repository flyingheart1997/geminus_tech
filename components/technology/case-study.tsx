import React, { useState } from 'react'
import { Button } from '../ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CaseStudyProps {
    contents: {
        title?: string;
        description?: string;
        details: {
            Challenges: string[];
            Outcome: string[];
            Benefits: string[];
            'Expertise Used': string[];
        }
    }[];
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ contents }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex(prev => (prev === 0 ? contents.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === contents.length - 1 ? 0 : prev + 1));
    };

    if (!contents || contents.length === 0) return null;
    const current = contents[currentIndex];
    return (
        <section
            id='Case Study'
            className='w-full flex-grow flex flex-col p-5 sm:p-10 bg-[rgba(255,255,255,0.06)]'>
            <div className='flex-col flex gap-8'>
                <div className='flex w-full items-center justify-between'>
                    <div className='text-[clamp(18px,3vw,30px)] text-white gap-1.5 flex sm:flex-row flex-col text-wrap font-bold'>
                        <span className='sm:underline decoration-2 underline-offset-8'>
                            Solving Customer Problems
                        </span>
                        {contents.length > 0 && <span className='text-white/60 text-sm font-light'>{currentIndex + 1} / {contents.length}</span>}
                    </div>
                    <div className='flex gap-2 shrink-0'>
                        <Button
                            className='rounded-full p-2 sm:p-3 h-auto bg-transparent border hover:bg-transparent transition-colors hover:border-white'
                            onClick={handlePrevious}
                            disabled={contents.length <= 1}
                        >
                            <ArrowLeft className='text-white' />
                        </Button>
                        <Button
                            className='rounded-full p-2 sm:p-3 h-auto bg-transparent hover:bg-transparent border transition-colors hover:border-white'
                            onClick={handleNext}
                            disabled={contents.length <= 1}
                        >
                            <ArrowRight className='text-white' />
                        </Button>
                    </div>
                </div>
                <div className='bg-white p-5 rounded-md'>
                    {current && (
                        <div className={'gap-6 flex flex-col'}>
                            <div className='flex flex-col gap-2'>
                                {current.title &&
                                    <span className='text-[clamp(16px,2.5vw,22px)] text-black font-bold text-wrap'>
                                        {current.title}
                                    </span>
                                }
                                <span className='text-black opacity-80 text-[clamp(14px,2vw,16px)] text-wrap font-light'>
                                    {current.description}
                                </span>
                            </div>
                            <div className='flex flex-col gap-5'>
                                {Object.keys(current.details).map((detail) => {
                                    return (
                                        <div className='flex flex-col gap-2' key={detail}>
                                            <span className='text-[16px] text-[rgba(0,0,0,0.80)] font-semibold'>{detail}:</span>
                                            <ul className={cn(detail === 'Expertise Used' ? 'flex gap-3 flex-wrap' : 'list-disc pl-5')}>
                                                {current.details[detail as keyof typeof current.details].map((detail, index) => (
                                                    <li className='text-[14px] text-[rgba(0,0,0,0.80)] text-wrap font-normal' key={index}>{detail}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
