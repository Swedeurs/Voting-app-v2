import { ElectionDetail } from "@/features/elections/components/detail-page";
import { electionService } from "@/features/elections/instance";

type Props = {
  params: { id: string };
};

export default async function ElectionDetailPage({ params }: Props) {
  const id = Number(params.id);
  const election = await electionService.getElectionById(id);

  if (!election) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">Election Not Found</h1>
        <p>Please check the election ID.</p>
      </div>
    );
  }

  const representatives =
    await electionService.getRepresentativesByElectionId(id);

  if (!representatives || representatives.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">Representatives Not Found</h1>
        <p>No representatives are associated with this election.</p>
      </div>
    );
  }

  // Create initialVotes using a loop
  const initialVotes: Record<number, number> = {};
  for (const rep of representatives) {
    initialVotes[rep.id] = Math.floor(Math.random() * 10) + 1; // Assign random votes
  }

  // Render the ElectionDetail component
  return (
    <ElectionDetail
      election={election}
      representatives={representatives}
      initialVotes={initialVotes}
      electionRepresentatives={undefined}
    />
  );
}
