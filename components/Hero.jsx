import Link from 'next/link';
import { Button } from './ui/button';
import { FileText, Send } from 'lucide-react';

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine,
} from 'react-icons/ri'

import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

const Hero = () => {
  return (
    <section style={{paddingTop: '20px'}}className='py-16 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto  text-center'>
                    <div className='text-sm uppercase font-semibold mb-2 text-primary tracking-[4px]'>Software Developer</div>
                    <h1 className='h1 mb-3'>👋 Hello, my name is Vincent Song</h1>
                    <div className='flex relative items-center justify-center mb-2'>
                        <DevImg containerStyles="w-[175px] h-[175px] bg-no-repeat relative bg-bottom rounded-full overflow-hidden" imgSrc='/hero/developer.png'/>
                    </div>
                    <p className='subtitle max-w-[490px] mx-auto'>I am a driven third-year computer science student at the University of Virginia's School of Engineering.</p>
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto mb-4'>
                        <Link href='/contact'>
                            <Button className='gap-x-2'>
                                Contact Me <Send size={18}/>
                            </Button>
                        </Link>
                        <Link href='/contact'>
                            <Button variant='secondary' className='gap-x-2'>
                                My Resume <FileText size={18}/>
                            </Button>
                        </Link>
                        </div>
                    <Socials 
                        containerStyles='flex gap-x-6 mx-auto mb-3'
                        iconsStyles='text-foreground hover:text-primary transition-all'
                    />
                </div>
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className='text-3xl text-primary' />
            </div>
        </div>
    </section>
  )
}

export default Hero