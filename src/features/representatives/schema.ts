import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const representativeTable = pgTable("representatives", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar("name", { length: 255 }).unique().notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
});
