import Link from "next/link";
import { JSX } from "react";
import { electionService } from "..";

export async function ElectionsPage(): Promise<JSX.Element> {
  const elections = await electionService.getAllElections();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Elections</h1>
      <ul className="mt-4">
        {elections.map((election) => (
          <li key={election.id} className="mb-2">
            <Link href={`/elections/${election.id}`}>
              <p className="text-blue-600 hover:underline">
                {election.electionName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
