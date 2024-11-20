"use client";

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { BlogPost, BlogContentProps } from '../../types';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

const BlogContent: React.FC<BlogContentProps> = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      client
        .fetch(`*[_type == "blogPost" && slug.current == $slug][0]`, { slug })
        .then((data) => setPost(data))
        .catch(console.error);
    }
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <article className="max-w-screen-lg mx-auto p-8 mt-20">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={post.content} />
      <div className="border-2 rounded hover:bg-gray-200 hover:text-black duration-500 w-14 mt-4 p-2">
        <Link href="/blog" passHref>Back</Link>
      </div>
    </article>
  );
};

export default BlogContent;