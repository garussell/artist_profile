"use server";

import React from 'react';
import { client } from '../../sanity/lib/client';
import { ServicesProps } from '../types';
import Contact from '../contact/page';
import Image from 'next/image';
import profilePic from '../../public/profilePic.png';

const fetchData = async (): Promise<ServicesProps> => {
  const services = await client.fetch(`*[_type == "services"] | order(_createdAt asc)`);
  return { services };
};

export default async function ServicesPage() {
  const data = await fetchData();

  return (
    <div className="mr-10 sm:mr-2">
      <section className="mt-10 mb-20">
        <div className="uppercase flex justify-end w-full sm:justify-center">
          <div className="prose prose-sky prose-sm md:prose-md lg:prose-lg text-right sm:text-center">
            <h2 className="m-0">Drums & Percussion</h2>
            <h1>Services</h1>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 items-center">
        {/* Services Column */}
        <div>
          <section>
            <div className="prose mb-10">
              <ul className="list-none">
                {data.services.map((service, index) => (
                  <li 
                    key={`${service._id}-${index}`} 
                    className="flex justify-between mb-2"
                  >
                    <span>{service.service}</span>
                    <span className="ml-10">{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        {/* Image Column */}
        <div className="flex justify-center">
          <Image 
            src={profilePic} 
            alt="Allen Russell" 
            className="max-w-[60%] max-h-[800px] object-contain"
          />
        </div>
      </div>
      <div className="mt-60">
        <Contact />
      </div>
    </div>
  );
}
