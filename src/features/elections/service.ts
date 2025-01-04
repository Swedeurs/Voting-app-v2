import { Db } from "@/db";
import { createRepository } from "./repository";
import { NewElection, Election, ElectionUpdates } from "./types";
import { electionUpdates } from "./zod-validation";

export const createElectionService = (db: Db) => {
  const repository = createRepository(db);

  return {
    addElection: async (newElection: NewElection) => {
      await repository.addElection(newElection);
    },
    getAllElections: async (): Promise<Election[]> => {
      return await repository.getAllElections();
    },
    getElectionById: async (id: number): Promise<Election | undefined> => {
      const election = await repository.getElectionById(id);
      if (!election) {
        throw new Error(`Election with ID ${id} not found.`);
      }
      return election;
    },
    updateElection: async (id: number, rawData: ElectionUpdates) => {
      const updates = electionUpdates.parse(rawData);
      return await repository.updateElection(id, updates);
    },

    deleteElection: async (id: number) => {
      await repository.deleteElection(id);
    },
    getRepresentativesByElectionId: async (id: number) => {
      return await repository.getRepresentativesByElectionId(id);
    },

    updateElectionStatus: async (id: number, status: string) => {
      return await repository.updateElectionStatus(id, status);
    },
    addAlternativesToElection: async (id: number, alternatives: string) => {
      return await repository.addAlternativesToElection(id, alternatives);
    },
  };
};
