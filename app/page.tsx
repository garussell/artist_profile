"use server";

export const revalidate = 60; 

import React from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../sanity/lib/client';
import { HomepageData } from './types';
import Link from 'next/link';
import { TypedObject } from 'sanity';
import Image from 'next/image';
import homePic from '../public/homePic.png';
import profilePic from '../public/profilePic.png';

const fetchData = async (): Promise<HomepageData> => {
  try {
    const [roles, profileSummary, traits, offerings, featured, services] = await Promise.all([
      client.fetch(`*[_type == "role"]`),
      client.fetch(`*[_type == "profileSummary"]`),
      client.fetch(`*[_type == "traits"]`),
      client.fetch(`*[_type == "offerings"]`),
      client.fetch(`*[_type == "featured"] {title, "image": image.asset->url}`),
      client.fetch(`*[_type == "services"] | order(_createdAt asc)`),
    ]);
    
    return {
      roles,
      profileSummary,
      traits,
      offerings,
      featured,
      services,
    };


  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data');
  }
};

export default async function Home() {
  const data = await fetchData();
  
  return (
    <div>
      {/* Role and Title */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Column: Image */}
        <section className="flex justify-start mr-20 align-start sm:mr-0">
          <Image 
            src={homePic} 
            alt="Allen Russell" 
            className="max-w-[100%] max-h-auto object-contain"
          />
        </section>

        {/* Right Column: Text */}
        <section className="mt-10 mb-20 h-auto sm:h-full w-full md:w-1/2">
          {data.roles.map((role, index) => (
            <div key={`${role._id}-${index}`} className="uppercase flex flex-col md:flex-row justify-start w-full">
              <div className="prose prose-sky prose-sm md:prose-md lg:prose-lg text-right p-8">
                <h1>{role.title}</h1>
                <h2>{role.subtitle}</h2>
              </div>
            </div>
          ))}
        </section>
      </div>

      <hr className="w-full" />

      {/* Profile Summary */}
      <section>
        <div className="list-none flex flex-col sm:flex-row text-center m-10 mx-auto w-3/4">
          {data.profileSummary.map(summary => (
            <div key={summary._id}>
            <PortableText
              value={summary.content as unknown as TypedObject[]}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-4">{children}</p> 
                  ),
                },
              }}
            />
          </div>
          ))}
        </div>
        <div className="flex justify-center text-center">
          <div className="mr-12 border-2 p-3 rounded-lg bg-white text-black hover:bg-black hover:text-white duration-500">
            <Link href="/services">Services</Link>
          </div>
          <div className="border-4 p-2 rounded-lg hover:bg-gray-200 hover:text-black duration-500">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>

      {/* Traits */}
      <section className="h-screen sm:h-screen flex items-center justify-start">
        <div className="prose prose-sm md:prose-md lg:prose-lg m-20 flex flex-col items-center justify-center w-full">
          {data.traits.map((trait, index) => (
            <h1 key={`${trait._id}-${index}`}>{trait.trait}</h1>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="flex justify-end mr-20 sm:mr-0">
        <div className="prose prose-sky prose-sm md:prose-md lg:prose-lg p-2">
          <h2>What I Offer</h2>
          <hr className="w-full" />
          <ul className="list-none">
            {data.offerings.map((offering, index) => (
              <li key={`${offering._id}-${index}`}>
                <h3 className="-translate-x-8 sm:-translate-x-4">{offering.title}</h3>
                <div>
                  <PortableText value={offering.content} />
                </div>
                <hr className="-translate-x-8 w-full sm:-translate-x-4" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured Work */}
      {/* Desktop View */}
      <div className="hidden md:block">
        <section className="min-h-screen flex flex-col justify-start items-left mt-40">
          <div className="prose text-left max-w-screen-lg w-full">
            <h3 className="mt-20 mb-10 ml-8 sm:mt-0">Featured Work</h3>
            <ul className="list-none space-y-6">
            {data.featured.map((feature, index) => (
              <li key={`${feature._id}-${index}`} className="relative group flex items-center justify-between">
                <div className="w-2/3">
                  <h2 className="m-0 hover:text-gray-600 hover:scale-105 duration-500">
                    {feature.title}
                  </h2>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt=""
                  role="presentation"
                  className="absolute px-40 inset-0 object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  style={{
                    transform: `translateX(50%) translateY(${
                      index === 0 ? '-30%' :
                      index === 1 ? '-60%' :
                      index === 2 ? '-90%' : '0%'
                    })`,
                  }}
                />
              </li>
            ))}
            </ul>
          </div>
          <div className="m-8 border-4 p-2 rounded-lg hover:bg-gray-200 hover:text-black duration-500 w-16">
            <Link href="/projects">More</Link>
          </div>
        </section>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden mb-40">
        <section className="min-h-screen flex flex-col justify-start items-left mt-40">
          <div className="prose text-left max-w-screen-lg w-full">
            <h3 className="mt-20 mb-10 ml-8 sm:mt-0">Featured Work</h3>
            <ul className="list-none space-y-6">
              {data.featured.map((feature, index) => (
                <li key={`${feature._id}-${index}`} className="relative flex flex-col items-start">
                  <h2 className="m-0 mb-2 hover:text-gray-600 hover:scale-105 duration-500">{feature.title}</h2>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full object-cover mb-2"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="m-8 border-4 p-2 rounded-lg hover:bg-gray-200 hover:text-black duration-500 w-16">
            <Link href="/projects">More</Link>
          </div>
        </section>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-10 items-center mt-40">
        {/* Image Column */}
        <div className="flex justify-center">
          <Image 
            src={profilePic} 
            alt="Allen Russell" 
            className="max-w-[60%] max-h-[800px] object-contain"
          />
        </div>
        {/* Services Column */}
        <div>
          <section>
            <div className="prose mb-10">
              <h2>Services</h2>
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
      </div>
    </div>
  );
}
