import Link from "next/link";


export default function Footer() {
  return (
    <footer>
      <div>
        <Link href="/">Allen Russell</Link>
      </div>
      <h2>Full Stack Developer</h2>
      <div>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div>
        <Link href="https://www.linkedin.com/in/garyallenrusselljr/">LinkedIn</Link>
        <Link href="https://github.com/garussell">GitHub</Link>
        <Link href="https://gitlab.com/garussell">GitLab</Link>
        <Link href="mailto:allenrusselldev@gmail.com>">Email</Link>
      </div>
      <div>Gary Allen Russell Jr 2024&copy;</div>
    </footer>
  )
}