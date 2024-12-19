import { Db } from "@/db";
import type { Election, ElectionUpdates, NewElection } from "./types";
import { electionUpdates } from "./zod-validation";
import { createRepository } from "./repository";

export const createElectionService = (db: Db) => {
    const repository = createRepository(db);
  
    return {
      addElection: async (newElection: NewElection) => {
        await repository.addElection(newElection);
      },
      getAllElections: async (): Promise<Election[]> => {
        return await repository.getAllElections();
      },
      deleteAllElections: async () => {
        await repository.deleteAllElections();
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
    };
  };
  
