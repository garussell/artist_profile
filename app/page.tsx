"use server";

import React from 'react';
import { PortableText } from '@portabletext/react';
import { client } from '../sanity/lib/client';
import { Data } from './types';
import Link from 'next/link';

const fetchData = async (): Promise<Data> => {
  const [roles, careerSummaries, traits, offerings, featured, services] = await Promise.all([
    client.fetch(`*[_type == "role"]`),
    client.fetch(`*[_type == "careerSummary"]`),
    client.fetch(`*[_type == "traits"]`),
    client.fetch(`*[_type == "offerings"]`),
    client.fetch(`*[_type == "featured"] {title, "image": image.asset->url}`),
    client.fetch(`*[_type == "services"] | order(_createdAt asc)`),
  ]);

  return {
    roles,
    careerSummaries,
    traits,
    offerings,
    featured,
    services,
  };
};

export default async function Home() {
  const data = await fetchData();

  return (
    <div>
      {/* Role and Title */}
      <section className="mt-10 mb-20 h-screen sm:h-full">
        {data.roles.map((role, index) => (
          <div key={`${role._id}-${index}`} className="uppercase flex flex-col md:flex-row justify-end w-full">
            <div className="prose prose-sky prose-sm md:prose-md lg:prose-lg text-right p-8">
              <h1>{role.title}</h1>
              <h2>{role.subtitle}</h2>
            </div>
          </div>
        ))}
      </section>
      <hr className="w-full" />

      {/* Career Summary */}
      <section>
        <div className="list-none flex flex-col sm:flex-row text-center m-10 mx-auto w-3/4">
          {data.careerSummaries.map(summary => (
            <p key={summary._id}>{summary.content[0]?.children[0]?.text}</p>
          ))}
        </div>
        <div className="flex justify-center text-center">
          <div className="mr-12 border-2 p-3 rounded-lg bg-white text-black hover:bg-black hover:text-white duration-500">
            <Link href="/about">Learn More</Link>
          </div>
          <div className="border-4 p-2 rounded-lg hover:bg-gray-200 hover:text-black duration-500">
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </section>

      {/* Traits */}
      <section className="h-screen sm:h-auto flex items-center justify-start">
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
      <section className="min-h-screen flex flex-col justify-start items-left mt-40">
        <div className="prose text-left max-w-screen-lg w-full">
          <h3 className="mt-20 mb-10 ml-8 sm:mt-0">Featured Work</h3>
          <ul className="list-none space-y-6">
            {data.featured.map((feature, index) => (
              <li key={`${feature._id}-${index}`} className="relative group flex items-center justify-between">
                <h2 className="m-0 hover:text-gray-600 hover:scale-105 duration-500">{feature.title}</h2>
                {/* eslint-disable */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="ml-4 absolute inset-0 object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-300 ease-in-out"
                  style={{
                    transform: `translateX(80%) translateY(-${index * 30}%) sm:translateX(-120%)`,
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

      {/* Services */}
      <section className="flex justify-end mr-20 mb-40">
        <div className="prose prose-sm md:prose-md lg:prose-lg mb-10 p-2">
          <h2>Services</h2>
          <ul className="grid grid-cols-1 list-none">
            {data.services.map((service, index) => (
              <li key={`${service._id}-${index}`} className="flex justify-between">
                <span>{service.service}</span>
                <span className="ml-20 sm:hidden">{service.price}</span>
              </li>
            ))}
            <li className="flex justify-between">
              <span>Book a job on Fiverr</span>
              <Link
                href="https://www.fiverr.com/allenrusselldev/build-your-website-to-be-intuitive-and-cost-effective"
                className="text-blue-500 hover:scale-110 hover:text-gray-400 duration-500"
              >
                Fiverr
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
