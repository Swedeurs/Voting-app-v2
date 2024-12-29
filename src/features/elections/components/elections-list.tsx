import Link from "next/link";
import { electionService } from "@/features/elections/instance";
import HomeButton from "./home-button";

export default async function ElectionsList() {
  const elections = await electionService.getAllElections();

  const sortedElections = elections.sort(
    (a, b) => new Date(a.electionDate).getTime() - new Date(b.electionDate).getTime()
  );

  if (sortedElections.length === 0) {
    return <p className="text-center text-gray-600">No elections found.</p>;
  }

  return (
    <div className=" my-8 bg-white">
      <HomeButton />
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Elections List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedElections.map((election) => (
          <li
            key={election.id}
            className="p-4 border border-gray-200 rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-200 relative"
          >
            <div className="absolute top-0 left-0 h-full w-2 bg-green-500 rounded-l-lg"></div>
            <div className="pl-4">
              <h2 className="text-xl font-semibold text-gray-700">{election.electionName}</h2>
              <p className="text-sm text-gray-500 mt-2">
                Date: {new Date(election.electionDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">Status: {election.electionStatus}</p>
              <Link
                href={`/elections/${election.id}`}
                className="block mt-4 text-green-600 hover:text-green-700 font-medium underline"
              >
                View Details →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
