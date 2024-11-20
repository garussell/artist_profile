"use client";

import React, { useEffect, useState } from "react";
import { BlogPost } from "../types";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

const fetchData = async (): Promise<BlogPost[]> => {
  const blogPosts = await client.fetch(`*[_type == "blogPost"]`);
  return blogPosts;
};

export default function Blog() {
  const [data, setData] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchData().then(setData).catch(console.error);
  }, []);

  return (
    <div className="mr-10">
      <section className="mt-10 mb-20">
        <div className="uppercase flex justify-end w-full">
          <div className="prose prose-sky text-right">
            <h2 className="m-0">My Thoughts,</h2>
            <h1>Exactly</h1>
          </div>
        </div>
      </section>
      <hr className="w-screen" />

      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-10">
          {data.map((post) => (
            <div 
              key={post._id} 
              className="border border-white bg-slate-400 p-4 rounded shadow-md"
            >
              <p className="text-lg font-semibold text-white">{post.title}</p>
              <p className="text-sm text-gray-800">{post.excerpt}</p>
              <p className="text-xs text-gray-600 mt-2">{new Date(post.publishedAt).toLocaleDateString()}</p>
              <Link href={`/blog/${post.slug.current}`} passHref>
                <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-white hover:text-black duration-500">
                  Read More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
