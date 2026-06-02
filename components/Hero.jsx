'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { FileText, Send } from 'lucide-react';

import { RiArrowDownSLine } from 'react-icons/ri';

import DevImg from './DevImg';
import Socials from './Socials';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative overflow-hidden pb-14 pt-24 xl:pb-20 xl:pt-28'>
      <div className='absolute inset-0 -z-10 hidden dark:block'>
        <div className='absolute top-[-140px] left-1/2 -translate-x-1/2 w-[760px] h-[760px] bg-primary/10 blur-3xl rounded-full' />
        <div className='absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent' />
      </div>

      <div className='container mx-auto'>
        <div className='mx-auto flex w-full max-w-[820px] flex-col items-center text-center'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight mb-5'>
              Hi, I&apos;m{' '}
              <span className='bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent'>
                Vincent Song
              </span>
            </h1>

            <p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[720px] mx-auto mb-4'>
              Software engineer building backend systems, distributed applications,
              and AI-powered products with production-minded engineering discipline.
            </p>

            <div className='relative flex justify-center mb-7'>
              <DevImg
                containerStyles='relative w-[200px] h-[200px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl'
                imgSrc='/hero/developer.png'
              />
            </div>

            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-6'>
              <Link href='/contact'>
                <Button size='lg' className='hero-cta hero-cta-primary gap-x-2 px-7'>
                  Contact Me <Send size={18} />
                </Button>
              </Link>

              <Link href='/files/Vincent Song Resume.pdf' target='_blank'>
                <Button
                  size='lg'
                  variant='secondary'
                  className='hero-cta gap-x-2 px-7'
                >
                  Resume <FileText size={18} />
                </Button>
              </Link>
            </div>

            <Socials
              containerStyles='flex justify-center gap-x-6'
              iconsStyles='text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-300'
            />

          <button
            type='button'
            onClick={scrollToAbout}
            className='mt-8 hidden animate-bounce md:flex'
            aria-label='Scroll to about section'
          >
            <RiArrowDownSLine className='text-4xl text-primary/70' />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
