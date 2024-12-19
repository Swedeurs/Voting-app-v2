import { db } from "@/db";
import { electionTable } from "./schema";

export async function seedElections() {
  console.log("Seeding elections...");
  await db.insert(electionTable).values([
    {
      electionName: "Presidential Election 2024",
      electionDescription: "Electing the next president",
      electionStatus: "Active",
    },
    {
      electionName: "City Council Election 2024",
      electionDescription: "Choosing city council representatives",
      electionStatus: "Upcoming",
    },
    {
      electionName: "Referendum on Climate Policy",
      electionDescription: "Voting on new climate policy measures",
      electionStatus: "Active",
    },
    {
      electionName: "Mayoral Election 2025",
      electionDescription: "Electing the city's next mayor",
      electionStatus: "Upcoming",
    },
    {
      electionName: "State Assembly Election 2024",
      electionDescription: "Selecting members of the state assembly",
      electionStatus: "Active",
    },
    {
      electionName: "School Board Election 2024",
      electionDescription: "Choosing members for the school board",
      electionStatus: "Concluded",
    },
    {
      electionName: "Healthcare Funding Referendum",
      electionDescription: "Deciding on new healthcare funding measures",
      electionStatus: "Concluded",
    },
    {
      electionName: "Transport Infrastructure Vote",
      electionDescription: "Voting on improving public transportation",
      electionStatus: "Upcoming",
    },
    {
      electionName: "Community Development Election",
      electionDescription: "Electing officials for community projects",
      electionStatus: "Active",
    },
    {
      electionName: "Local Tax Reform Referendum",
      electionDescription: "Deciding on proposed tax reforms",
      electionStatus: "Concluded",
    },
  ]);
  console.log("Elections seeded!");
}
