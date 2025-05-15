'use client'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import Image from 'next/image';

function HeroSection() {

    const imageRef = useRef(null);
    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPositon = window.scrollY;
            const scrollThreshold = 100;
            if (scrollPositon > scrollThreshold) {
                imageElement.classList.add('scrolled')
            } else {
                imageElement.classList.remove('scrolled')
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll)

    }, [])
    return (
        <section className='w-full pt-36 md:pt-48 pb-10 z-10 '>
            <div className='space-y-6 text-center'>
                <div className='space-y-6 text-center mx-auto'>
                    <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-br from-blue-100 via-purple-500  to-blue-900 bg-clip-text text-transparent '>Your AI Career Coach For
                        <br />
                        Professional Success
                    </h1>
                    <p className='md:text-xl mx-auto max-w-[700px] text-muted-foreground'>
                        Advance your career with AI and data science skills. Get personalized career guidance, interview prep , training, and mentorship.
                    </p>
                </div>
                <div className='flex mx-auto w-full justify-center gap-4'>
                    <Link href="/dashboard">
                        <Button size={'lg'} className='px-8'>
                            Get Started
                        </Button>
                    </Link>
                    <Link href="https://www.youtube.com/watch?v=UbXpRv5ApKA">
                        <Button color="dark" size={'lg'} className='px-8' variant={'outline'} >
                            Get Started
                        </Button>
                    </Link>
                </div>
                <div className='hero-image-wrapper mt-5 md:mt-0' >
                    <div ref={imageRef} className='hero-image'>
                        <Image
                            src={'/banner.jpeg'}
                            width={1280}
                            height={780}
                            alt='banner NextStepPro'
                            className='rounded-lg shadow-2xl border mx-auto'
                            priority />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection; 
