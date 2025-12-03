import { cn } from '@/lib/utils';
import React from 'react'

export const SectionLabel = ({ label, placement, className }: { label: string; placement: 'left' | 'right'; className?: string }) => {
    return (
        <div className={cn(`w-full flex px-4`, className,
            placement === 'left' ? 'justify-start' : 'justify-end'
        )}>
            <span className='special__text sm:flex hidden text-[clamp(20px,4vw,56px)] font-bold opacity-20'>{label}</span>
        </div>
    )
}
