import Link from "next/link";
import prisma from "../../../../lib/prisma";
export default async function Author({ params }: { params: { id: string } }) {
  const id = params.id;
  const author = await prisma.author.findUnique({
    where: {
      id: id as string,
    },
    include: {
      books: true,
    },
  });
  // console.log(author);

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
      {author ? (
        <>
          <h1 className="text-4xl font-bold text-gray-800 p-5 border-b-2 border-gray-300">
            {author.name}
          </h1>
          <table className="border-collapse m-2">
            <thead>
              <tr>
                <th className="p-2 border border-gray-500 text-gray-700 text-center">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              <td className="p-2 border border-gray-500 text-gray-700 text-center">
                <ul>
                  {author.books.map((book) => (
                    <li key={author.id} className="m-4">
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
            </tbody>
          </table>
        </>
      ) : (
        <p>Author not found</p>
      )}
    </main>
  );
}
