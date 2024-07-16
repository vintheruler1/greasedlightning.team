import Head from 'next/head';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Team 3888 Greased Lightning</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Blog</h1>
        <nav className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/resources" className="hover:underline">Resources</a>
          <a href="/photos" className="hover:underline">Photos</a>
          <a href="/robots" className="hover:underline">Robots</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="/sponsors" className="hover:underline">Sponsors</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-center">Read the latest updates and stories from Team 3888.</p>
      </main>
    </div>
  );
}
