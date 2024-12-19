import ElectionsOverviewPage from "@/features/elections/components/overview-page";
import { Election } from "@/features/elections/types";

const election: Election = {
  id: 1,
  electionName: "Election 2024",
  electionDescription: "Presidential Election",
  electionStatus: "Active",
  electionDate: "2024-11-05",
};

export default function ElectionsPage() {
  return <ElectionsOverviewPage election={election} />;
}
