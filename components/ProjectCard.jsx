import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon } from 'lucide-react';
import { Badge } from './ui/badge';

export const ProjectCardWithTech = ({ project }) => {
  return (
    <Card className="group relative overflow-hidden border-border/70 bg-background/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative h-[260px] sm:h-[280px] md:h-[320px] flex items-center justify-center bg-secondary/70">
          <Image 
            className="absolute inset-0 object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105" 
            src={project.image} 
            fill
            alt={project.name} 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex gap-x-3 absolute bottom-5 right-5">
            {project.link && (
              <Link 
                href={project.link} 
                className="bg-primary text-primary-foreground w-11 h-11 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                target="_blank"
                aria-label={`${project.name} live site`}
              >
                <Link2Icon size={20} />
              </Link>
            )}
            {project.github && (
              <Link 
                href={project.github} 
                className="bg-foreground text-background w-11 h-11 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                target="_blank"
                aria-label={`${project.name} GitHub repository`}
              >
                <Github size={20} />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>

      <div className="h-auto px-6 py-5">
        <Badge className="uppercase text-xs font-semibold tracking-wide mb-2 absolute top-3 left-4">{project.category}</Badge>
        <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

        {project.techStack && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-1 rounded-md border border-border/70 bg-secondary/70 px-2 py-1">
                <Image src={tech.src} alt={tech.label} width={20} height={20} className="h-5 w-5 object-contain" />
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
