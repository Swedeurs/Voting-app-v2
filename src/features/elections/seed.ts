import { Db } from "@/db";
import { createElectionService } from "./service";

export async function seedElections(db: Db) {
  console.log("Seeding elections...");
  const electionService = createElectionService(db);

  const elections = [
    {
      electionName: "Presidential Election 2024",
      electionDescription: "Electing the next president",
      electionStatus: "Active",
      electionDate: new Date("2024-11-05").toISOString(),
      alternatives: JSON.stringify(["Candidate A", "Candidate B", "Candidate C"]),
    },
    {
      electionName: "City Council Election 2024",
      electionDescription: "Choosing city council representatives",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-09-12").toISOString(),
      alternatives: JSON.stringify(["Ward A", "Ward B", "Ward C"]),
    },
    {
      electionName: "Referendum on Climate Policy",
      electionDescription: "Voting on new climate policy measures",
      electionStatus: "Concluded",
      electionDate: new Date("2024-06-15").toISOString(),
      alternatives: JSON.stringify(["Yes", "No"]),
    },
    {
      electionName: "Mayoral Election 2025",
      electionDescription: "Electing the city's next mayor",
      electionStatus: "Upcoming",
      electionDate: new Date("2025-04-10").toISOString(),
      alternatives: JSON.stringify(["Candidate X", "Candidate Y"]),
    },
    {
      electionName: "State Assembly Election 2024",
      electionDescription: "Selecting members of the state assembly",
      electionStatus: "Active",
      electionDate: new Date("2024-08-22").toISOString(),
      alternatives: JSON.stringify(["District A Representative", "District B Representative"]),
    },
    {
      electionName: "School Board Election 2024",
      electionDescription: "Choosing members for the school board",
      electionStatus: "Concluded",
      electionDate: new Date("2024-03-05").toISOString(),
      alternatives: JSON.stringify(["Candidate 1", "Candidate 2", "Candidate 3"]),
    },
    {
      electionName: "Healthcare Funding Referendum",
      electionDescription: "Deciding on new healthcare funding measures",
      electionStatus: "Concluded",
      electionDate: new Date("2024-01-20").toISOString(),
      alternatives: JSON.stringify(["Approve Funding", "Reject Funding"]),
    },
    {
      electionName: "Transport Infrastructure Vote",
      electionDescription: "Voting on improving public transportation",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-07-18").toISOString(),
      alternatives: JSON.stringify(["Plan A", "Plan B", "Plan C"]),
    },
    {
      electionName: "Community Development Election",
      electionDescription: "Electing officials for community projects",
      electionStatus: "Active",
      electionDate: new Date("2024-05-10").toISOString(),
      alternatives: JSON.stringify(["Candidate Alpha", "Candidate Beta"]),
    },
    {
      electionName: "Local Tax Reform Referendum",
      electionDescription: "Deciding on proposed tax reforms",
      electionStatus: "Concluded",
      electionDate: new Date("2024-02-25").toISOString(),
      alternatives: JSON.stringify(["Yes to Reform", "No to Reform"]),
    },
    {
      electionName: "City Zoning Policy Referendum",
      electionDescription: "Voting on changes to city zoning laws",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-10-15").toISOString(),
      alternatives: JSON.stringify(["For Policy", "Against Policy"]),
    },
    {
      electionName: "Environmental Protection Act",
      electionDescription: "Deciding on new environmental regulations",
      electionStatus: "Active",
      electionDate: new Date("2024-06-30").toISOString(),
      alternatives: JSON.stringify(["Approve", "Reject"]),
    },
    {
      electionName: "Digital Privacy Referendum",
      electionDescription: "Voting on digital privacy legislation",
      electionStatus: "Concluded",
      electionDate: new Date("2024-04-12").toISOString(),
      alternatives: JSON.stringify(["Support", "Oppose"]),
    },
    {
      electionName: "Infrastructure Funding Vote",
      electionDescription: "Voting on increased infrastructure funding",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-09-20").toISOString(),
      alternatives: JSON.stringify(["Yes", "No"]),
    },
    {
      electionName: "Public Safety Reform Election",
      electionDescription: "Electing officials for public safety reform",
      electionStatus: "Active",
      electionDate: new Date("2024-08-01").toISOString(),
      alternatives: JSON.stringify(["Candidate 1", "Candidate 2"]),
    },
    {
      electionName: "Municipal Budget Approval",
      electionDescription: "Approving the municipal budget for 2025",
      electionStatus: "Upcoming",
      electionDate: new Date("2024-12-10").toISOString(),
      alternatives: JSON.stringify(["Approve", "Reject"]),
    },
  ];

  for (const election of elections) {
    await electionService.addElection({
      electionName: election.electionName,
      electionDescription: election.electionDescription,
      electionStatus: election.electionStatus,
      electionDate: election.electionDate,
      alternatives: election.alternatives, 
    });
  }

  console.log("Elections seeded!");
}
