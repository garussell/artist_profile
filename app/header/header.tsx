import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto p-4">
        <ul className="flex justify-between items-center">
          <li className="mr-auto">
            <Link href="/" className="hover:text-gray-400">Bear and the Beasts</Link>
          </li>
          <div className="flex space-x-4">
            <li>
              <Link href="/shows" className="hover:text-gray-400">Shows</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gray-400">Gallery</Link>
            </li>
            <li>
              <Link href="/merch" className="hover:text-gray-400">Merch</Link>
            </li>
            <li>
              <Link href="/discography" className="hover:text-gray-400">Discography</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
