"use client";

import React, { useState, useEffect } from 'react';
import { client } from '../../sanity/lib/client';
import { Projects } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

const fetchData = async (): Promise<Projects> => {
  const proProjects = await client.fetch(`
    *[_type == "professionalProject"]{
      _id,
      name,
      description,
      heroImage,
      link,
      slug,
    }
  `);
  const persProjects = await client.fetch(`
    *[_type == "personalProject"]{
      _id,
      name,
      description,
      heroImage,
      link,
      slug,
    }
  `);
  const turingProjects = await client.fetch(`
    *[_type == "turingProject"]{
      _id,
      name,
      description,
      heroImage,
      link,
      slug,
    }
  `);

  return { 
    proProjects,
    persProjects,
    turingProjects,
  };
}

export default function ProjectsPage() {
  const [data, setData] = useState<Projects | null>(null);  
  const [selectedProProjectIndex, setSelectedProProjectIndex] = useState<number | null>(null);
  const [selectedPersProjectIndex, setSelectedPersProjectIndex] = useState<number | null>(null);
  const [selectedTuringProjectIndex, setSelectedTuringProjectIndex] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };

    getData();
  }, []);

  const handleProClick = (index: number) => {
    setSelectedProProjectIndex(index);
  };

  const handlePersClick = (index: number) => {
    setSelectedPersProjectIndex(index);
  };

  const handleTuringClick = (index: number) => {
    setSelectedTuringProjectIndex(index);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-10">
      <section className="mt-10 mb-20">
        <div className="uppercase flex justify-start w-full">
          <div className="prose text-left">
            <h2 className="m-0">selected</h2>
            <h1>Projects</h1>
          </div>
        </div>
      </section>
      
      {/* Professional Projects Section */}
      <section className="flex flex-col items-end mb-60">
        <div className="prose m-20">
          <h2 className="text-right">Professional Projects</h2>
          <div className="relative">
            <ul className="list-none space-y-6">
              {data.proProjects.map((project, index) => (
                <li 
                  key={`${project._id}-${index}`} 
                  className="relative group flex items-center justify-between cursor-pointer"
                  onClick={() => handleProClick(index)}
                >
                  <h3 className={`m-0 hover:text-gray-600 hover:scale-110 duration-500 text-right ${selectedProProjectIndex === index ? 'text-gray-200' : ''}`}>
                    {project.name}
                  </h3>
                </li>
              ))}
            </ul>
            {selectedProProjectIndex !== null && (
              <div 
                className="absolute right-full mr-4 w-full p-4 z-10"
                style={{ 
                  transform: `translateX(-100%) translateY(-100%)`,
                }}
              >
                <Image
                  src={urlFor(data.proProjects[selectedProProjectIndex].heroImage).url()}
                  alt={data.proProjects[selectedProProjectIndex].name}
                  width={400}
                  height={400}
                />
                <p>{data.proProjects[selectedProProjectIndex].description.slice(0, 150)}{data.proProjects[selectedProProjectIndex].description.length > 150 && '...'}</p>
                <Link href={`/projects/${data.proProjects[selectedProProjectIndex].slug.current}`} passHref>
                  <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-white hover:text-black duration-500">
                    Read More
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Personal Projects Section */}
      <section className="flex flex-col items-start mb-60">
        <div className="prose m-20">
          <h2 className="text-left">Personal Projects</h2>
          <div className="relative">
            <ul className="list-none space-y-6">
              {data.persProjects.map((project, index) => (
                <li 
                  key={`${project._id}-${index}`} 
                  className="relative group flex items-center justify-between cursor-pointer"
                  onClick={() => handlePersClick(index)}
                >
                  <h3 className={`m-0 hover:text-gray-600 hover:scale-110 duration-500 text-left ${selectedPersProjectIndex === index ? 'text-gray-200' : ''}`}>
                    {project.name}
                  </h3>
                </li>
              ))}
            </ul>
            {selectedPersProjectIndex !== null && (
              <div 
                className="absolute left-full ml-4 w-full p-4 z-10"
                style={{ 
                  transform: `translateX(100%) translateY(-100%)`,
                }}
              >
                <Image
                  src={urlFor(data.persProjects[selectedPersProjectIndex].heroImage).url()}
                  alt={data.persProjects[selectedPersProjectIndex].name}
                  width={300}
                  height={300}
                />
                <p>{data.persProjects[selectedPersProjectIndex].description.slice(0, 150)}{data.persProjects[selectedPersProjectIndex].description.length > 150 && '...'}</p>
                <Link href={`/projects/${data.persProjects[selectedPersProjectIndex].slug.current}`} passHref>
                  <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-white hover:text-black duration-500">
                    Read More
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Turing Projects Section */}
      <section className="flex flex-col items-end mb-60">
        <div className="prose m-20">
          <h2 className="text-right">Turing Projects</h2>
          <div className="relative">
            <ul className="list-none space-y-6">
              {data.turingProjects.map((project, index) => (
                <li 
                  key={`${project._id}-${index}`} 
                  className="relative group flex items-center justify-between cursor-pointer"
                  onClick={() => handleTuringClick(index)}
                >
                  <h3 className={`m-0 hover:text-gray-600 hover:scale-110 duration-500 text-right ${selectedTuringProjectIndex === index ? 'text-gray-200' : ''}`}>
                    {project.name}
                  </h3>
                </li>
              ))}
            </ul>
            {selectedTuringProjectIndex !== null && (
              <div 
                className="absolute right-full mr-4 w-full p-4 z-10"
                style={{ 
                  transform: `translateX(-100%) translateY(-100%)`,
                }}
              >
                <Image
                  src={urlFor(data.turingProjects[selectedTuringProjectIndex].heroImage).url()}
                  alt={data.turingProjects[selectedTuringProjectIndex].name}
                  width={400}
                  height={400}
                />
                <p>{data.turingProjects[selectedTuringProjectIndex].description.slice(0, 150)}{data.turingProjects[selectedTuringProjectIndex].description.length > 150 && '...'}</p>
                <Link href={`/projects/${data.turingProjects[selectedTuringProjectIndex].slug.current}`} passHref>
                  <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-white hover:text-black duration-500">
                    Read More
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
