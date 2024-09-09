import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left">
      <h2 className="text-2xl md:text-4xl text-neon-spring"> Projetos Recentes</h2>

      <ul className="flex flex-wrap gap-16 justify-center xl:justify-start">
        {projects.map(({ name, image, url }, index) => (
          <li className="text-md relative hover:scale-110 transition-transform" key={name + index}>
            <Link className="hover:scale-110 transition-transform" href={url}>
              <Image
                src={image.url}
                alt={image.alt}
                width={400}
                height={200}
                className="rounded-2xl h-[16.75rem] mb-4"
              />
            </Link>
            <span>{name}</span>
            <div className="bg-galactic-purple rounded-full w-12 h-12 text-center flex justify-center items-center text-xl absolute bottom-[1.25rem] -right-[1.25rem]">
              <span>{index + 1}</span>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
