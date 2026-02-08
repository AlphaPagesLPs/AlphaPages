
import { Project } from '../types/index';

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="w-full overflow-hidden relative bg-gray-800">
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 z-10">
                    <span className="bg-black/70 backdrop-blur-md text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
        </div>
    );
}
