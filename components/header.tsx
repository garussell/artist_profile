"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="text-white">
      <nav className="mr-4">
        <ul className="flex justify-between items-center p-8">
          <li className="mr-auto">
            <Link href="/" className={`hover:text-black hover:bg-gray-200 duration-500 border-4 p-2 rounded-lg ${isActive('/') ? 'bg-gray-200 text-black' : ''}`}>Allen Russell</Link>
          </li>
          <div className="flex space-x-4">
            <li className="relative">
              <Link href="/about" className={`hover:text-gray-400 ${isActive('/about') ? 'text-white' : ''}`}>About</Link>
              {isActive('/about') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-1 bg-white"
                  style={{ bottom: -4 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
            <li className="relative">
              <Link href="/blog" className={`hover:text-gray-400 ${isActive('/blog') ? 'text-white' : ''}`}>Blog</Link>
              {isActive('/blog') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-1 bg-white"
                  style={{ bottom: -4 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
            <li className="relative">
              <Link href="/services" className={`hover:text-gray-400 ${isActive('/services') ? 'text-white' : ''}`}>Services</Link>
              {isActive('/services') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-1 bg-white"
                  style={{ bottom: -4 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
            <li className="relative">
              <Link href="/projects" className={`hover:text-gray-400 ${isActive('/projects') ? 'text-white' : ''}`}>Projects</Link>
              {isActive('/projects') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-1 bg-white"
                  style={{ bottom: -4 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
            <li className="relative">
              <Link href="/contact" className={`hover:text-gray-400 ${isActive('/contact') ? 'text-white' : ''}`}>Contact</Link>
              {isActive('/contact') && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 h-1 bg-white"
                  style={{ bottom: -4 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </li>
          </div>
        </ul>
      </nav>
      <hr className="w-screen" />
    </header>
  );
}
