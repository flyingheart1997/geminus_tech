'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Header_Menu } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ContainerProvider } from '../providers/container-provider';


export function Header() {
    const pathname = usePathname()
    const [open_menu, set_open_menu] = useState(false);

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const headerRef = useRef(null);


    useEffect(() => {
        // Throttled scroll handler using requestAnimationFrame to reduce reflows
        const lastScrollRef = { current: 0 } as { current: number };
        let ticking = false;

        const handle = () => {
            const currentScrollPos = window.scrollY;
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(() => {
                    // determine visibility based on last known scroll
                    const was = lastScrollRef.current;
                    const isVisible = was > currentScrollPos || currentScrollPos < 10;
                    setVisible(isVisible);
                    setPrevScrollPos(currentScrollPos);

                    if (headerRef.current) {
                        const headerElement = headerRef.current as HTMLElement;
                        if (currentScrollPos > 100) {
                            headerElement.style.background = 'rgba(12,1,1,0.20)';
                            headerElement.style.backdropFilter = 'blur(15px)';
                        } else {
                            headerElement.style.background = 'rgba(12,1,1,0.20)';
                            headerElement.style.backdropFilter = 'blur(15px)';
                        }
                    }

                    lastScrollRef.current = currentScrollPos;
                    ticking = false;
                });
            }
        };

        window.addEventListener('scroll', handle, { passive: true });
        return () => window.removeEventListener('scroll', handle);
    }, []);

    const handleScrollToSection = (section: any) => {
        if (section.current) {
            window.scrollTo({ behavior: 'smooth', top: section.current.offsetTop });
        }
    };

    return (
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

                    <div className="hidden lg:flex items-center justify-between
                        h-auto rounded-full backdrop-blur-[15px] backdrop-brightness-[100%] 
                        bg-gradient-to-r from-[rgb(79,170,155)] to-[rgb(9,79,67)] p-[1px]"
                    >
                        <div className="bg-[rgba(12,1,1,1)] rounded-full flex p-2">
                            {Header_Menu.map((item, index) => {
                                const active = (pathname === '/') ? ' ' : pathname
                                return (
                                    <Link href={`/${item.link}`} key={index}
                                        className={`text-sm text-white px-[clamp(8px,1.6vw,12px)] py-[clamp(4px,1.2vw,6px)] rounded-[clamp(8px,2vw,23px)] ${active.includes(item.link) ? 'bg-[#094F43]' : 'bg-transparent'}`}
                                    >
                                        {item.title}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                    <Link className="bg-[rgba(12,1,1,1)] text-white hidden lg:flex items-center justify-center shadow-[-1px_0px_1px_1px_rgb(255,255,255,0.4)] hover:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.4)] rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-light transition duration-300"
                        href="#contact">
                        Contact Us
                        <Image src="/link.svg" alt="link" width={16} height={16} className="w-auto h-auto" />
                    </Link>

                    <div className="lg:hidden flex items-center justify-center">
                        <Button className="bg-transparent p-0 w-auto h-auto hover:bg-transparent"
                            onClick={() => set_open_menu(!open_menu)}
                        >
                            <Image src="/menu.svg" alt="menu" height={40} width={40} className="object-contain w-[clamp(20px,5vw,30px)] bg-transparent" />
                        </Button>
                    </div>
                </header>
            </ContainerProvider>
        </motion.nav>
    );
}
