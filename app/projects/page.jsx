'use client';
import React, {useState} from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { useTheme } from 'next-themes';
import { ChevronRightCircle } from 'lucide-react';

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
      description: 'Implemented the Google Login/Maps API with Python and JavaScript to provide roughly 4,000 first year students with access to location information around grounds.',
      link: 'https://project-a-03-4b98fe94a410.herokuapp.com/',
      github: 'https://github.com/vsong15/UVA-Tour-Guide-App',
  },
  {
      image: '/work/coursesync.png',
      category: 'Full-Stack',
      name: 'Course Sync',
      description: 'Developed a student enrollment database management system using C++ to manage course registrations, faculty/staff roles, and database interactions efficiently.',
      link: '',
      github: 'https://github.com/vsong15/Course-Sync',
  },
  {
      image: '/work/uvagdsc.png',
      category: 'Front-End',
      name: 'UVA GDG Official Website',
      description: 'Developed the website using NextJS and React and hosted project in Firebase with custom domain for 250+ members to access resources and events information.',
      link: '',
      github: 'https://github.com/UVA-Google-Developer-Student-Club/UVA-GDSC-Website',
  },
  {
      image: '/work/firstPortfolio.png',
      category: 'Front-End',
      name: 'First Portfolio Website',
      description: 'Built a personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills.',
      link: 'https://vsong15.github.io/',
      github: 'https://github.com/vsong15/vsong15.github.io',
  },
];

const uniqueCategories = ['All Projects', 'Front-End', 'Back-End', 'Full-Stack'];

const Projects = () => {
  const { theme } = useTheme();
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('All Projects');

  const filteredProjects = projectData.filter(project => {
    return category === 'All Projects'
      ? project
      : project.category === category;
  });

  return (
    <section className={`min-h-screen pt-8 ${theme === 'dark' ? '' : 'grey-background'}`}>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-8 text-center mx-auto'>
          <ChevronRightCircle /> My Projects
        </h2>
        <Tabs defaultValue={category}>
          <TabsList className="border w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto">
            {categories.map((category, index)=> {
              return <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto"> 
                {category}
              </TabsTrigger>;
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index)=>{
              return <TabsContent value={category} key={index}>
                <ProjectCard project={project}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
      <br></br>
    </section>
  )
}

export default Projects