'use client'
import Image from "next/image";
import { Button } from "../ui/button";
import { ContainerProvider } from "../providers/container-provider";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    return (
        <div className="shadow-sm bg-[#0F0E10] py-10">
            <ContainerProvider>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-between">
                        <Image src="/logo.svg" alt="Logo" height={200} width={200} className="object-contain w-[clamp(112px,14vw,200px)]" />
                        <Button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="w-10 border-none h-10 flex animate-bounce items-center justify-center rounded-full bg-transparent hover:bg-transparent p-0"
                        >
                            <Image
                                src="/link.svg" // Replace with your arrow icon
                                alt="up"
                                width={100}
                                height={100}
                                className="w-full h-full -rotate-45 opacity-40"
                            />
                        </Button>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-10 gap-5 md:items-end">
                        <div className="flex flex-wrap gap-2 text-sm text-white/70 flex-1">
                            <div className="flex items-center gap-2">
                                <a href="/" className="hover:text-white">Home</a>
                                <span>/</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="/technologies" className="hover:text-white">Technologies</a>
                                <span>/</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="/industries" className="hover:text-white">Industries</a>
                                <span>/</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="/services" className="hover:text-white">Services</a>
                                <span>/</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="/company" className="hover:text-white">About us</a>
                                <span>/</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="/leadership" className="hover:text-white">Leadership</a>
                                <span>/</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <a href="/careers" className="hover:text-white">Careers</a>
                                <span>/</span>
                                <a href="#contact" className="hover:text-white">Contact us</a>
                            </div>

                        </div>
                        <div className="flex md:flex-col justify-between pt-10 md:pt-0 gap-4 flex-1">
                            <div>
                                <p className="text-xs text-white/40">PHONE</p>
                                <p className="mt-1 text-sm">+91878709098</p>
                            </div>
                            <div>
                                <p className="text-xs text-white/40">EMAIL</p>
                                <p className="mt-1 text-sm">info@geminustech.com</p>
                            </div>
                            <div>
                                <p className="text-xs text-white/40">Social</p>
                                <p className="mt-1 text-sm"><LinkedInLogoIcon /></p>
                            </div>

                        </div>
                        <div className="flex-1">
                            <p className="text-xs text-white/40">ADDRESS</p>
                            <p className="mt-1 text-sm leading-relaxed">
                                5th Floor, Neel Square Sanghavi Kesari Road, Aundh,
                                Pune Maharashtra, India-411007
                            </p>
                        </div>
                        <p className="text-white/50 text-xs flex-1 text-center flex justify-end">
                            © 2025 - All rights reserved
                        </p>
                    </div>

                </div>
            </ContainerProvider>
        </div>
    );
}
