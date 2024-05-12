import Link from "next/link";
import prisma from "../../../lib/prisma";
export default async function Authors() {
  const authors = await prisma.author.findMany({
    include: {
      books: true, // Include the author relation
    },
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="flex justify-center mt-8">
        <Link
          href="/authors"
          className="text-purple-500 hover:underline px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200 "
        >
          Authors
        </Link>
        <span className="mx-2 text-gray-500">|</span>
        <Link
          href="/books"
          className=" text-blue-500 hover:underline px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200"
        >
          Books
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 p-5 border-b-2 border-gray-300">
        Authors
      </h1>
      <table className="border border-gray-500 rounded-xl mt-8 w-full">
        <thead>
          <tr>
            <th className="p-2 border border-gray-500 text-gray-700 text-center">
              Name
            </th>
            <th className="p-2 border border-gray-500 text-gray-700 text-center">
              Books
            </th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author.id}>
              <td className="p-2 border border-gray-500 text-gray-700 text-center">
                <Link
                  href={`/authors/${author.id}`}
                  className="hover:underline"
                >
                  {author.name}
                </Link>
              </td>
              <td className="p-2 border border-gray-500 text-gray-700 text-center">
                <ul>
                  {author.books.map((book) => (
                    <li key={author.id}>
                      <Link
                        href={`/books/${book.id}`}
                        className="hover:underline"
                      >
                        {book.title}
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
