'use client'
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'
import { Button } from '../ui/button'
import { ChevronDownIcon, X } from 'lucide-react'
import { cn, Header_Menu } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const SidebarMenu = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => {
        const onClickOutside = (event: MouseEvent) => {
            const menu = document.getElementById('menu')
            const element = document.getElementById('dropdown')
            if (menu && menu.contains(event.target as Node)) return
            else if (element && element.contains(event.target as Node)) return
            setOpenMenu(false)
            onClose()
        }
        document.addEventListener('click', onClickOutside)
        return () => {
            document.removeEventListener('click', onClickOutside)
        }
    }, [])

    return (

        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="h-screen w-screen md:hidden items-center justify-center fixed z-[999] bg-[#121516] p-10 flex flex-col"
                >

                    {/* Background Logo */}
                    <div className='absolute left-0'>
                        <Image src="/geminus_bg_logo.svg" alt="Logo" height={100} width={100} className="object-contain w-[70%]" />
                    </div>

                    {/* Close Button */}
                    <Button
                        variant='ghost'
                        className='absolute h-10 w-10 rounded-full shadow-sm left-10 bottom-10'
                        onClick={onClose}
                    >
                        <X className='text-[rgba(186,186,186,1)]' size={28} />
                    </Button>

                    {/* Main Logo */}
                    <div className='w-full'>
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            height={200}
                            width={200}
                            className="object-contain w-[clamp(112px,14vw,200px)]"
                        />
                    </div>

                    {/* Menu Items */}
                    <div className='flex-1 flex w-full flex-col gap-4 justify-end'>
                        {Header_Menu.map((item, index) => {
                            const active = pathname === "/" ? " " : pathname;

                            if (item.title === "Company") {
                                return (
                                    <div className='flex flex-col gap-2' key={item.title}>
                                        <div className='w-full flex relative items-center justify-end px-4'>
                                            <Button
                                                id="dropdown"
                                                variant='ghost'
                                                className={`flex items-center relative text-base hover:bg-transparent p-0 h-auto font-chakra hover:text-[#379888] ${active.includes(item.link)
                                                    ? "underline underline-offset-4 text-[#379888]"
                                                    : "text-[#D9EEEA]"
                                                    }`}
                                                onClick={() => setOpenMenu(!openMenu)}
                                            >
                                                {item.title}
                                                <ChevronDownIcon
                                                    aria-hidden="true"
                                                    className="shrink-0 absolute -right-6"
                                                    size={18}
                                                />
                                            </Button>
                                        </div>

                                        <AnimatePresence>
                                            {openMenu && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex flex-col gap-2 justify-end items-end px-4"
                                                >
                                                    <Link href="/company/about" className="text-sm font-chakra text-[#D9EEEA] hover:text-[#379888]">
                                                        About Us
                                                    </Link>
                                                    <Link href="/company/leadership" className="text-sm font-chakra text-[#D9EEEA] hover:text-[#379888]">
                                                        Leadership
                                                    </Link>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <div key={item.title} className='w-full flex items-center justify-end px-4'>
                                    <Link
                                        href={`/${item.link}`}
                                        className={`text-base font-chakra hover:text-[#379888] ${active.includes(item.link)
                                            ? "underline underline-offset-4 text-[#379888]"
                                            : "text-[#D9EEEA]"
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            );
                        })}

                        <div className='w-full flex items-center justify-end px-4'>
                            <Link href="#contact" className="text-sm font-chakra hover:text-[#379888]">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default SidebarMenu