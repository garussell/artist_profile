import Link from 'next/link';

export default function Header() {
  return (
    <header className="text-white">
      <nav className="mr-4">
        <ul className="flex justify-between items-center p-8">
          <li className="mr-auto">
            <Link href="/" className="hover:text-black hover:bg-gray-200 duration-500 border-4 p-2 rounded-lg">Allen Russell</Link>
          </li>
          <div className="flex space-x-4">
            <li>
              <Link href="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-400">Blog</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400">Services</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-400">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
      <hr className="w-screen" />
    </header>
  );
}
