import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - Team 3888 Greased Lightning</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <nav className="flex space-x-4">
          <Link href="/" passHref>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/resources" passHref>
            <a className="hover:underline">Resources</a>
          </Link>
          <Link href="/photos" passHref>
            <a className="hover:underline">Photos</a>
          </Link>
          <Link href="/robots" passHref>
            <a className="hover:underline">Robots</a>
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
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-center">Feel free to reach out to us with any questions or comments!</p>
      </main>
    </div>
  );
}
