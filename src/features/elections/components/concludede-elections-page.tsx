import { db } from "@/db";
import { createRepository } from "../repository";

export default async function ConcludedElectionsPage() {
  const repository = createRepository(db);
  const elections = await repository.getAllElections();
  const concludedElections = elections.filter(
    (election) => election.electionStatus === "Concluded",
  );

  return (
    <div>
      <h1>Concluded Elections</h1>
      {concludedElections.map((election) => (
        <div key={election.id}>
          <h2>{election.electionName}</h2>
          <p>{election.electionDescription}</p>
          <p>Status: {election.electionStatus}</p>
        </div>
      ))}
    </div>
  );
}
