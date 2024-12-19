import { Db } from "@/db";
import { representativeTable } from "./schema";
import { eq } from "drizzle-orm";
import {
  Representative,
  RepresentativeUpdates,
  NewRepresentative,
} from "./types";

export function createRepresentativeRepository(db: Db) {
  return {
    async addRepresentative(
      newRepresentative: NewRepresentative,
    ): Promise<void> {
      await db.insert(representativeTable).values(newRepresentative);
    },

    async getAllRepresentatives(): Promise<Representative[]> {
      const representatives = await db.select().from(representativeTable);
      return representatives.map((rep) => ({
        ...rep,
        name: rep.name ?? "",
        email: rep.email ?? "",
      }));
    },

    async getRepresentativeById(
      id: number,
    ): Promise<Representative | undefined> {
      const [representative] = await db
        .select()
        .from(representativeTable)
        .where(eq(representativeTable.id, id));
      return representative
        ? {
            ...representative,
            name: representative.name ?? "",
            email: representative.email ?? "",
          }
        : undefined;
    },

    async updateRepresentative(
      id: number,
      updates: RepresentativeUpdates,
    ): Promise<void> {
      const sanitizedUpdates: RepresentativeUpdates = {
        ...updates,
        name: updates.name ?? undefined,
        email: updates.email ?? undefined,
      };

      await db
        .update(representativeTable)
        .set(sanitizedUpdates)
        .where(eq(representativeTable.id, id));
    },

    async deleteRepresentative(id: number): Promise<void> {
      await db
        .delete(representativeTable)
        .where(eq(representativeTable.id, id));
    },
  };
}
