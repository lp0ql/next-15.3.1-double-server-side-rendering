import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 flex flex-col items-center justify-center">
      <main className="max-w-4xl w-full">
        <div className="flex justify-center mb-8">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg mb-8">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Next.js 15 Double SSR Bug Demonstration
          </h1>

          <p className="mb-6 text-lg">
            This repository demonstrates a bug in Next.js 15 where using{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">
              redirect()
            </code>{" "}
            during Server-Side Rendering after client-side navigation with{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">
              {"<Link>"}
            </code>{" "}
            causes the destination page to be rendered twice.
          </p>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Reproduction Steps:</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Navigate to a page using Next.js {"<Link>"} component</li>
              <li>That page performs a redirect() during server rendering</li>
              <li>The destination page is rendered twice on the server</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Option - Minimal Demo */}
            <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-900">
              <h3 className="text-lg font-semibold mb-3">Minimal Demo</h3>
              <p className="mb-4 text-sm">
                A stripped-down example showing the exact issue with minimal
                code.
              </p>
              <Link
                href="/minimum-setup"
                className="w-full block text-center rounded-lg border border-solid border-transparent transition-colors py-3 px-4 bg-blue-600 text-white hover:bg-blue-700 font-medium"
              >
                View Minimal Demo
              </Link>
            </div>

            {/* Secondary Option - Real World Example */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3">Real World Example</h3>
              <p className="mb-4 text-sm">
                A practical example showing the bug in a realistic shopping
                scenario.
              </p>
              <Link
                href="/real-world-setup"
                className="w-full block text-center rounded-lg border border-solid transition-colors py-3 px-4 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium"
              >
                View Real World Demo
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
