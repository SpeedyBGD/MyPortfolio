import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Text content */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
            Hi, I&apos;m <span className="text-blue-600">Drazen Manojlovic</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
            Software Engineer & Frontend Developer
          </h2>
          
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed max-w-lg">
            I specialize in building exceptional digital experiences. Currently, I&apos;m focused on improving my skills in software engineering and frontend development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              View Projects
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
        
        {/* Right side - Illustration */}
        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image
              src="/images/istockphoto-1220008323-612x612.jpg"
              alt="Profile illustration"
              fill
              sizes="(max-width: 768px) 320px, 384px"
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
