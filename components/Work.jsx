'use client';
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProjectCard from '@/components/ProjectCard';
import { useTheme } from 'next-themes';
import { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';

const projectData = [
    {
        image: '/work/thedailybugle.png',
        category: 'Full-Stack',
        name: 'The Daily Bugle',
        description: 'A scalable web app for Authors/Readers to create, edit, and comment on articles, with search, categories, image uploads, and session tracking.',
        link: '',
        github: 'https://github.com/vsong15/The-Daily-Bugle',
        techStack: [
            { src: '/icons/javascript.png', label: 'JS' },
            { src: '/icons/nodejs.png', label: 'Node.js' },
            { src: '/icons/mongo.png', label: 'MongoDB' },
            { src: '/icons/docker.png', label: 'Docker' },
            { src: '/icons/kubernetes.png', label: 'K8s' },
            { src: '/icons/apache.png', label: 'Apache' },
        ],
    },
    {
        image: '/work/theCourseForum.png',
        category: 'Full-Stack',
        name: 'theCourseForum',
        description: 'Enhanced user experience by integrating new SIS API for 1,500+ courses and added documentation and testing.',
        link: 'https://thecourseforum.com/',
        github: 'https://github.com/thecourseforum/theCourseForum2',
        techStack: [
            { src: '/icons/python.png', label: 'Python' },
            { src: '/icons/django.png', label: 'Django' },
            { src: '/icons/docker.png', label: 'Docker' },
            { src: '/icons/aws.png', label: 'AWS' },
            { src: '/icons/postgres.png', label: 'PostgreSQL' },
        ],
    },
    {
        image: '/work/tourGuide.png',
        category: 'Full-Stack',
        name: 'UVA Tour Guide App',
        description: 'Implemented Google Login/Maps API to provide 4,000+ first-year students access to campus location information.',
        link: 'https://project-a-03-4b98fe94a410.herokuapp.com/',
        github: 'https://github.com/vsong15/UVA-Tour-Guide-App',
        techStack: [
            { src: '/icons/python.png', label: 'Python' },
            { src: '/icons/javascript.png', label: 'JavaScript' },
            { src: '/icons/django.png', label: 'Django' },
            { src: '/icons/postgres.png', label: 'PostgreSQL' },
            { src: '/icons/heroku.png', label: 'Heroku' },
        ],
    },
];

const Work = () => {
  const { theme } = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[600px] mx-auto text-center mb-12 flex flex-col justify-center items-center">
          <h2 className="section-title mb-4"><ChevronRightCircle />Latest Projects</h2>
          <p className="subtitle mb-8">
            These are my most recent projects from personal experience, school, work, and clubs. Each project emphasizes my capacity to innovate, address challenges, and excel through teamwork.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>

        <div className="xl:w-[1200px] mx-auto">
          <Swiper 
            className={`h-[480px] ${theme === 'dark' ? 'dark-slider-bullets' : ''}`}
            slidesPerView={1} 
            breakpoints={{ 640: { slidesPerView: 2 }}} 
            spaceBetween={30} 
            modules={[Pagination]} 
            pagination={{clickable: true}}
          >   
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="cursor-pointer" onClick={() => setSelectedImage(project.image)}>
                  <ProjectCard project={project} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {selectedImage && (
        <Dialog open={true} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="bg-transparent shadow-none max-w-[90vw] max-h-[90vh] p-0 flex justify-center items-center">
            <img src={selectedImage} alt="Enlarged project" className="rounded-lg max-h-full max-w-full object-contain" />
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

export default Work;
