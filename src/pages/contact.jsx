import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us - Team 3888 Greased Lightning</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Contact Us</h1>
        <nav className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/resources" className="hover:underline">Resources</a>
          <a href="/photos" className="hover:underline">Photos</a>
          <a href="/robots" className="hover:underline">Robots</a>
          <a href="/sponsors" className="hover:underline">Sponsors</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-center">Feel free to reach out to us with any questions or comments!</p>
      </main>
    </div>
  );
}
