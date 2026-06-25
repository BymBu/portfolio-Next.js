import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-gray-900">Вячеслав Ерофеев</h1>
        <p className="text-xl text-gray-600 mt-4">Junior Fullstack Developer</p>
        
        <div className="relative w-48 h-48 mt-8 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <Image 
            src="/me.jpg" 
            alt="Вячеслав Ерофеев" 
            fill
            style={{ objectFit: 'cover' }}
            priority // Загружаем сразу, так как это выше fold
          />
        </div>
      </section>

       <section id="projects" className="py-20 bg-gray-40 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Мои проекты</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

    </main>
  );
}