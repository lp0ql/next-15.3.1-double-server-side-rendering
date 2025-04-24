import Link from "next/link";
import { FRUITS, MUSIC_GENRES } from "./constants";
import "server-only";

export default function RealWorldSetupHome() {
  // Sample items for demonstration
  const sampleFruit = FRUITS[0];
  const sampleMusic = MUSIC_GENRES[0];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Next.js 15 Redirect Bug Demonstration
      </h1>

      <div className="prose mb-8">
        <p className="text-lg mb-4">
          This is a demonstration of a bug in Next.js 15 related to server-side
          rendering (SSR) and redirects.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">The Scenario</h2>
        <p>This setup simulates a real-world scenario where:</p>
        <ol className="list-decimal pl-6 mb-4">
          <li className="mb-1">
            We have two shops: a Fruit Shop and a Music Shop
          </li>
          <li className="mb-1">
            If someone comes to the Fruit Shop looking for music (by using a
            music genre as a parameter), they are redirected to the Music Shop
          </li>
          <li className="mb-1">
            Similarly, if someone goes to the Music Shop looking for fruits (by
            using a fruit name as a parameter), they would be redirected to the
            Fruit Shop
          </li>
        </ol>

        <h2 className="text-2xl font-semibold mt-6 mb-3">The Bug</h2>
        <p>
          When using Next.js 15, there is a bug with the SSR process and
          redirects:
        </p>
        <p className="font-medium my-3">
          When a user navigates to a page using Next&apos;s{" "}
          <code className="bg-gray-100 px-1">{"<Link>"}</code> component, and
          that page performs a{" "}
          <code className="bg-gray-100 px-1">redirect()</code> during SSR, the
          destination page gets server-side rendered twice.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Test Links</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Next.js Link Component Examples */}
          <div className="bg-white p-5 rounded-md shadow-sm">
            <h3 className="font-medium text-lg mb-3">
              Using Next.js Link Component
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              These links will trigger the bug.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">Fruit Shop Links:</h4>
                <ul className="list-disc pl-5 mb-2">
                  <li>
                    <Link
                      href={`/real-world-setup/fruit-shop?type=${sampleFruit}`}
                      className="text-blue-600 hover:underline"
                    >
                      Fruit Shop with fruit parameter (normal)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/real-world-setup/fruit-shop?type=${sampleMusic}`}
                      className="text-blue-600 hover:underline"
                    >
                      Fruit Shop with music parameter (triggers redirect bug)
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-1">Music Shop Links:</h4>
                <ul className="list-disc pl-5">
                  <li>
                    <Link
                      href={`/real-world-setup/music-shop?genre=${sampleMusic}`}
                      className="text-blue-600 hover:underline"
                    >
                      Music Shop with music parameter (normal)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/real-world-setup/music-shop?genre=${sampleFruit}`}
                      className="text-blue-600 hover:underline"
                    >
                      Music Shop with fruit parameter (triggers redirect bug)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regular Anchor Tag Examples */}
          <div className="bg-white p-5 rounded-md shadow-sm">
            <h3 className="font-medium text-lg mb-3">
              Using Regular Anchor Tags
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              These links won&apos;t trigger the bug.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-medium mb-1">Fruit Shop Links:</h4>
                <ul className="list-disc pl-5 mb-2">
                  <li>
                    <a
                      href={`/real-world-setup/fruit-shop?type=${sampleFruit}`}
                      className="text-blue-600 hover:underline"
                    >
                      Fruit Shop with fruit parameter (normal)
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/real-world-setup/fruit-shop?type=${sampleMusic}`}
                      className="text-blue-600 hover:underline"
                    >
                      Fruit Shop with music parameter (no bug with anchor)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-1">Music Shop Links:</h4>
                <ul className="list-disc pl-5">
                  <li>
                    <a
                      href={`/real-world-setup/music-shop?genre=${sampleMusic}`}
                      className="text-blue-600 hover:underline"
                    >
                      Music Shop with music parameter (normal)
                    </a>
                  </li>
                  <li>
                    <a
                      href={`/real-world-setup/music-shop?genre=${sampleFruit}`}
                      className="text-blue-600 hover:underline"
                    >
                      Music Shop with fruit parameter (no bug with anchor)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
