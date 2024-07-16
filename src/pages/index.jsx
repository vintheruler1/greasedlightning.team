import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-b from-blue-400 to-blue-600`}>
      <Head>
        <title>Team 3888 Greased Lightning</title>
        <meta name="description" content="Welcome to the homepage of FTC Team 3888, Greased Lightning!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`flex justify-between items-center p-4 'bg-gray-800 text-white`}>
        <h1 className="text-2xl font-bold">Team 3888</h1>
        <nav className="flex space-x-4">
          <Link href="/resources" passHref>
            <a className="hover:underline">Resources</a>
          </Link>
          <Link href="/photos" passHref>
            <a className="hover:underline">Photos</a>
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
        <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Welcome to Team 3888 Greased Lightning</h1>
        <p className={`text-xl text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
          We are an FTC Team from South Florida. Join us on our journey as we aim to innovate and inspire in the field of robotics!
        </p>
      </main>

      <footer className={`flex justify-center items-center p-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'}`}>
        <p>© 2024 Team 3888 Greased Lightning. All rights reserved.</p>
      </footer>
    </div>
  );
}
