import { Db } from "@/db";
import { eq } from "drizzle-orm";
import { electionTable } from "./schema";
import { NewElection, ElectionUpdates } from "./types";

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
      const representativeIds = Array.from({ length: 10 }, (_, i) => i + 1);

      const numReps = Math.floor(Math.random() * 10) + 1;

      const assignedReps = representativeIds
        .sort(() => Math.random() - 0.5)
        .slice(0, numReps);
      return assignedReps.map((repId) => ({
        id: repId,
        name: `Representative ${repId}`,
        email: `rep${repId}@example.com`,
        electionId: id,
      }));
    },
  };
}
