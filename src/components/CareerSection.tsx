const careerMilestones = [
  {
    id: 1,
    icon: '🏗️',
    title: '22 years in Civil Engineering',
    description: 'Extensive experience in construction and engineering projects'
  },
  {
    id: 2,
    icon: '📚',
    title: '2023/24 transition to software engineering',
    description: 'Started learning modern web development technologies'
  },
  {
    id: 3,
    icon: '🚀',
    title: '2023 first job as Software Developer',
    description: 'Began professional career in software development'
  }
];

export default function CareerSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 lg:mb-16">Career Path</h2>
        
        <div className="space-y-6 sm:space-y-8">
          {careerMilestones.map((milestone, index) => (
            <div key={milestone.id} className="flex items-start gap-4 sm:gap-6">
              {/* Timeline Icon */}
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-blue-600">
                <span className="text-lg sm:text-xl">{milestone.icon}</span>
              </div>
              
              {/* Timeline Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{milestone.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{milestone.description}</p>
              </div>
              
              {/* Timeline Line (except for last item) */}
              {index < careerMilestones.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-blue-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
