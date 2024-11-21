"use server";

import React from 'react';
import { client } from '../../sanity/lib/client';
import { ServicesProps } from '../types';
import Link from 'next/link';
import Contact from '../contact/page';

const fetchData = async (): Promise<ServicesProps> => {
  const services = await client.fetch(`*[_type == "services"] | order(_createdAt asc)`);
  return { services };
};

export default async function ServicesPage() {
  const data = await fetchData();

  return (
    <div className="mr-10">
      <section className="mt-10 mb-20">
        <div className="uppercase flex justify-end w-full">
          <div className="prose prose-sky text-right">
            <h2 className="m-0">Web Development</h2>
            <h1>Services</h1>
          </div>
        </div>
      </section>
      <section className="flex justify-start ml-10">
          <div className="prose mb-10">
            <ul className="grid grid-cols-1 list-none">
              {data.services.map((service, index) => (
                <li key={`${service._id}-${index}`} className="flex justify-between">
                  <span>{service.service}</span>
                  <span className="ml-20">{service.price}</span>
                </li>
              ))}
              <li className="flex justify-between">
                <span>Book a job on Fiverr</span>
                <Link href="https://www.fiverr.com/allenrusselldev/build-your-website-to-be-intuitive-and-cost-effective" className="text-blue-500 hover:scale-110 hover:text-gray-400 duration-500">Fiverr</Link>
              </li>
            </ul>
          </div>
        </section>
        <div className="mt-60">
          <Contact />
        </div>
    </div>
  )
}