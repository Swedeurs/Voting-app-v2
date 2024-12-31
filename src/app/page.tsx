import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-8">
      <h1 className="text-4xl text-gray-800 font-bold mb-12 text-center">
        Welcome to the Voting App
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/elections/1">
          <p className="bg-gray-800 text-gray-100 px-6 py-4 rounded-lg shadow-md text-center hover:bg-gray-700 hover:shadow-lg transition">
            View Elections
          </p>
        </Link>
        <Link href="/representatives">
          <p className="bg-gray-800 text-gray-100 px-6 py-4 rounded-lg shadow-md text-center hover:bg-gray-700 hover:shadow-lg transition">
            Manage Representatives
          </p>
        </Link>
        <Link href="/concluded">
          <p className="bg-gray-800 text-gray-100 px-6 py-4 rounded-lg shadow-md text-center hover:bg-gray-700 hover:shadow-lg transition">
            View Concluded Elections
          </p>
        </Link>
      </div>
    </div>
  );
}
