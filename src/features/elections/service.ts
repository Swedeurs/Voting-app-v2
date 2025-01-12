import { Db } from "@/db";
import { createElectionRepository } from "./repository";
import { Election, NewElection, ElectionUpdates } from "./types";

export function createElectionService(db: Db) {
  const repository = createElectionRepository(db);

  return {
    async addElection(data: NewElection) {
      return repository.addElection(data);
    },
    async getAllElections(): Promise<Election[]> {
      const elections = await repository.getAllElections();
      return elections.map((election) => ({
        ...election,
        alternatives: JSON.parse(election.electionAlternatives || "[]"),
      }));
    },
    async getElectionById(id: number): Promise<Election | undefined> {
      const election = await repository.getElectionById(id);
      if (election) {
        return {
          ...election,
          electionName: election.electionName || "",
          electionDescription: election.electionDescription || "",
          electionStatus: election.electionStatus || "",
          electionDate: election.electionDate || "",
          alternatives: JSON.parse(election.alternatives || "[]"),
        };
      }
      return undefined;
    },
    async updateElection(id: number, updates: ElectionUpdates) {
      return repository.updateElection(id, updates);
    },
    async deleteElection(id: number) {
      return repository.deleteElection(id);
    },
    async concludeElection(id: number) {
      return repository.updateElectionStatus(id, "Concluded");
    },
    async updateElectionStatus(id: number, status: string) {
      return repository.updateElectionStatus(id, status);
    }
  };
}
