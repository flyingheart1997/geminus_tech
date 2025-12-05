import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'

export const CommonLink = ({ link, text, showImage = true, className }: { link: string, text: string; showImage?: boolean, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
            }}
            className={cn("flex items-center justify-center h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]", className)}>
            <Link className="bg-[rgba(12,1,1,1)] text-white rounded-full text-sm flex px-5 py-2 gap-2 text-[clamp(12px,2.2vw,16px)] font-light"
                href={link}>
                {text}
                {showImage && <Image src="/link.svg" alt="link" width={14} height={14} className="w-auto h-auto" />}
            </Link>
        </motion.div>
    )
}

export const CommonButton = ({ onClick, text, showImage = true, className }: { onClick: () => void, text: string; showImage?: boolean, className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.2,
            }}
            className={cn("flex items-center justify-center h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]", className)}>
            <Button className="bg-[rgba(12,1,1,1)] hover:bg-[rgba(12,1,1,1)] h-auto w-auto text-white rounded-full text-sm flex px-5 py-2 gap-2 text-[clamp(12px,2.2vw,16px)] font-light"
                variant='ghost'
                onClick={onClick}
            >
                {text}
                {showImage && <Image src="/link.svg" alt="link" width={14} height={14} className="w-auto h-auto" />}
            </Button>
        </motion.div>
    )
}