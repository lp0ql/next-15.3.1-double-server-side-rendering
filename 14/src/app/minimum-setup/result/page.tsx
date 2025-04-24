import Link from "next/link";
import "server-only";

export default function Result() {
  console.log("Minimum Setup Result");

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Result Page</h1>

      <div className="p-6 mb-6">
        <p className="mb-3">
          <strong>Bug Confirmed!</strong> Please check your browser&apos;s
          developer console.
        </p>
        <p className="mb-2">
          If you are running this in Next.js 15, you should see{" "}
          <strong>&quot;Minimum Setup Result&quot;</strong> logged{" "}
          <strong>twice</strong> in the console when you navigated here using
          Next.js{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">{`<Link>`}</code>{" "}
          component and were redirected.
        </p>
      </div>

      <div className="mt-6">
        <Link href="/minimum-setup" className="text-blue-600 hover:underline">
          Try again with Next Link
        </Link>
      </div>

      <div className="mt-6">
        <a href="/minimum-setup" className="text-blue-600 hover:underline">
          Try again with Anchor Tag
        </a>
      </div>

      <div className="mt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Top Page
        </Link>
      </div>
    </div>
  );
}
