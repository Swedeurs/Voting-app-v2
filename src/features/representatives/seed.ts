import { db } from "@/db";
import { representativeTable } from "./schema";

export async function seedRepresentatives() {
  console.log("Seeding representatives...");
  await db.insert(representativeTable).values([
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Smith", email: "jane.smith@example.com" },
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Bob Brown", email: "bob.brown@example.com" },
    { name: "Emily White", email: "emily.white@example.com" },
    { name: "Michael Black", email: "michael.black@example.com" },
    { name: "Sarah Green", email: "sarah.green@example.com" },
    { name: "David Blue", email: "david.blue@example.com" },
    { name: "Sophia Grey", email: "sophia.grey@example.com" },
    { name: "Chris Yellow", email: "chris.yellow@example.com" },
  ]);
  console.log("Representatives seeded!");
}
