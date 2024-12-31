import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const electionTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  electionName: varchar("name", { length: 255 }),
  electionDescription: varchar("description", { length: 500 }),
  electionStatus: varchar("status", { length: 50 }),
  electionDate: varchar("date", { length: 50 }),
  alternatives: varchar("alternatives", { length: 1000 }),
});
