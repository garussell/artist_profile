"use client";

import { faLinkedin,faYoutube } from "@fortawesome/free-brands-svg-icons";
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
            {/* <h2 className="mt-6 ml-2">Drums & Percussion</h2> */}
          </div>
          <div className="sm:-mt-12 text-left sm:ml-4 sm:flex sm:flex-col sm:justify-center sm:text-right">
            <Link href="/services" className="block mb-2 hover:text-gray-400 duration-500">Services</Link>
            <Link href="/projects" className="block mb-2 hover:text-gray-400 duration-500">Projects</Link>
            <Link href="/contact" className="block mb-2 hover:text-gray-400 duration-500">Contact</Link>
          </div>
          <div className="mt-4 text-3xl text-right">
            <Link href="https://www.linkedin.com/in/garyallenrusselljr/" className="block mb-2 hover:text-gray-400 duration-500" aria-label="Link to LinkedIn Profile">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://www.youtube.com/@garyallenrusselljrdrums" className="block mb-2 hover:text-gray-400 duration-500" aria-label="Link to GitHub Profile">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link href="mailto:allenteachesdrums@gmail.com" className="block mb-2 hover:text-gray-400 duration-500" aria-label="Link to Allen's gmail will open mailto service">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </div>
        <hr className="w-screen" />
        <div className="relative mt-8 text-sm flex items-center justify-between px-4">
          <div className="ml-4">
            <ThemeToggle />
          </div>
          <p className="absolute left-1/2 transform -translate-x-1/2">
            Gary Allen Russell Jr {new Date().getFullYear()} &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}
