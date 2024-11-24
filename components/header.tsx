"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const NavItem = ({ href, label, isActive }: { href: string; label: string; isActive: (path: string) => boolean}) => {
    return (
      <li className="relative">
        <Link
          href={href}
          className={`hover:text-gray-400 ${isActive(href) ? 'text-white' : ''}`}
        >
          {label}
        </Link>
        {isActive(href) && (
          <motion.span
            layoutId="underline"
            className="absolute left-0 right-0 h-1 bg-white"
            style={{ bottom: -4 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </li>
    );
  };

  return (
    <header className="text-white">
      <nav className="mr-4">
        <ul className="flex justify-between items-center p-8">
          <li className="mr-auto">
            <Link
              href="/"
              className={`hover:text-black hover:bg-gray-200 duration-500 border-4 p-2 rounded-lg ${isActive('/') ? 'bg-gray-200 text-black' : ''}`}
            >
              Allen Russell
            </Link>
          </li>
          {/* Mobile Hamburger */}
          <li className="hidden sm:block">
            <button
              onClick={toggleMenu}
              className="text-white p-2 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </li>
          {/* Desktop Nav */}
          <div className="sm:hidden flex space-x-4">
            <NavItem href="/about" label="About" isActive={isActive} />
            <NavItem href="/blog" label="Blog" isActive={isActive} />
            <NavItem href="/services" label="Services" isActive={isActive} />
            <NavItem href="/projects" label="Projects" isActive={isActive} />
            <NavItem href="/contact" label="Contact" isActive={isActive} />
          </div>
        </ul>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-black bg-opacity-90 z-10">
            {/* Close Button */}
            <div className="pb-16">
            <button
              onClick={closeMenu}
              className="text-white px-2 border border-white absolute top-2 right-6 focus:outline-none m-8"
            >
              X
            </button>
            </div>
            <ul className="flex flex-col items-end justify-center h-full space-y-4 m-8">
              <li onClick={closeMenu}>
                <Link href="/about" className={`hover:text-gray-400 ${isActive('/about') ? 'text-white' : ''}`}>About</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/blog" className={`hover:text-gray-400 ${isActive('/blog') ? 'text-white' : ''}`}>Blog</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/services" className={`hover:text-gray-400 ${isActive('/services') ? 'text-white' : ''}`}>Services</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/projects" className={`hover:text-gray-400 ${isActive('/projects') ? 'text-white' : ''}`}>Projects</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/contact" className={`hover:text-gray-400 ${isActive('/contact') ? 'text-white' : ''}`}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <hr className="w-screen" />
    </header>
  );
}


