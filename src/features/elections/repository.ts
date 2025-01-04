import { Db } from "@/db";
import { eq } from "drizzle-orm";
import { representativeTable } from "../representatives/schema";
import { electionTable } from "./schema";
import { ElectionUpdates, NewElection } from "./types";

export function createRepository(db: Db) {
  return {
    async getAllElections() {
      const elections = await db.select().from(electionTable);
      return elections.map((election) => ({
        id: election.id,
        electionName: election.electionName ?? "",
        electionDescription: election.electionDescription ?? "",
        electionStatus: election.electionStatus ?? "",
        electionDate: election.electionDate ?? "",
        electionAlternatives: election.alternatives ?? "",
      }));
    },
    async addElection(newElection: NewElection) {
      await db.insert(electionTable).values(newElection);
    },
    async deleteAllElections() {
      await db.delete(electionTable);
    },
    async getElectionById(id: number) {
      const election = await db
        .select()
        .from(electionTable)
        .where(eq(electionTable.id, id));
      return election[0];
    },
    async updateElection(id: number, updates: ElectionUpdates) {
      return await db
        .update(electionTable)
        .set(updates)
        .where(eq(electionTable.id, id))
        .returning();
    },
    async deleteElection(id: number) {
      return await db.delete(electionTable).where(eq(electionTable.id, id));
    },
    async getElectionRepresentatives(id: number) {
      return await db
        .select()
        .from(representativeTable)
        .where(eq(representativeTable.electionId, id));
    },
    async getRepresentativesByElectionId(id: number) {
      return await db
        .select()
        .from(representativeTable)
        .where(eq(representativeTable.electionId, id));
    },
    async updateElectionStatus(id: number, status: string) {
      return await db
        .update(electionTable)
        .set({ electionStatus: status })
        .where(eq(electionTable.id, id))
        .returning();
    },
    async addAlternativesToElection(id: number, alternatives: string) {
      return await db
        .update(electionTable)
        .set({ alternatives })
        .where(eq(electionTable.id, id))
        .returning();
    },
  };
}
