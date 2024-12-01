"use client";

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { BlogPost } from '../../types';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const post = await client.fetch(
    `
      *[_type == "blogPost" && slug.current == $slug][0]
    `,
    { slug }
  );
  return post;
};

const BlogContent: React.FC = () => {
  const params = useParams(); 
  const slug = params.slug as string; 
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      fetchBlogPostBySlug(slug)
        .then((data) => setPost(data))
        .catch(console.error);
    }
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  // Filter out the title block so it doesn't appear twice
  const filteredContent = post.content.filter(
    (block) => block.style !== 'h1' || (block.children as { text: string }[])[0].text !== post.title
  );

  const components: PortableTextComponents = {
    types: {
      code: ({ value }) => (
        <pre className="bg-gray-100 p-4 rounded-md text-gray-800 whitespace-pre-wrap">
          <code>{value.code}</code>
        </pre>
      ),
    },
    block: {
      h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">{children}</h1>,
      h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">{children}</h2>,
      h3: ({ children }) => <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">{children}</h3>,
      normal: ({ children }) => <p className="text-black dark:text-white mb-4">{children}</p>,
    },
    marks: {
      code: ({ children }) => <code className="bg-gray-200 dark:bg-gray-500 px-1 py-0.5 rounded text-black dark:text-white whitespace-pre-wrap">{children}</code>,
      strong: ({ children }) => <strong className="font-semibold text-black dark:text-white">{children}</strong>,
      link: ({ children, value }) => (
        <a href={value.href} className="text-blue-500 hover:text-blue-700 underline">
          {children}
        </a>
      ),
    },
    list: {
      number: ({ children }) => <ol className="list-decimal list-inside text-black dark:text-white">{children}</ol>,
      bullet: ({ children }) => <ul className="list-disc list-inside text-black dark:text-white">{children}</ul>,
    },
    listItem: {
      number: ({ children }) => <li className="mb-2">{children}</li>,
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
    },
  };

  return (
    <article className="max-w-screen-lg mx-40 p-8 mt-20 sm:mx-0">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">{post.title}</h1>
      <p className="text-gray-500 mb-6">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={filteredContent} components={components} />
      <div className="border-2 rounded hover:bg-gray-200 hover:text-black duration-500 w-14 mt-4 p-2">
        <Link href="/blog" passHref>
          Back
        </Link>
      </div>
    </article>
  );
};

export default BlogContent;
