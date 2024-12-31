import { db } from "@/db";
import { representativeTable } from "./schema";

export async function seedRepresentatives() {
  console.log("Seeding representatives...");

  await db.insert(representativeTable).values([
    { name: "John Doe", email: "john.doe@example.com", electionId: 1 },
    { name: "Jane Smith", email: "jane.smith@example.com", electionId: 1 },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      electionId: 2,
    },
    { name: "Bob Brown", email: "bob.brown@example.com", electionId: 2 },
    { name: "Emily White", email: "emily.white@example.com", electionId: 3 },
    {
      name: "Michael Black",
      email: "michael.black@example.com",
      electionId: 3,
    },
    { name: "Sarah Green", email: "sarah.green@example.com", electionId: 4 },
    { name: "David Blue", email: "david.blue@example.com", electionId: 4 },
    { name: "Sophia Grey", email: "sophia.grey@example.com", electionId: 5 },
    { name: "Chris Yellow", email: "chris.yellow@example.com", electionId: 5 },
    { name: "Olivia Red", email: "olivia.red@example.com", electionId: 6 },
    { name: "Noah Orange", email: "noah.orange@example.com", electionId: 6 },
    { name: "Liam Green", email: "liam.green@example.com", electionId: 7 },
    { name: "Emma Blue", email: "emma.blue@example.com", electionId: 7 },
    { name: "Ava Purple", email: "ava.purple@example.com", electionId: 8 },
    { name: "Lucas Grey", email: "lucas.grey@example.com", electionId: 8 },
    {
      name: "Isabella White",
      email: "isabella.white@example.com",
      electionId: 9,
    },
    { name: "Mason Black", email: "mason.black@example.com", electionId: 9 },
    { name: "Sophia Gold", email: "sophia.gold@example.com", electionId: 10 },
    { name: "Ethan Silver", email: "ethan.silver@example.com", electionId: 10 },
  ]);

  console.log("Representatives seeded!");
}
