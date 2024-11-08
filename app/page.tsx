import React from 'react';
import { client } from '../sanity/lib/client';
import { Data } from './types';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const fetchData = async (): Promise<Data> => {
  const [roles, careerSummaries, traits, offerings, featured, services] = await Promise.all([
    client.fetch(`*[_type == "role"]`),
    client.fetch(`*[_type == "careerSummary"]`),
    client.fetch(`*[_type == "traits"]`),
    client.fetch(`*[_type == "offerings"]`),
    client.fetch(`*[_type == "featured"] {title, "image": image.asset->url}`),
    client.fetch(`*[_type == "services"]`),
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
  // console.log("Data", data);
  return (
    <div className="container">
        <section className="w-full mt-10 mb-20">
            {data.roles.map((role, index) => (
              <div key={`${role._id}-${index}`} className="uppercase flex justify-end w-full">
                <div className="prose prose-sky text-right">
                  <h1>{role.title}</h1>
                  <h2>{role.subtitle}</h2>
                </div>
              </div>
            ))}
        </section>
        <hr className="w-screen" />
        <section>
          <div className="list-none flex justify-center text-center m-10">
            {data.careerSummaries.map(summary => (
              <p key={summary._id}>{summary.content[0]?.children[0]?.text}</p>
            ))}
          </div>
          <div className="flex justify-center text-center ml-12">
            <div className="mr-12 border-2 p-2 rounded-lg bg-white text-black hover:bg-gray-200"><Link href="/about">Learn More</Link></div>
            <div className="border-4 p-2 rounded-lg hover:bg-gray-200 hover:text-black"><Link href="/contact">Contact</Link></div>
          </div>
        </section>

        <section>
          <div className="prose m-20">
            {data.traits.map((trait, index) => (
              <h2 key={`${trait._id}-${index}`}>{trait.trait}</h2>
            ))}
          </div>
        </section>

        <section className="flex justify-end">
          <div className="prose prose-sky">
            <h3>What I Offer</h3>
            <hr className="w-full" />
            <ul className="list-none">
              {data.offerings.map((offering, index) => (
                <li key={`${offering._id}-${index}`}>
                  <h4>{offering.title}</h4>
                  <div>
                    <PortableText value={offering.content} />
                  </div>
                  <hr className="w-full" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="min-h-screen flex flex-col justify-center items-center">
          <div className="prose text-center max-w-screen-lg w-full">
            <h3 className="mt-20 mb-20 ml-6">featured work</h3>
            <ul className="list-none space-y-6">
              {data.featured.map((feature, index) => (
                <li key={`${feature._id}-${index}`} className="relative group">
                  <h2 className="m-0">{feature.title}</h2>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="absolute inset-0 object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4"><Link href="/projects">More</Link></div>
          </div>
        </section>


        <section>
          <h2>Services</h2>
          <ul className="list-none">
            {data.services.map((service, index) => (
              <li key={`${service._id}-${index}`}>
                {service.service} - {service.price} 
              </li>
            ))}
            <li>Book a job on Fiverr - <Link href="https://www.fiverr.com/allenrusselldev/build-your-website-to-be-intuitive-and-cost-effective">Fiverr</Link></li>
          </ul>
        </section>
    </div>
  );
}
