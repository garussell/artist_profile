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
  console.log("Data", data);
  return (
    <div className="container">
        <section>
            {data.roles.map(role => (
              <div key={role._id}>
                <h1>{role.title}</h1>
                <h2>{role.subtitle}</h2>
              </div>
            ))}
        </section>

        <section>
          <ul>
            {data.careerSummaries.map(summary => (
              <li key={summary._id}>{summary.content[0]?.children[0]?.text}</li>
            ))}
          </ul>
          <div>
            <div><Link href="/about">Learn More</Link></div>
            <div><Link href="/contact">Contact</Link></div>
          </div>
        </section>

        <section>
          <ul>
            {data.traits.map(trait => (
              <li key={trait._id}>{trait.trait}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>What I Offer</h2>
          <hr />
          <ul>
            {data.offerings.map(offering => (
              <li key={offering._id}>
                <h2>{offering.title}</h2>
                <div>
                  <PortableText value={offering.content} />
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>featured work</h2>
          <ul>
            {data.featured.map(feature => (
              <li key={feature._id}>
                <h2>{feature.title}</h2>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  // className="absolute inset-0 object-cover h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" 
                />
              </li>
            ))}
          </ul>
          <div><Link href="/projects">More</Link></div>
        </section>

        <section>
          <h2>Services</h2>
          <ul>
            {data.services.map(service => (
              <li key={service._id}>
                {service.service} - {service.price} 
              </li>
            ))}
            <li>Book a job on Fiverr - <Link href="https://www.fiverr.com/allenrusselldev/build-your-website-to-be-intuitive-and-cost-effective">Fiverr</Link></li>
          </ul>
        </section>
    </div>
  );
}
