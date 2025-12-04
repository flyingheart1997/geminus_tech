'use client'

import { ContainerProvider } from "@/components/providers/container-provider"
import CardFlip from "@/components/ui/flip-card"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react/jsx-runtime"
import { CompanyDetails } from "../utils"
import { useParams } from "next/navigation"

export const Leadership = () => {

    const { section } = useParams()
    if (section === 'about') return null
    return (
        <section id='leadership' className='overflow-hidden relative h-full w-full '>
            <ContainerProvider>
                <div className='flex flex-col sm:gap-[clamp(20px,6vw,60px)] gap-10 z-10'>
                    <div className='w-full flex items-end justify-between'>
                        <div className='flex flex-col gap-4 w-full md:w-[60%]'>
                            <span className='text-[clamp(18px,3vw,32px)] text-white font-bold underline underline-offset-[12px] decoration-white decoration-1 font-chakra'>Meet Our Team</span>
                            <p className='w-full text-[clamp(12px,2vw,20px)] text-white/80'>We’re a collective of innovators, problem-solvers, and doers driven by curiosity and a constant wish to build better.</p>
                        </div>
                    </div>

                    <div className='flex w-full rounded-lg overflow-hidden'>
                        <div className="w-full">
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
                                {CompanyDetails.founders.founders.map((team, index) => (
                                    <div
                                        key={index}
                                        className="h-[clamp(280px,30vw,350px)] bg-black/20 transition-all duration-500"
                                    >
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.2 }}
                                            transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.2 }}
                                            className="h-full w-full overflow-hidden rounded-lg bg-[url(/card_bg.svg)] bg-cover bg-center "
                                        >

                                            <CardFlip
                                                frontDetails={
                                                    <Fragment>
                                                        <Image
                                                            src={team.image}
                                                            alt={team.name}
                                                            fill
                                                            className="object-cover rounded-lg"
                                                        />

                                                        <div className="bg-gradient-to-t absolute bottom-0 z-10 from-black via-black/80 to-transparent p-5 h-[100px] flex justify-end w-full flex-col rounded-lg transition-all duration-500">
                                                            <span className="text-base font-medium text-white font-chakra">
                                                                {team.name}
                                                            </span>
                                                            <p className="text-xs font-normal text-white/80">
                                                                {team.designation}
                                                            </p>
                                                        </div>
                                                    </Fragment>
                                                }
                                                backDetails={
                                                    <div className="flex flex-col gap-2.5 w-100">
                                                        <div className="flex flex-col">
                                                            <div className="flex items-center justify-between">
                                                                <span className="text-base font-medium text-white font-chakra">
                                                                    {team.name}
                                                                </span>
                                                                <div className="flex items-center gap-2 text-sm">
                                                                    {team.social.map((social, index) => (
                                                                        <Link key={index} href={social.link} target='_blank' className='text-white transition-all duration-500 hover:scale-110'>
                                                                            {social.icon}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <p className="text-xs font-normal text-white/80">
                                                                {team.designation}
                                                            </p>
                                                        </div>
                                                        <span className="text-[#B4B4B4] text-[12.5px]">{team.description}</span>
                                                    </div>
                                                }
                                            />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </ContainerProvider>
        </section>
    )
}
