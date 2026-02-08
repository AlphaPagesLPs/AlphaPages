import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-20 px-4 bg-background">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Soluções sob medida para quem busca {' '}
                            <span className="text-yellow-400">autoridade</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
