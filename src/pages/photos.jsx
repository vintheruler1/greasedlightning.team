import Head from 'next/head';
import Link from 'next/link';

export default function Photos() {
  return (
    <div>
      <Head>
        <title>Photos - Team 3888 Greased Lightning</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Photos</h1>
        <nav className="flex space-x-4">
          <Link href="/" passHref>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/resources" passHref>
            <a className="hover:underline">Resources</a>
          </Link>
          <Link href="/robots" passHref>
            <a className="hover:underline">Robots</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="hover:underline">Contact Us</a>
          </Link>
          <Link href="/sponsors" passHref>
            <a className="hover:underline">Sponsors</a>
          </Link>
          <Link href="/blog" passHref>
            <a className="hover:underline">Blog</a>
          </Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-16">
        <h1 className="text-4xl font-bold mb-4">Photos</h1>
        <p className="text-xl text-center">Check out some amazing photos from our competitions and events!</p>
      </main>
    </div>
  );
}
