'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { useTheme } from 'next-themes';
import { ChevronRightCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

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
    description:
      'Enhanced user experience by integrating new SIS API for 1,500+ courses and added documentation and testing.',
    link: 'https://thecourseforum.com/',
    github: 'https://github.com/thecourseforum/theCourseForum2',
  },
  {
    image: '/work/tourGuide.png',
    category: 'Full-Stack',
    name: 'UVA Tour Guide App',
    description:
      'Implemented Google Login/Maps API to provide 4,000+ first-year students access to campus location information.',
    link: 'https://project-a-03-4b98fe94a410.herokuapp.com/',
    github: 'https://github.com/vsong15/UVA-Tour-Guide-App',
  },
  {
    image: '/work/coursesync.png',
    category: 'Back-End',
    name: 'Course Sync',
    description:
      'Developed a C++ database system to manage student enrollment, faculty roles, and course registrations efficiently.',
    link: '',
    github: 'https://github.com/vsong15/Course-Sync',
  },
  {
    image: '/work/olympicsdb.png',
    category: 'Back-End',
    name: 'Olympics Database',
    description:
      'Built relational database with MSSQL Server & Spring Boot, using tables, triggers, and stored procedures to manage Olympic event and athlete data.',
    link: '',
    github: 'https://github.com/joyce-park/CS-4750-Final-Project',
  },
  {
    image: '/work/uvagdsc.png',
    category: 'Front-End',
    name: 'UVA GDG Official Website',
    description:
      'Next.js & React website hosted on Firebase, giving 250+ members access to resources and events information.',
    link: '',
    github: 'https://github.com/UVA-Google-Developer-Student-Club/UVA-GDSC-Website',
  },
  {
    image: '/work/firstPortfolio.png',
    category: 'Front-End',
    name: 'First Portfolio Website',
    description:
      'Personal portfolio website built using HTML, CSS, and JavaScript to showcase projects and skills.',
    link: 'https://vsong15.github.io/',
    github: 'https://github.com/vsong15/vsong15.github.io',
  },
];

const uniqueCategories = ['All Projects', 'Front-End', 'Back-End', 'Full-Stack'];

const Projects = () => {
  const { theme } = useTheme();
  const [categories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All Projects');

  const filteredProjects = projectData.filter(
    (project) => category === 'All Projects' || project.category === category
  );

  return (
    <section className={`min-h-screen py-12 ${theme === 'dark' ? '' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-2 text-gray-900 dark:text-gray-100">
          <ChevronRightCircle size={28} /> My Projects
        </h2>

        <Tabs defaultValue={category}>
          <TabsList className="flex justify-center flex-wrap gap-4 mb-12">
            {categories.map((cat, index) => (
              <TabsTrigger
                key={index}
                value={cat}
                onClick={() => setCategory(cat)}
                className="capitalize px-6 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer hover:scale-105 transition-transform">
                      <ProjectCard project={project} />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-6xl p-6 rounded-xl shadow-2xl bg-white dark:bg-gray-900">
                    <div className="w-full h-[85vh] flex items-center justify-center overflow-auto">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="object-contain rounded-xl transform scale-80 origin-top transition-all duration-300"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
