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

export function Header() {
    const pathname = usePathname()
    const [open_menu, set_open_menu] = useState(false);
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    const headerRef = useRef(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let hideTimer: NodeJS.Timeout | null = null;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // ✅ Scroll direction detect
            if (currentScrollY < lastScrollY) {
                // Scrolling UP → Header show
                setVisible(true);
                if (hideTimer) clearTimeout(hideTimer);

                hideTimer = setTimeout(() => {
                    if (currentScrollY > 200) {
                        setVisible(false);
                    }
                }, 4000); // ⏳ 4 seconds baad hide
            }
            else {
                // Scrolling DOWN → Header hide immediately
                setVisible(false);

                if (hideTimer) {
                    clearTimeout(hideTimer);
                    hideTimer = null;
                }
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (hideTimer) clearTimeout(hideTimer);
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
                    <header className="py-[clamp(12px,3vw,20px)] relative flex items-center justify-between">
                        <div className="flex items-center">
                            <Image src="/logo.svg" alt="Logo" height={200} width={200} className="object-contain w-[clamp(112px,14vw,200px)]" />
                        </div>

                        <div className="hidden md:flex items-center justify-between
                        h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] 
                        bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]"
                        >
                            <div className="bg-[rgba(12,1,1,1)] rounded-full flex p-2">
                                {Header_Menu.map((item, index) => {
                                    const active = (pathname === '/') ? ' ' : pathname
                                    if (item.title === 'Company') {
                                        return (
                                            <DropdownMenu open={open} onOpenChange={setOpen} key={index}>
                                                <DropdownMenuTrigger className={`text-sm text-white font-chakra flex gap-2 items-center px-[clamp(8px,1.6vw,12px)] py-[clamp(4px,1.2vw,6px)] rounded-[clamp(8px,2vw,23px)] ${active.includes(item.link) ? 'bg-[#094F43]' : 'bg-transparent'}`} >
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
                                            <Link href={`/${item.link}`} key={index}
                                                className={`text-sm text-white px-[clamp(8px,1.6vw,12px)] font-chakra py-[clamp(4px,1.2vw,6px)] rounded-[clamp(8px,2vw,23px)] ${active.includes(item.link) ? 'bg-[#094F43]' : 'bg-transparent'}`}
                                            >
                                                {item.title}

                                            </Link>
                                        )
                                    }
                                })}
                            </div>
                        </div>
                        <Link className="bg-[rgba(12,1,1,1)] font-chakra text-white hidden lg:flex items-center justify-center shadow-[-1px_0px_1px_1px_rgb(255,255,255,0.4)] hover:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.4)] rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-light transition duration-300"
                            href="#contact">
                            Contact Us
                            <Image src="/link.svg" alt="link" width={16} height={16} className="w-auto h-auto" />
                        </Link>

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
