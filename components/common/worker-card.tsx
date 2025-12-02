import React, { ReactNode } from 'react'
import { Card } from '../ui/card'
import { cn } from '@/lib/utils'

export const WorkerCard = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <Card className={cn("w-full flex h-auto overflow-hidden bg-gradient-to-b from-[rgba(32,32,32,0.20)] to-transparent via-[rgba(32,32,32,0.02)] p-[1px]", className)}>
            <div className='h-full w-full pt-[clamp(36px,6vw,90px)] md:p-[clamp(20px,4vw,50px)] bg-grid-white/[0.15] p-5 rounded-lg relative'>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_top,transparent_0%,black)]" />
                {children}
            </div>
        </Card>
    )
}