import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Team 3888 Greased Lightning</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Blog</h1>
        <nav className="flex space-x-4">
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/resources" legacyBehavior>
            <a className="hover:underline">Resources</a>
          </Link>
          <Link href="/photos" legacyBehavior>
            <a className="hover:underline">Photos</a>
          </Link>
          <Link href="/robots" legacyBehavior>
            <a className="hover:underline">Robots</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:underline">Contact Us</a>
          </Link>
          <Link href="/sponsors" legacyBehavior>
            <a className="hover:underline">Sponsors</a>
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-center">Read the latest updates and stories from Team 3888.</p>
      </main>
    </div>
  );
}
