import Link from "next/link";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 p-5 border-b-2 border-gray-300">
        Library
      </h1>
      <p className="text-center text-gray-700 mt-4">
        Welcome to our library! Explore our collection of books and discover
        talented authors.
      </p>
      <div className="flex justify-center mt-8">
        <Link
          href="/authors"
          className="text-blue-500 hover:underline px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200"
        >
          Authors
        </Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link
          href="/books"
          className="text-blue-500 hover:underline px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200"
        >
          Books
        </Link>
      </div>
    </main>
  );
}
