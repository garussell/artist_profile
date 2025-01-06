"use client";

import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Contact from '../contact/page';
import { MusicProject } from '../types';

const musicProjects: MusicProject[] = await client.fetch(`
  *[_type == "musicProject"]{
    _id,
    name,
    description,
    image,
    video,
    slug,
  }
`);

export default function ProjectsPage() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [data, setData] = useState<MusicProject[] | null>(null);

  useEffect(() => {
    setData(musicProjects);
  }, []);

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index === selectedProjectIndex ? null : index);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-10 sm:ml-4">
      <section className="mt-10 mb-20">
        <div className="uppercase flex justify-start w-full">
          <div className="prose text-left">
            <h2 className="m-0">recent</h2>
            <h1 className="text-7xl">Projects</h1>
          </div>
        </div>
      </section>
      
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Projects Section - Desktop */}
        <section className="flex flex-col items-end mb-60">
          <div className="prose m-20">
            {/* <h2 className="text-right">Turing Projects</h2> */}
            <div className="relative">
              <ul className="list-none space-y-6">
                {data.map((project, index) => (
                  <li 
                    key={`${project._id}-${index}`} 
                    className="relative group flex items-center justify-between cursor-pointer"
                    onClick={() => handleProjectClick(index)}
                  >
                    <h3 className={`m-0 hover:text-gray-600 hover:scale-110 duration-500 text-right ${selectedProjectIndex === index ? 'text-gray-200' : ''}`}>
                      {project.name}
                    </h3>
                  </li>
                ))}
              </ul>
              {selectedProjectIndex !== null && (
                <div 
                  className="absolute right-full mr-4 w-full p-4 z-10 transform -translate-x-full -translate-y-full"
                >
                  <Image
                    src={urlFor(data[selectedProjectIndex].image).url()}
                    alt={data[selectedProjectIndex].name}
                    width={400}
                    height={400}
                  />
                  <p>{data[selectedProjectIndex].description.slice(0, 150)}{data[selectedProjectIndex].description.length > 150 && '...'}</p>
                  <Link href={`/projects/${data[selectedProjectIndex].slug.current}`} passHref>
                    <button className="mt-4 px-4 py-2 bg-black border-2 text-white rounded hover:bg-white hover:text-black duration-500">
                      Read More
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mt-40">
        {/* Projects Section - Mobile */}
        <section className="flex flex-col mb-40 mt-40">
          <div className="prose prose-sm md:prose-md lg:prose-lg mb-4">
            <h1 className="m-0">Turing</h1>
            <h1>Projects</h1>
            <ul className="list-none space-y-4">
              {data.map((project, index) => (
                <li key={`${project._id}-${index}`} className="relative">
                  <h3 
                    className={`cursor-pointer ${selectedProjectIndex === index ? 'text-gray-200' : ''}`}
                    onClick={() => handleProjectClick(index)}
                  >
                    {project.name}
                  </h3>
                  {selectedProjectIndex === index && (
                    <div className="mt-2">
                      <Image
                        src={urlFor(project.image).url()}
                        alt={project.name}
                        width={300}
                        height={300}
                        className="mb-2"
                      />
                      <p>{project.description.slice(0, 150)}{project.description.length > 150 && '...'}</p>
                      <Link href={`/projects/${project.slug.current}`} passHref>
                        <button className="text-lg mt-2 px-4 py-2 bg-black border-2 text-white rounded hover:bg-white hover:text-black duration-500">
                          Read More
                        </button>
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Contact />
    </div>
  );
}
