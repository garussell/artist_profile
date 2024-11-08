import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faGitlab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container text-center">
        <div className="grid sm:grid-cols-3 p-4">
          <div className="mt-4">
            <Link href="/" className="text-2xl font-bold border-4 p-2 rounded-lg">
              Allen Russell
            </Link>
            <h2 className="mt-6 ml-2">Full Stack Developer</h2>
          </div>
          <div className="mt-4 text-left ">
            <Link href="/about" className="block mb-2">About</Link>
            <Link href="/blog" className="block mb-2">Blog</Link>
            <Link href="/services" className="block mb-2">Services</Link>
            <Link href="/projects" className="block mb-2">Projects</Link>
            <Link href="/contact" className="block mb-2">Contact</Link>
          </div>
          <div className="mt-4 text-3xl text-right">
            <Link href="https://www.linkedin.com/in/garyallenrusselljr/" className="block mb-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link href="https://github.com/garussell" className="block mb-2">
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href="https://gitlab.com/garussell" className="block mb-2">
              <FontAwesomeIcon icon={faGitlab} />
            </Link>
            <Link href="mailto:allenrusselldev@gmail.com" className="block mb-2">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
        </div>
        <hr className="w-screen" />
        <div className="text-center mt-8 text-sm">
          <p>Gary Allen Russell Jr 2024 &copy;</p>
        </div>
      </div>
    </footer>
  );
}
