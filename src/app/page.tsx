import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl text-black font-bold mb-8">Welcome to the Voting App</h1>
      <div className="space-y-4">
        <Link href="/elections/1">
          <p className="block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md text-center hover:bg-blue-700">
            View Elections
          </p>
        </Link>
        <Link href="/representatives">
          <p className="block bg-green-600 text-white px-6 py-3 rounded-md shadow-md text-center hover:bg-green-700">
            Manage Representatives
          </p>
        </Link>
        <Link href="/concluded">
          <p className="block bg-yellow-600 text-white px-6 py-3 rounded-md shadow-md text-center hover:bg-yellow-700">
            View Concluded Elections
          </p>
        </Link>
      </div>
    </div>
  );
}
