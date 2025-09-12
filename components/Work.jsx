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
        image: '/work/thedailybugle.png',
        category: 'Full-Stack',
        name: 'The Daily Bugle',
        description: 'A scalable web app for Authors and Readers to create, edit, and comment on articles, with search, categories, image uploads, session tracking, and microservices.',
        link: '',
        github: 'https://github.com/vsong15/The-Daily-Bugle',
    },
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
        description: 'Implemented the Google Login/Maps API with Python and JavaScript to provide roughly 4,000 first year students with access to location information around grounds.',
        link: 'https://project-a-03-4b98fe94a410.herokuapp.com/',
        github: 'https://github.com/vsong15/UVA-Tour-Guide-App',
    },
];

const Work = () => {
  const { theme } = useTheme();
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[600px] mx-auto text-center mb-12  flex flex-col justify-center items-center">
                <h2 className="section-title mb-4"><ChevronRightCircle />Latest Projects</h2>
                <p className="subtitle mb-8">These are my most recent projects from personal experience, school, work, and clubs. Each project emphasizes my capacity to innovate, address challenges, and excel through teamwork.</p>
                <Link href='/projects'>
                    <Button>All projects</Button>
                </Link>
            </div>
            <div className="xl:w-[1200px] mx-auto">
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