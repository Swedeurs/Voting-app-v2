import { Db } from "@/db";
import { createRepresentativeRepository } from "./repository";
import {
  Representative,
  NewRepresentative,
  RepresentativeUpdates,
} from "./types";

export const createRepresentativeService = (db: Db) => {
  const repository = createRepresentativeRepository(db);
  return {
    async getAllRepresentatives(): Promise<Representative[]> {
      return repository.getAllRepresentatives();
    },
    async getRepresentativeById(
      id: number,
    ): Promise<Representative | undefined> {
      return repository.getRepresentativeById(id);
    },
    async createRepresentative(
      representative: NewRepresentative,
    ): Promise<void> {
      return repository.addRepresentative(representative);
    },
    async updateRepresentative(
      id: number,
      updates: RepresentativeUpdates,
    ): Promise<void> {
      return repository.updateRepresentative(id, updates);
    },
    async deleteRepresentative(id: number): Promise<void> {
      return repository.deleteRepresentative(id);
    },
    getRepresentativesByElectionId: async (electionId: number) => {
      return await repository.getRepresentativesByElectionId(electionId);
    },
  };
};
