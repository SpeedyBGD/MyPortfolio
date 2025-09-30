import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Music App - Pesme za Dušu',
    description: 'Full-stack music application with React frontend and Express backend. Features song search, filtering by genre, sorting by popularity, and user authentication with JWT.',
    thumbnail: '/images/projects/music-app-screenshot.jpg',
    githubUrl: 'https://github.com/SpeedyBGD/music-app',
    liveUrl: 'https://music-app-xi-flame.vercel.app',
    technologies: ['React', 'TypeScript', 'Express', 'SQLite', 'JWT']
  },
  {
    id: 2,
    title: 'SpeedyCleaning',
    description: 'A comprehensive cleaning service application with booking system, service management, and customer portal. Built with modern web technologies for efficient service delivery.',
    thumbnail: '/images/projects/speedycleaning-screenshot.jpg',
    githubUrl: 'https://github.com/rilex037/speedycleaning',
    liveUrl: '#',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  },
  {
    id: 3,
    title: 'SmartKids',
    description: 'An educational platform for children with interactive learning modules, progress tracking, and gamified learning experiences. Designed to make learning fun and engaging for young learners.',
    thumbnail: '/images/projects/smartkids-screenshot.jpg',
    githubUrl: 'https://github.com/SpeedyBGD/smartkids011',
    liveUrl: '#',
    technologies: ['React', 'JavaScript', 'CSS', 'HTML', 'Education']
  },
  {
    id: 4,
    title: 'Dr. Miskov Website',
    description: 'Professional website for Dr. Miskov with admin panel, API integration, and security features. Built with PHP backend and modern frontend technologies for healthcare professionals.',
    thumbnail: '/images/projects/drmiskov-screenshot.jpg',
    githubUrl: 'https://github.com/SpeedyBGD/drmpaunovic',
    liveUrl: '#',
    technologies: ['PHP', 'HTML', 'JavaScript', 'Security', 'Admin Panel']
  },
  {
    id: 5,
    title: 'PlayMind AI',
    description: 'AI-powered application built with Next.js and TypeScript. Features modern web technologies with Supabase integration for database management and real-time functionality.',
    thumbnail: '/images/projects/playmind-screenshot.jpg',
    githubUrl: 'https://github.com/SpeedyBGD/playmind',
    liveUrl: 'https://playmind-teal.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'AI']
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Project Thumbnail */}
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={`${project.title} screenshot`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                {project.technologies && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
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
                <div className="flex gap-4">
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
