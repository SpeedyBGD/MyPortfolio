'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Music App - Pesme za Dušu',
    description: 'Full-stack music application with React frontend and Express backend. Features song search, filtering by genre, sorting by popularity, and user authentication with JWT.',
    thumbnail: '/images/projects/music-app.png',
    githubUrl: 'https://github.com/SpeedyBGD/music-app',
    liveUrl: 'https://music-app-three-gilt.vercel.app',
    technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'JWT']
  },
  {
    id: 2,
    title: 'SpeedyCleaning',
    description: 'A comprehensive cleaning service application with booking system, service management, and customer portal. Built with modern web technologies for efficient service delivery.',
    thumbnail: '/images/projects/speedycleaning.png',
    githubUrl: 'https://github.com/rilex037/speedycleaning',
    liveUrl: 'https://www.speedycleaning.rs',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  },
  {
    id: 3,
    title: 'SmartKids',
    description: 'An educational platform for children with interactive learning modules, progress tracking, and gamified learning experiences. Designed to make learning fun and engaging for young learners.',
    thumbnail: '/images/projects/smartkids.png',
    githubUrl: 'https://github.com/SpeedyBGD/smartkids011',
    liveUrl: 'https://www.smartkids011.rs',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'Education']
  },
  {
    id: 4,
    title: 'Dr. Miskov Website',
    description: 'Professional website for Dr. Miskov with admin panel, API integration, and security features. Built with PHP backend and modern frontend technologies for healthcare professionals.',
    thumbnail: '/images/projects/drmpaunovic.png',
    githubUrl: 'https://github.com/SpeedyBGD/drmpaunovic',
    liveUrl: 'https://www.drmpaunovic.rs',
    technologies: ['PHP', 'HTML', 'JavaScript', 'Security', 'Admin Panel']
  },
  {
    id: 5,
    title: 'PlayMind AI',
    description: 'AI-powered application built with Next.js and TypeScript. Features modern web technologies with Supabase integration for database management and real-time functionality.',
    thumbnail: '/images/projects/playmind.png',
    githubUrl: 'https://github.com/SpeedyBGD/playmind',
    liveUrl: 'https://playmind-teal.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'AI']
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (projectId: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoveredProject(projectId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
    }, 100); // Small delay to allow moving between card and popup
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 lg:mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
          {projects.map((project) => {
            const hasValidUrl = project.liveUrl && project.liveUrl !== '#';
            
            return (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow relative"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Project Thumbnail */}
              {hasValidUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-40 sm:h-48 bg-gray-200 flex items-center justify-center relative cursor-pointer block"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-all duration-300 pointer-events-none"
                  />
                </a>
              ) : (
                <div className="h-40 sm:h-48 bg-gray-200 flex items-center justify-center relative">
                  <Image
                    src={project.thumbnail}
                    alt={`${project.title} screenshot`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-all duration-300"
                  />
                </div>
              )}
              {/* Enhanced preview on hover - smaller and interactive */}
              {hoveredProject === project.id && (
                <div 
                  className="fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-50 pointer-events-none"
                >
                  <div 
                    className="w-[500px] h-[375px] bg-white rounded-lg shadow-2xl overflow-hidden border-4 border-blue-500 transform scale-100 transition-transform duration-300 pointer-events-auto"
                    onMouseEnter={() => handleMouseEnter(project.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={`${project.title} screenshot - enlarged view`}
                      width={500}
                      height={375}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
              
              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{project.description}</p>
                
                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4" onClick={(e) => e.stopPropagation()}>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub
                  </a>
                  {hasValidUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
