import Link from "next/link";
import prisma from "../../../lib/prisma";

export default async function Books() {
  const books = await prisma.book.findMany({
    include: {
      authors: true, // Include the author relation
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-r from-gray-100 to-gray-200">
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
          className="text-purple-500 hover:underline px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200"
        >
          Books
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 p-5 border-b-2 border-gray-300">
        Library/Books
      </h1>
      <table className="border border-gray-500 rounded-xl mt-8 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-500 text-gray-700 text-center">
              Title
            </th>
            <th className="p-2 border border-gray-500 text-gray-700 text-center">
              Authors
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td className="p-2 border border-gray-500 text-gray-700 text-center">
                <Link href={`/books/${book.id}`} className="hover:underline">
                  {book.title}
                </Link>
              </td>
              <td className="p-2 border border-gray-500 text-gray-700 text-center">
                <ul>
                  {book.authors.map((author) => (
                    <li key={author.id}>
                      <Link
                        href={`/authors/${author.id}`}
                        className="hover:underline"
                      >
                        {author.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
