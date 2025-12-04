'use client';

/**
 * @author: @nuelst
 * @description: Card Flip - MVP Development Theme
 * @version: 1.1.0
 * @date: 2025-01-14
 * @license: MIT
 * @website: https://nueslt.vercel.app
 * @github: https://github.com/nuelst
 */

import { cn } from '@/lib/utils';
import { ArrowRight, Code2, Copy, Rocket, Zap } from 'lucide-react';
import { ReactNode, useState } from 'react';

export interface CardFlipProps {

    frontDetails: ReactNode;
    backDetails: ReactNode;
}

export default function CardFlip({
    frontDetails,
    backDetails,
}: CardFlipProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="group relative h-full w-full [perspective:2000px]"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className={cn(
                    'relative h-full w-full',
                    '[transform-style:preserve-3d]',
                    'transition-all duration-700',
                    'border rounded-lg relative',
                    isFlipped
                        ? '[transform:rotateY(180deg)]'
                        : '[transform:rotateY(0deg)]',
                )}
            >
                {/* Front of card */}
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full',
                        '[transform:rotateY(0deg)] [backface-visibility:hidden]',
                        'overflow-hidden rounded-2xl',
                        'shadow-lg dark:shadow-xl',
                        'transition-all duration-700',
                        'group-hover:shadow-xl dark:group-hover:shadow-2xl',
                        'group-hover:border-primary/20 dark:group-hover:border-primary/30',
                        isFlipped ? 'opacity-0' : 'opacity-100',
                    )}
                >
                    {frontDetails}
                </div>

                {/* Back of card */}
                <div
                    className={cn(
                        'absolute inset-0 h-full w-full',
                        '[transform:rotateY(180deg)] [backface-visibility:hidden]',
                        'rounded-2xl p-5',
                        'shadow-lg dark:shadow-xl',
                        'flex flex-col',
                        'transition-all duration-700',
                        'group-hover:shadow-xl dark:group-hover:shadow-2xl',
                        'group-hover:border-primary/20 dark:group-hover:border-primary/30',
                        !isFlipped ? 'opacity-0' : 'opacity-100',
                    )}
                >
                    {backDetails}
                </div>
            </div>

            <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          50% {
            transform: translateX(0);
            opacity: 0.8;
          }
          100% {
            transform: translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
}
