import { db } from "@/db";
import TopNav from "@/components/top-nav";
import { SeperationDiv } from "@/features/representatives/components/view-representatives";
import { createElectionRepository } from "../repository";

export async function ConcludedElectionsPage() {
  const repository = createElectionRepository(db);
  const elections = await repository.getAllElections();

  const concludedElections = elections.filter(
    (election) => election.electionStatus === "Concluded",
  );

  return (
    <SeperationDiv>
      <TopNav />
      <h1 className="text-3xl font-bold text-center border-b py-4 text-gray-800">
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
    </SeperationDiv>
  );
}
