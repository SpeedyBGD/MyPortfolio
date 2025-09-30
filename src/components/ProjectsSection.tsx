import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Music App - Pesme za Dušu',
    description: 'Full-stack music application with React frontend and Express backend. Features song search, filtering by genre, sorting by popularity, and user authentication with JWT.',
    thumbnail: '/images/projects/music-app.png',
    githubUrl: 'https://github.com/SpeedyBGD/music-app',
    liveUrl: 'https://music-app-xi-flame.vercel.app',
    technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'JWT']
  },
  {
    id: 2,
    title: 'SpeedyCleaning',
    description: 'A comprehensive cleaning service application with booking system, service management, and customer portal. Built with modern web technologies for efficient service delivery.',
    thumbnail: '/images/projects/speedycleaning.png',
    githubUrl: 'https://github.com/rilex037/speedycleaning',
    liveUrl: '#',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  },
  {
    id: 3,
    title: 'SmartKids',
    description: 'An educational platform for children with interactive learning modules, progress tracking, and gamified learning experiences. Designed to make learning fun and engaging for young learners.',
    thumbnail: '/images/projects/smartkids.png',
    githubUrl: 'https://github.com/SpeedyBGD/smartkids011',
    liveUrl: '#',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'Education']
  },
  {
    id: 4,
    title: 'Dr. Miskov Website',
    description: 'Professional website for Dr. Miskov with admin panel, API integration, and security features. Built with PHP backend and modern frontend technologies for healthcare professionals.',
    thumbnail: '/images/projects/drmpaunovic.png',
    githubUrl: 'https://github.com/SpeedyBGD/drmpaunovic',
    liveUrl: '#',
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
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 lg:mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {/* Project Thumbnail */}
              <div className="h-40 sm:h-48 bg-gray-200 flex items-center justify-center group cursor-pointer relative">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:fixed group-hover:z-50 group-hover:w-[800px] group-hover:h-[600px] group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:shadow-2xl group-hover:rounded-lg"
                />
              </div>
              
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
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
