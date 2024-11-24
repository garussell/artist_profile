"use client";

import { faLinkedin, faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "../app/globals.css";
import { ThemeToggle } from "./themeToggle";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-8">
      <div className="text-center">
        <div className="grid grid-cols-3 p-4 m-2">
          <div className="flex flex-col w-1/3 sm:w-full sm:p-2 mt-4">
            <Link href="/" className="text-2xl hover:text-white dark:hover:text-black
                text-black dark:text-white
                hover:bg-black dark:hover:bg-white
                duration-500 border-4 p-2 rounded-lg">
              Allen Russell
            </Link>
            <h2 className="mt-6 ml-2">Full Stack Developer</h2>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
          <div className="mt-4 text-left sm:ml-4 sm:flex sm:flex-col sm:justify-center sm:text-right">
            <Link href="/about" className="block mb-2 hover:text-gray-400 duration-500">About</Link>
            <Link href="/blog" className="block mb-2 hover:text-gray-400 duration-500">Blog</Link>
            <Link href="/services" className="block mb-2 hover:text-gray-400 duration-500">Services</Link>
            <Link href="/projects" className="block mb-2 hover:text-gray-400 duration-500">Projects</Link>
            <Link href="/contact" className="block mb-2 hover:text-gray-400 duration-500">Contact</Link>
          </div>
          <div className="mt-4 text-3xl text-right">
            <Link href="https://www.linkedin.com/in/garyallenrusselljr/" className="block mb-2 hover:text-gray-400 duration-500">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/garussell" className="block mb-2 hover:text-gray-400 duration-500">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://gitlab.com/garussell" className="block mb-2 hover:text-gray-400 duration-500">
              <FontAwesomeIcon icon={faGitlab} />
            </Link>
            <Link href="mailto:allenrusselldev@gmail.com" className="block mb-2 hover:text-gray-400 duration-500">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </div>
        <hr className="w-screen" />
        <div className="text-center mt-8 text-sm">
          <p>Built with Next/Sanity</p>
          <p>Gary Allen Russell Jr 2024 &copy;</p>
        </div>
      </div>
    </footer>
  );
}
