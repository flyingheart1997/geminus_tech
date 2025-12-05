'use client'
import React, { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn, Header_Menu } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ContainerProvider } from '../providers/container-provider';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react";
import SidebarMenu from "./sidebar-menu";
import { CommonLink } from "./common-link";

export function Header() {
    const pathname = usePathname()
    const [open_menu, set_open_menu] = useState(false);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 200) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);



    return (
        <Fragment>
            <motion.nav
                ref={headerRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 0.2,

                }}
                className={`w-full shadow top-0 z-50 fixed ${visible ? '' : '-translate-y-full'}  transition-transform duration-300`}>
                <ContainerProvider>
                    <header className="py-[clamp(16px,3vw,20px)] relative flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo.svg" alt="Logo" height={200} width={200} className="object-contain w-[clamp(112px,14vw,200px)]" />
                        </Link>

                        <div className="hidden md:flex items-center justify-between
                        h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] 
                        bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]"
                        >
                            <div className="bg-[rgba(12,1,1,1)] rounded-full flex px-1.5 py-1">
                                {Header_Menu.map((item, index) => {
                                    const active = (pathname === '/') ? ' ' : pathname
                                    if (item.title === 'Company') {
                                        return (
                                            <DropdownMenu open={open} onOpenChange={setOpen} key={item.title}>
                                                <DropdownMenuTrigger id="company-dropdown-trigger" className={cn(`text-sm text-white font-chakra flex gap-2 items-center px-[clamp(8px,1.6vw,12px)] py-[clamp(4px,1vw,6px)] rounded-[clamp(8px,2vw,23px)]`,
                                                    active.includes(item.link) ? 'bg-[#094F43]' : 'bg-transparent hover:bg-[#094f4377]'
                                                )} >
                                                    Company <ChevronDownIcon
                                                        aria-hidden="true"
                                                        className="shrink-0 text-muted-foreground/80"
                                                        size={16}
                                                    />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="border-none bg-[#1A1A1A]">
                                                    <DropdownMenuItem className={cn('bg-transparent data-[highlighted]:bg-transparent data-[highlighted]:text-[#379888]',
                                                        active.includes('/company/about') ? 'text-[#379888] underline underline-offset-4' : ''
                                                    )} onClick={() => setOpen(false)}>
                                                        <Link className="font-chakra" href="/company/about">About Us</Link>
                                                    </DropdownMenuItem>

                                                    <DropdownMenuItem className={cn('bg-transparent data-[highlighted]:bg-transparent data-[highlighted]:text-[#379888]',
                                                        active.includes('/company/leadership') ? 'text-[#379888] underline underline-offset-4' : ''
                                                    )} onClick={() => setOpen(false)}>
                                                        <Link className="font-chakra" href="/company/leadership">Leadership</Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        )
                                    } else {
                                        return (
                                            <Link href={`/${item.link}`} key={item.title}
                                                className={cn(`text-sm text-white px-[clamp(8px,1.6vw,12px)] font-chakra py-[clamp(4px,1.2vw,6px)] rounded-[clamp(8px,2vw,23px)]`,
                                                    active.includes(item.link) ? 'bg-[#094F43]' : 'bg-transparent hover:bg-[#094f4377]'
                                                )}
                                            >
                                                {item.title}

                                            </Link>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <CommonLink link="#contact" text="Contact Us" className='hidden lg:flex' />

                        <div className="md:hidden flex items-center justify-center">
                            <Button id="menu" className="bg-transparent p-0 w-auto h-auto hover:bg-transparent"
                                onClick={() => set_open_menu(!open_menu)}
                            >
                                <Image src="/menu.svg" alt="menu" height={40} width={40} className="object-contain w-[clamp(20px,5vw,30px)] bg-transparent" />
                            </Button>
                        </div>
                    </header>
                </ContainerProvider>
            </motion.nav>
            <SidebarMenu open={open_menu} onClose={() => set_open_menu(false)} />
        </Fragment>
    );
}
