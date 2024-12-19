"use client";


import { electionService } from "../instance";
import { Election } from "../types";
import { EditElection } from "./edit-elections";

type Props = { election: Election };

export default async function ElectionsOverviewPage(election: Props) {
  const elections = await electionService.getAllElections();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Elections Overview
      </h1>
      <div className="space-y-4">
        {elections.map((election) => (
          <div
            key={election.id}
            className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition-shadow duration-200"
          >
            <EditElection election={election} />
          </div>
        ))}
      </div>
    </div>
  );
}
