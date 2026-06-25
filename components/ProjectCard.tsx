import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects'; // Проверь путь, если используешь alias @

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      <div className="relative h-48 w-full bg-gray-200">
        {/* Заглушка, если картинки нет */}
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            style={{ objectFit: 'cover' }} 
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <Link 
            href={project.link} 
            target="_blank"
            className="inline-block text-blue-600 hover:text-blue-800 font-semibold text-sm"
          >
            Посмотреть код &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}