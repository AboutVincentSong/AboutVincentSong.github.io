import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

export const ProjectCardWithTech = ({ project }) => {
  return (
    <Card className="group overflow-hidden relative transform transition-transform duration-300 hover:scale-105 hover:z-10">
      <CardHeader className="p-0">
        <div className="relative h-[50vh] md:h-[40vh] sm:h-[28vh] flex items-center justify-center bg-tertiary dark:bg-secondary/40">
          <Image 
            className="absolute inset-0 object-cover w-full h-full rounded-lg shadow-lg" 
            src={project.image} 
            layout="fill" 
            alt={project.name} 
            priority 
          />
          <div className="flex gap-x-4 absolute bottom-5 right-5">
            {project.link && (
              <Link 
                href={project.link} 
                className="bg-primary w-[54px] h-[54px] rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                target="_blank"
              >
                <Link2Icon style={{ color: 'white' }} />
              </Link>
            )}
            {project.github && (
              <Link 
                href={project.github} 
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                target="_blank"
              >
                <Github />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>

      <div className="h-auto px-8 py-6">
        <Badge className="uppercase text-sm font-medium mb-2 absolute top-2 left-5">{project.category}</Badge>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-md mb-4">{project.description}</p>

        {project.techStack && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
                <Image src={tech.src} alt={tech.label} width={20} height={20} />
                <span className="text-xs font-medium">{tech.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCardWithTech;
