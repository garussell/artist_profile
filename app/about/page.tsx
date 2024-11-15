

import Image from 'next/image';
import profilePic from '../../public/profilePic.png'; 
import digitalEarth from '../../public/digitalEarth.jpg';
import { client } from '../../sanity/lib/client';
import { CurriculumVitae } from '../types';

const fetchData = async (): Promise<CurriculumVitae> => {
  const curriculumVitae = await client.fetch(`*[_type == "curriculumVitae"]`);
  return curriculumVitae[0]; 
};

export default async function About() {
  const data = await fetchData();
  console.log('Fetched data:', data); 

  return (
    <section className="min-h-screen flex flex-col">
      <div className="mx-auto p-4 w-full">
        <div className="prose w-full max-w-none grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h3 className="italic mb-4">My name is</h3>
            <h1 className="mb-6">Gary Allen</h1>
            <h1 className="mb-6">Russell Jr</h1>
            <h3 className="italic">My friends call me Allen</h3>
          </div>
          <div className="flex">
            <Image 
              src={profilePic} 
              alt="Allen Russell" 
              // className="rounded-full"
              // width={200}
              // height={200}
            />
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="prose max-w-4xl mx-auto p-4 text-center">
          <h2 className="mb-4">Curriculum Vitae</h2>
          
          {/* Render intro content */}
          <div>
            {data?.intro ? (
              data.intro.map((block, blockIndex) => (
                block.children ? (
                  block.children.map((child, childIndex) => (
                    // Render the text content from each child
                    <p key={`${blockIndex}-${childIndex}`}>{child.text}</p>
                  ))
                ) : (
                  <p key={blockIndex}>No text content in this block</p>
                )
              ))
            ) : (
              <p>No intro content found.</p> // Fallback if no intro content
            )}
          </div>
          
          <div className="flex justify-center mt-10">
            <Image 
              src={digitalEarth} 
              alt="Digital Earth" 
              className="shadow-lg"
              // width={600}
              // height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
