import { FRUITS, MUSIC_GENRES } from "../constants";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import "server-only";

export default async function FruitShop({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log("FruitShop");

  const type = (await searchParams).type as string | undefined;

  // If no parameter is provided, return not found
  if (!type) {
    notFound();
  }

  // Convert to lowercase for comparison
  const lowerCaseType = type.toLowerCase();

  // If it's a fruit, display the page
  if (FRUITS.includes(lowerCaseType)) {
    return (
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Fruit Shop!</h1>
        <p className="text-xl mb-2">
          Your selected fruit:{" "}
          <span className="font-semibold">{lowerCaseType}</span>
        </p>
        <p className="mb-4">We have fresh {lowerCaseType} available for you.</p>
        <div className="mt-6 p-4 bg-green-100 rounded-lg">
          <p>Would you like to try other fruits?</p>
          <ul className="mt-2 list-disc pl-5">
            {FRUITS.filter((fruit) => fruit !== lowerCaseType).map((fruit) => (
              <li key={fruit}>
                <Link
                  href={`?type=${fruit}`}
                  className="text-blue-600 hover:underline"
                >
                  {fruit}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Link
            href={`/real-world-setup/music-shop?genre=${MUSIC_GENRES[0].toLowerCase()}`}
            className="text-blue-600 hover:underline"
          >
            Go to Music Shop
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

  // If it's a music genre, redirect to music shop
  if (MUSIC_GENRES.includes(lowerCaseType)) {
    redirect("/real-world-setup/music-shop?genre=" + lowerCaseType);
  }

  // Otherwise, return not found
  notFound();
}
