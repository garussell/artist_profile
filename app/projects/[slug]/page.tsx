"use client";

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { ProfessionalProject, PersonalProject, TuringProject } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { useParams } from 'next/navigation';
import { PortableText } from 'next-sanity';

type Project = ProfessionalProject | PersonalProject | TuringProject;

const fetchProjectBySlug = async (slug: string): Promise<Project | null> => {
  const project = await client.fetch(
    `
      *[_type in ["professionalProject", "personalProject", "turingProject"] && slug.current == $slug][0]
    `,
    { slug }
  );
  return project;
};

const ProjectShow: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (slug) {
      fetchProjectBySlug(slug)
        .then((data) => setProject(data))
        .catch(console.error);
    }
  }, [slug]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <section className="flex flex-col items-center mt-20">
        <div className="w-3/4">
          <Image
            src={urlFor(project.heroImage).url()}
            alt={project.name}
            width={1200}
            height={800}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full max-w-screen-lg p-8 mt-10 prose prose-lg">
          <h1 className="text-8xl sm:text-5xl font-bold text-center">{project.name}</h1>
          <div className="mt-8 text-left">
            <p>{project.description}</p>
            <Link href={project.link} target="_blank" className="text-blue-500 hover:scale-110 hover:text-gray-400 duration-500 flex justify-center">Link to Project</Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-20 sm:mt-0">
        <div className="flex flex-wrap w-full max-w-screen-xl items-center gap-2">
          <div className="w-full md:w-1/2 p-4 mb-8 md:mb-0">
            <Image
              src={urlFor(project.secondaryImage).url()}
              alt={`${project.name} Secondary Image`}
              width={600}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-8 prose">
            <h2 className="text-2xl sm:text-4xl font-bold">Goals</h2>
            <PortableText value={project.goals} />
            <h2 className="text-2xl sm:text-4xl font-bold mt-4">Technologies</h2>
            <PortableText value={project.technologies} />
          </div>
        </div>
      </section>
      <div className="flex justify-center m-20">
        <div className="border-2 rounded hover:bg-gray-200 hover:text-black duration-500 w-34 p-2">
          <Link href="/projects" passHref>Back to Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectShow;
