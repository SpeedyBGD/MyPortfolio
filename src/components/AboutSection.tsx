import Image from 'next/image';

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git', icon: '📝' },
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12 lg:mb-16">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Picture */}
          <div className="flex justify-center lg:justify-start order-first lg:order-last">
            <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px] rounded-full overflow-hidden">
              <Image
                src="/images/japortfolio.jpeg"
                alt="Profile picture"
                width={384}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-4 sm:space-y-6 order-last lg:order-first">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              I have a background in Civil Engineering with 22 years of experience in the construction industry. 
              I transitioned to software engineering in 2023, and since then I've been focused on building 
              web applications and expanding my skill set.
            </p>
            
            {/* Skills */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Technologies I work with:</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
