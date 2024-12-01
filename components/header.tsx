"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { ThemeToggle } from './themeToggle';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => pathname === path;
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const NavItem = ({ href, label, isActive }: { href: string; label: string; isActive: (path: string) => boolean }) => {
    // Track the theme
    const [theme, setTheme] = useState<string>('light');
  
    useEffect(() => {
      // Check the theme from localStorage or default to light mode
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
    }, []);
  
    return (
      <li className="relative">
        <Link
          href={href}
          className={`hover:text-gray-400 dark:hover:text-gray-400 dark:text-white text-black ${isActive(href) ? 'text-black dark:text-white' : ''}`}
        >
          {label}
        </Link>
        {isActive(href) && (
          <motion.span
            layoutId="underline"
            className={`absolute left-0 right-0 h-1 bg-black ${theme === 'dark' ? 'dark:bg-white' : 'bg-black'}`}
            style={{ bottom: -4 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </li>
    );
  };

  return (
    <header className=""> 
      <nav className="mr-4">
        <div className="flex justify-between items-center p-8 list-none">
          <div className="mr-auto">
            <Link
              href="/"
              className={`
                hover:text-white dark:hover:text-black
                text-black dark:text-black
                hover:bg-black dark:hover:bg-white
                duration-500 border-4 p-2 rounded-lg
                ${isActive('/') 
                  ? 'bg-black text-white dark:bg-white dark:text-black dark:hover:bg-black' 
                  : 'text-black bg-white dark:text-white dark:bg-black dark:hover:bg-white'}
              `}
            >
              Allen Russell
            </Link>
          </div>
          <div className="mr-20">
            <ThemeToggle />
          </div>
          {/* Mobile Hamburger */}
          <div className="hidden sm:block">
            <button
              onClick={toggleMenu}
              className="text-black dark:text-white p-2 focus:outline-none"
              aria-label="Open Menu"
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
          </div>
          {/* Desktop Nav */}
          <div className="sm:hidden flex space-x-4">
            <NavItem href="/about" label="About" isActive={isActive} />
            <NavItem href="/blog" label="Blog" isActive={isActive} />
            <NavItem href="/services" label="Services" isActive={isActive} />
            <NavItem href="/projects" label="Projects" isActive={isActive} />
            <NavItem href="/contact" label="Contact" isActive={isActive} />
          </div>
        </div>
        {/* Mobile Nav */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-90 z-10">
            {/* Close Button */}
            <div className="pb-16">
            <button
              onClick={closeMenu}
              className="text-black dark:text-white px-2 border border-black dark:border-white absolute top-2 right-6 focus:outline-none m-8"
            >
              X
            </button>
            </div>
            <ul className="flex flex-col items-end justify-center h-full space-y-4 m-8">
              <li onClick={closeMenu}>
                <Link href="/about" className={`hover:text-gray-400 dark:hover:text-gray-400 ${isActive('/about') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>About</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/blog" className={`hover:text-gray-400 dark:hover:text-gray-400 ${isActive('/blog') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>Blog</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/services" className={`hover:text-gray-400 dark:hover:text-gray-400 ${isActive('/services') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>Services</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/projects" className={`hover:text-gray-400 dark:hover:text-gray-400 ${isActive('/projects') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>Projects</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/contact" className={`hover:text-gray-400 dark:hover:text-gray-400 ${isActive('/contact') ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <hr className="w-screen" />
    </header>
  );
}
