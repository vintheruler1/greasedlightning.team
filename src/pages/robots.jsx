import Head from 'next/head';

export default function Robots() {
  return (
    <div>
      <Head>
        <title>Robots - Team 3888 Greased Lightning</title>
      </Head>
      <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Robots</h1>
        <nav className="flex space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/resources" className="hover:underline">Resources</a>
          <a href="/photos" className="hover:underline">Photos</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="/sponsors" className="hover:underline">Sponsors</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-16">
        <h1 className="text-4xl font-bold mb-4">Robots</h1>
        <p className="text-xl text-center">Discover the robots we have built and competed with over the years.</p>
      </main>
    </div>
  );
}
