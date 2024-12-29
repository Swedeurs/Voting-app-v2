import { db } from "@/db";
import { electionTable } from "./schema";

export async function seedElections() {
  console.log("Seeding elections...");
  await db.insert(electionTable).values([
    {
      electionName: "Presidential Election 2024",
      electionDescription: "Electing the next president",
      electionStatus: "Active",
      electionDate: new Date("2024-11-05").toISOString(), // Example date
    },
    {
      electionName: "City Council Election 2024",
      electionDescription: "Choosing city council representatives",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-09-12").toISOString(),
    },
    {
      electionName: "Referendum on Climate Policy",
      electionDescription: "Voting on new climate policy measures",
      electionStatus: "Active",
      electionDate: new Date("2024-06-15").toISOString(),
    },
    {
      electionName: "Mayoral Election 2025",
      electionDescription: "Electing the city's next mayor",
      electionStatus: "Upcoming",
      electionDate: new Date("2025-04-10").toISOString(),
    },
    {
      electionName: "State Assembly Election 2024",
      electionDescription: "Selecting members of the state assembly",
      electionStatus: "Active",
      electionDate: new Date("2024-08-22").toISOString(),
    },
    {
      electionName: "School Board Election 2024",
      electionDescription: "Choosing members for the school board",
      electionStatus: "Concluded",
      electionDate: new Date("2024-03-05").toISOString(),
    },
    {
      electionName: "Healthcare Funding Referendum",
      electionDescription: "Deciding on new healthcare funding measures",
      electionStatus: "Concluded",
      electionDate: new Date("2024-01-20").toISOString(),
    },
    {
      electionName: "Transport Infrastructure Vote",
      electionDescription: "Voting on improving public transportation",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-07-18").toISOString(),
    },
    {
      electionName: "Community Development Election",
      electionDescription: "Electing officials for community projects",
      electionStatus: "Active",
      electionDate: new Date("2024-05-10").toISOString(),
    },
    {
      electionName: "Local Tax Reform Referendum",
      electionDescription: "Deciding on proposed tax reforms",
      electionStatus: "Concluded",
      electionDate: new Date("2024-02-25").toISOString(),
    },
  ]);
  console.log("Elections seeded!");
}
