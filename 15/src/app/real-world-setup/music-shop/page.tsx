import { MUSIC_GENRES, FRUITS } from "../constants";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import "server-only";

export default async function MusicShop({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("MusicShop");
  const genre = (await searchParams).genre as string | undefined;

  // If no parameter is provided, return not found
  if (!genre) {
    notFound();
  }

  // Convert to lowercase for comparison
  const lowerCaseGenre = genre.toLowerCase();

  // If it's a fruit name, redirect to fruit shop
  if (FRUITS.includes(lowerCaseGenre)) {
    redirect("/real-world-setup/fruit-shop?type=" + lowerCaseGenre);
  }

  // Check if it's a valid music genre
  if (!MUSIC_GENRES.includes(lowerCaseGenre)) {
    notFound();
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Music Shop!</h1>
      <p className="text-xl mb-2">
        Your selected genre:{" "}
        <span className="font-semibold">{lowerCaseGenre}</span>
      </p>
      <p className="mb-4">Enjoy the best {lowerCaseGenre} music here.</p>

      <div className="mt-6 p-4 bg-blue-100 rounded-lg">
        <p>Would you like to try other genres?</p>
        <ul className="mt-2 list-disc pl-5">
          {MUSIC_GENRES.filter((g) => g !== lowerCaseGenre).map((g) => (
            <li key={g}>
              <Link
                href={`?genre=${g}`}
                className="text-blue-600 hover:underline"
              >
                {g}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <Link
          href={`/real-world-setup/fruit-shop?type=${FRUITS[0].toLowerCase()}`}
          className="text-blue-600 hover:underline"
        >
          Go to Fruit Shop
        </Link>
      </div>

      <div className="mt-6">
        <Link
          href="/real-world-setup"
          className="text-blue-600 hover:underline"
        >
          Return to Real world setup
        </Link>
      </div>

      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Top Page
        </Link>
      </div>
    </div>
  );
}
