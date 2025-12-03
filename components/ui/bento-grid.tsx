'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Adjust this value to control the delay between each card
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    image,
    icon,
    viewes,
    createdAt,
    index,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    image?: string;
    icon?: React.ReactNode;
    viewes?: string | React.ReactNode;
    createdAt?: string | React.ReactNode;
    index: number;
}) => {

    return (
        <motion.div
            initial={{ opacity: 0, transform: 'scale(0)' }}
            whileInView={{ opacity: 1, transform: 'scale(1)' }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.2,
            }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-input bg-black border-white/[0.2] border relative p-4",
                className
            )}
        >
            <Image src='/card_bg.svg' alt='' fill className='object-cover absolute top-0 left-0 w-full h-full z-0' />
            <div className="justify-between h-full flex flex-col space-y-4 z-10">
                <div className="flex items-center justify-center h-full w-full flex-1">
                    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 relative">
                        <Image src={`${image}`} alt={`${title}-${index}`} fill className="object-cover w-full h-full rounded-xl" />
                    </div>
                </div>
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    <div className="flex gap-2 items-center text-neutral-500">
                        {icon}
                        <div className="flex items-center text-sm">
                            {viewes ? `${viewes} • ${createdAt}` : createdAt}
                        </div>
                    </div>
                    <div className="font-sans font-bold text-neutral-200 mb-2 mt-2">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-xs text-neutral-400">
                        {description}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
