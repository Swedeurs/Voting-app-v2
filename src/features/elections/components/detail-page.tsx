"use client";

import { useState } from "react";
import { Election } from "@/features/elections/types";
import { Representative } from "@/features/representatives/types";

type Props = {
  election: Election;
  representatives: Representative[];
  initialVotes: { representatives: Record<number, number>; alternatives: Record<string, number> };
};

export function ElectionDetail({ election, representatives, initialVotes }: Props) {
  const [votes, setVotes] = useState(initialVotes);
  const [votedForRepresentative, setVotedForRepresentative] = useState<number | null>(null);
  const [votedForAlternative, setVotedForAlternative] = useState<string | null>(null);

  const handleRepresentativeVote = (repId: number) => {
    if (votedForRepresentative !== null) {
      alert("You have already voted for a representative.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure? You can only vote for one representative."
    );
    if (!confirmed) {
      return;
    }

    setVotes((prevVotes) => ({
      ...prevVotes,
      representatives: {
        ...prevVotes.representatives,
        [repId]: (prevVotes.representatives[repId] || 0) + 1,
      },
    }));

    setVotedForRepresentative(repId);
  };

  const handleAlternativeVote = (alternative: string) => {
    if (votedForAlternative !== null) {
      alert("You have already voted for an alternative.");
      return;
    }

    const confirmed = window.confirm(
      "Are you sure? You can only vote for one alternative."
    );
    if (!confirmed) {
      return;
    }

    setVotes((prevVotes) => ({
      ...prevVotes,
      alternatives: {
        ...prevVotes.alternatives,
        [alternative]: (prevVotes.alternatives[alternative] || 0) + 1,
      },
    }));

    setVotedForAlternative(alternative);
  };

  const isConcluded = election.electionStatus === "Concluded";
  const alternatives = JSON.parse(election.alternatives || "[]");

  return (
    <section className="min-w-72 p-6 bg-gray-100 rounded shadow-md text-black">
      <h1 className="text-2xl font-bold mb-4">{election.electionName}</h1>
      <p className="mb-2">
        <span className="font-semibold">Description:</span> {election.electionDescription}
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
              <span className="font-semibold">Votes:</span> {votes.representatives[rep.id] || 0}
            </p>
            {!isConcluded && (
              <button
                onClick={() => handleRepresentativeVote(rep.id)}
                className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2 ${
                  votedForRepresentative !== null ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={votedForRepresentative !== null}
              >
                Vote
              </button>
            )}
          </div>
        ))}
      </div>


      <h2 className="text-xl font-semibold mt-6 mb-3">Alternatives:</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {alternatives.map((alt: string, index: number) => (
          <div key={index} className="border p-4 rounded shadow bg-white">
            <p>
              <span className="font-semibold">Alternative:</span> {alt}
            </p>
            <p>
              <span className="font-semibold">Votes:</span> {votes.alternatives[alt] || 0}
            </p>
            {!isConcluded && (
              <button
                onClick={() => handleAlternativeVote(alt)}
                className={`bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2 ${
                  votedForAlternative !== null ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={votedForAlternative !== null}
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
