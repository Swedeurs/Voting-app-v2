"use client";

import { useState } from "react";
import { Election } from "@/features/elections/types";
import { Representative } from "@/features/representatives/types";

type Props = {
  election: Election;
  representatives: Representative[];
  initialVotes: Record<number, number>;
  electionRepresentatives: any;
};

export function ElectionDetail({
  election,
  representatives,
  initialVotes,
}: Props) {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (repId: number) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [repId]: prevVotes[repId] + 1,
    }));
  };

  const isConcluded = election.electionStatus === "Concluded";

  return (
    <section className="min-w-72 p-6 bg-gray-100 rounded shadow-md text-black">
      <h1 className="text-2xl font-bold mb-40">{election.electionName}</h1>
      <p className="mb-2">
        <span className="font-semibold">Description:</span>{" "}
        {election.electionDescription}
      </p>
      <p className="mb-4">
        <span className="font-semibold">Status:</span> {election.electionStatus}
      </p>
      <h2 className="text-xl font-semibold mb-3">Representatives:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {representatives.map((rep) => (
          <div key={rep.id} className="border p-4 rounded shadow bg-white">
            <p>
              <span className="font-semibold">Name:</span> {rep.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {rep.email}
            </p>
            <p>
              <span className="font-semibold">Votes:</span> {votes[rep.id]}
            </p>
            {!isConcluded && (
              <button
                onClick={() => handleVote(rep.id)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
              >
                Vote
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
