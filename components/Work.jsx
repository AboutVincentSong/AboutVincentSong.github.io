'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightCircle } from 'lucide-react';

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from '@/components/ProjectCard';

import { useTheme } from 'next-themes';

const projectData = [
    {
        image: '/work/theCourseForum.png',
        category: 'Full-Stack',
        name: 'theCourseForum',
        description: 'Integrated new SIS API to retrieve course information for 1,500+ courses from all departments to enhance user experience and added proper documentation and testing. ',
        link: 'https://thecourseforum.com/',
        github: 'https://github.com/thecourseforum/theCourseForum2',
    },
    {
        image: '/work/tourGuide.png',
        category: 'Full-Stack',
        name: 'UVA Tour Guide App',
        description: 'Implemented the Google Login/Maps API with Python and JavaScript to provide roughly 4,000 first year students with access to location information around grounds',
        link: 'https://project-a-03-4b98fe94a410.herokuapp.com/',
        github: 'https://github.com/vsong15/UVA-Tour-Guide-App',
    },
    {
        image: '/work/snippetbox.png',
        category: 'Full-Stack',
        name: 'Snippetbox',
        description: 'A full-stack Golang web application called "Snippetbox" that lets users Create, Read, Update, and Delete (CRUD) code text snippets (similar to GitHub gists).',
        link: '',
        github: 'https://github.com/vsong15/snippetbox',
    },
    {
        image: '/work/devmatch.png',
        category: 'Full-Stack',
        name: 'DevMatch',
        description: 'A full-stack web application using Ruby on Rails, HTML, CSS, JavaScript, Stripe, and Heroku with a subscription tier for users to access more premium features.',
        link: '',
        github: 'https://github.com/vsong15/devmatch',
    },
];

const Work = () => {
  const { theme } = useTheme();
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4"><ChevronRightCircle />Latest Projects</h2>
                <p className="subtitle mb-8">These are my most recent projects from personal experience, school, work, and clubs. Each project emphasizes my capacity to innovate, address challenges, and excel through teamwork.</p>
                <Link href='/projects'>
                    <Button>All projects</Button>
                </Link>
            </div>
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper 
                    className={`h-[480px] ${theme === 'dark' ? 'dark-slider-bullets' : ''}`}
                    slidesPerView={1} 
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                    }} 
                    spaceBetween={30} 
                    modules={[Pagination]} 
                    pagination={{clickable: true}}
                >   
                    {projectData.slice(0.4).map((project, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div> 
    </section>
  )
}

export default Work