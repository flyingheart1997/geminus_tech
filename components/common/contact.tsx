'use client';
import React, { useState } from 'react'
import { Card } from '../ui/card'
import Link from 'next/link';
import { Button } from '../ui/button';
import { GridPattern } from '../ui/grid-pattern';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Separator } from '@radix-ui/react-separator';
import { ContainerProvider } from '../providers/container-provider';
import { SocialIcons } from './social-icons';
import { SectionLabel } from './section-label';
import Image from 'next/image';



export const Contact = ({ showForm = false }: { showForm?: boolean }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        try {
            // TODO: Replace with your actual API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSubmitStatus('idle'), 3000);
            } else {
                setSubmitStatus('error');
                setTimeout(() => setSubmitStatus('idle'), 3000);
            }
        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <section className='w-full flex flex-col' id='contact'>
            {showForm && <SectionLabel label='Contact' placement='left' />}
            <ContainerProvider>
                <div className='mb-28 transition-all duration-500'>
                    <Card className='w-full overflow-hidden h-auto flex border border-[rgba(255,255,255,0.05)] p-[1px]'>
                        <div className='h-full w-full rounded-lg relative flex md:flex-row flex-col items-center justify-center'>
                            <div className='h-[50%] w-[50%] absolute rounded-lg top-[-5px] left-[-5px]'>
                                <Image src='/contact_bg.svg' alt='contact-bg' width={100} height={100} className=' w-full h-full object-cover bg-center' />
                            </div>
                            <div className='h-[50%] w-[50%] absolute rounded-lg bottom-[-5px] right-[-5px] rotate-180'>
                                <Image src='/contact_bg.svg' alt='contact-bg' width={100} height={100} className=' w-full h-full object-cover bg-center' />
                            </div>
                            {showForm &&
                                <div className='z-10 sm:p-10 p-5 flex flex-col gap-10 h-full w-full'>
                                    <div className='flex flex-col gap-4 w-full max-w-[clamp(420px,70%,1024px)] items-center md:items-start text-center md:text-start'>
                                        <span className='flex md:hidden text-[clamp(18px,3vw,32px)] text-white font-bold underline underline-offset-[12px] decoration-black decoration-1'>Ready to Transform Your Digital Presence?</span>
                                        <span className='hidden md:flex text-[clamp(18px,3vw,32px)] text-white font-bold underline underline-offset-[12px] decoration-black decoration-1 font-chakra'>Get in Touch</span>
                                        <p className='w-full text-[clamp(12px,1vw,18px)] text-white/80 !leading-tight'>Ready to take the next step in transforming your business with Geminus Tech? We're here to help! Reach out to us today to discuss your specific needs and discover how our expertise can empower your organization.</p>
                                        <Button className="bg-[rgba(12,1,1,1)] text-white shadow-[-1px_0px_1px_1px_rgb(255,255,255,0.4)] md:hidden mt-5 flex items-center justify-center rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-medium"
                                            onClick={() => { }}
                                        >
                                            Contact Us
                                        </Button>
                                    </div>
                                    <div className='w-full h-auto hidden md:flex items-center justify-between'>
                                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 w-full'>
                                            <div className='flex flex-col gap-10 col-span-1'>
                                                <div className='w-full flex items-center justify-center overflow-hidden relative h-[clamp(260px,30vw,360px)] rounded-lg bg-neutral-800'>
                                                    {/* <Location /> */}
                                                    <iframe
                                                        src="/location"
                                                        width="100%"
                                                        height="300"
                                                        className='w-full h-full object-cover object-center border-0'
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-10 col-span-1 lg:items-start items-end'>
                                                <div className='flex flex-col h-[clamp(260px,30vw,360px)] justify-between lg:items-start items-end w-full gap-4'>
                                                    <div className='w-full'>
                                                        <Input
                                                            type="text"
                                                            name="name"
                                                            placeholder="Name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className={errors.name ? 'border-red-500' : ''}
                                                        />
                                                        {errors.name && <span className='text-red-500 text-xs mt-1 block'>{errors.name}</span>}
                                                    </div>
                                                    <div className='w-full'>
                                                        <Input
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                            className={errors.email ? 'border-red-500' : ''}
                                                        />
                                                        {errors.email && <span className='text-red-500 text-xs mt-1 block'>{errors.email}</span>}
                                                    </div>
                                                    <div className='w-full'>
                                                        <Textarea
                                                            name="message"
                                                            placeholder="Type your message here."
                                                            value={formData.message}
                                                            onChange={handleInputChange}
                                                            className={errors.message ? 'border-red-500' : ''}
                                                        />
                                                        {errors.message && <span className='text-red-500 text-xs mt-1 block'>{errors.message}</span>}
                                                    </div>
                                                    <div className='w-full flex flex-col gap-2'>
                                                        <Button
                                                            disabled={isLoading}
                                                            className="bg-transparent font-chakra hover:bg-transparent shadow-[-1px_0px_1px_1px_rgb(255,255,255,0.4)] text-white mt-5 flex items-center justify-center rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-medium disabled:opacity-50"
                                                            onClick={handleSubmit}
                                                        >
                                                            {isLoading ? 'Sending...' : 'Send Your Inquiry'}
                                                        </Button>
                                                        {submitStatus === 'success' && <span className='text-green-400 text-xs'>Message sent successfully!</span>}
                                                        {submitStatus === 'error' && <span className='text-red-500 text-xs'>Failed to send message. Please try again.</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            }
                            {!showForm &&
                                <div className='z-10 sm:p-10 p-5 flex flex-col gap-10 h-full w-full items-center justify-center'>
                                    <div className='flex flex-col gap-4 w-full max-w-[clamp(420px,70%,1024px)] items-center text-center'>
                                        <span className='flex text-[clamp(16px,3vw,28px)] text-white font-bold underline underline-offset-[12px] decoration-black decoration-1'>Ready to Transform Your Digital Presence?</span>
                                        <p className='w-full text-[clamp(12px,2vw,20px)] text-white/80 !leading-tight font-chakra'>Reach out to us today to discuss your specific needs and discover how our expertise can empower your organization.</p>
                                        <Link className="bg-[rgba(12,1,1,1)] text-white font-chakra flex items-center justify-center shadow-[-1px_0px_1px_1px_rgb(255,255,255,0.4)] hover:shadow-[1px_0px_0px_1px_rgba(255,255,255,0.4)] rounded-full px-[clamp(12px,2vw,20px)] py-[clamp(6px,1.6vw,10px)] gap-2 text-sm font-light transition duration-300"
                                            href="#contact">
                                            Contact Us
                                        </Link>
                                    </div>
                                </div>
                            }
                        </div>
                    </Card>
                </div>
            </ContainerProvider>
        </section>
    )
}
