import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const electionTable = pgTable("elections", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  electionName: varchar("name", { length: 255 }),
  electionDescription: varchar("description", { length: 500 }),
  electionStatus: varchar("status", { length: 50 }),
  electionDate: varchar("date", { length: 50 }),
  electionRepresentatives: varchar("representatives", { length: 255 }),
});
