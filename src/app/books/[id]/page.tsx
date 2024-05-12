import Link from "next/link";
import prisma from "../../../../lib/prisma";
export default async function Book({ params }: { params: { id: string } }) {
  const id = params.id;
  const book = await prisma.book.findUnique({
    where: {
      id: id as string,
    },
    include: {
      authors: true,
    },
  });
  //   console.log(book);

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
          className="text-blue-500 hover:underline px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200"
        >
          Books
        </Link>
      </div>
      {book ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 p-5 border-b-2 border-gray-300">
            {book.title}
          </h1>
          <table className="border-collapse m-2">
            <thead>
              <tr>
                <th className="p-2 border border-gray-500 text-gray-700 text-center">
                  Auhtors
                </th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </main>
  );
}
