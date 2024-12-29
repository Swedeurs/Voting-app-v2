import { db } from "@/db";
import { createRepository } from "../repository";
import HomeButton from "./home-button";

export default async function ConcludedElectionsPage() {
  const repository = createRepository(db);
  const elections = await repository.getAllElections();

  const concludedElections = elections.filter(
    (election) => election.electionStatus === "Concluded",
  );

  return (
    <div className="space-y-8 p-8 bg-gray-100 min-h-screen">
      <HomeButton />
      <h1 className="text-3xl font-bold text-center border-b pb-4 text-gray-800">
        Concluded Elections
      </h1>
      {concludedElections.length > 0 ? (
        <div className="space-y-4">
          {concludedElections.map((election) => (
            <div
              key={election.id}
              className="relative border-l-4 border-red-500 bg-white shadow-sm rounded-md p-4"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {election.electionName}
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                {election.electionDescription}
              </p>
              <p className="text-sm font-medium text-red-600 mt-2">
                Status: {election.electionStatus}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No concluded elections found.
        </p>
      )}
    </div>
  );
}
