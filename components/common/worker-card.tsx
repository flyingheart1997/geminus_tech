import React, { ReactNode } from 'react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const WorkerCard = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <Card className={cn("w-full flex h-auto overflow-hidden bg-gradient-to-b from-[rgba(12,12,12,0.85)] to-[rgba(12,12,12,0.1)]  via-[rgba(12,12,12,0.2)] p-[1px]", className)}>
            <Image src="/card_bg.svg" alt="card-bg" width={100} height={100} className='absolute top-0 left-0 w-full h-full object-cover bg-center' />
            <div className='h-full w-full pt-[clamp(36px,6vw,90px)] md:p-[clamp(20px,4vw,50px)] p-5 rounded-lg relative'>
                {children}
            </div>
        </Card>
    )
}