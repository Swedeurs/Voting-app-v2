"use client";
import { useState } from "react";

import { createRepresentativeRepository } from "@/features/representatives/repository";
import { db } from "@/db";

import { Election } from "@/features/elections/types";
import { Representative } from "@/features/representatives/types";
import { createElectionService } from "../service";

const representativeRepository = createRepresentativeRepository(db);
type DetailProps = {
  election: Election;
  representatives: Representative[];
  initialVotes: Record<number, number>;
};

type Props = {
  id: number;
};

export default async function ElectionDetailPage({ id }: Props) {
  const electionService = createElectionService(db);
  const election = await electionService.getElectionById(id);
  const representatives =
    await representativeRepository.getAllRepresentatives();

  if (!election) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">Election Not Found</h1>
        <p>Please check the election ID.</p>
      </div>
    );
  }


  const electionRepresentatives = representatives.filter(
    (rep) => rep.id === id, 
  );

  const initialVotes = electionRepresentatives.reduce<Record<number, number>>(
    (acc, rep) => {
      acc[rep.id] = Math.floor(Math.random() * 10) + 1; 
      return acc;
    },
    {},
  );

  return (
    <ElectionDetail
      election={election}
      representatives={electionRepresentatives}
      initialVotes={initialVotes}
    />
  );
}


export function ElectionDetail({
  election,
  representatives,
  initialVotes,
}: DetailProps) {
  const [votes, setVotes] = useState(initialVotes);

  const handleVote = (repId: number) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [repId]: prevVotes[repId] + 1,
    }));
  };

  return (
    <section className="min-w-72 p-6 bg-gray-100 rounded shadow-md">
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
              <span className="font-semibold">Votes:</span> {votes[rep.id]}
            </p>
            <button
              onClick={() => handleVote(rep.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
