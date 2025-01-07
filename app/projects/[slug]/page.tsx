"use client";

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { MusicProject } from '../../types';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { useParams } from 'next/navigation';

const fetchProjectBySlug = async (slug: string): Promise<MusicProject | null> => {
  const project = await client.fetch(
    `
      *[_type in ["musicProject"] && slug.current == $slug][0]
    `,
    { slug }
  );
  return project;
};

const ProjectShow: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState<MusicProject | null>(null);

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
        <div className="w-2/3">
          <Image
            src={urlFor(project.image).url()}
            alt={project.name}
            width={1200}
            height={800}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="w-full max-w-screen-lg p-8 mt-10 prose prose-lg">
          <h3 className="text-6xl sm:text-5xl font-bold text-center">{project.name}</h3>
          <div className="mt-8 text-center">
            <h5>{project.description}</h5>
            {project.video && (
              <div className="aspect-w-16 aspect-h-9 mt-20 flex justify-center">
                <iframe
                  width="960"
                  height="540"
                  src={project.video}
                  title={project.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, web-share"
                  referrerPolicy='strict-origin-when-cross-origin'
                  frameBorder="0"
                  allowFullScreen>
                </iframe>
              </div>
            )}
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
