import Link from "next/link";
import { electionService } from "@/features/elections/instance"; // Import your service

export default async function ElectionsList() {

  const elections = await electionService.getAllElections();


  const sortedElections = elections.sort(
    (a, b) => new Date(a.electionDate).getTime() - new Date(b.electionDate).getTime()
  );

  if (sortedElections.length === 0) {
    return <p className="text-center text-gray-600">No elections found.</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold text-center mb-6">Elections List</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedElections.map((election) => (
          <li key={election.id} className="p-4 border rounded-lg shadow">
            <h2 className="text-lg font-bold">{election.electionName}</h2>
            <p className="text-sm text-gray-600">
              Date: {new Date(election.electionDate).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">Status: {election.electionStatus}</p>
            <Link
              href={`/elections/${election.id}`}
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
