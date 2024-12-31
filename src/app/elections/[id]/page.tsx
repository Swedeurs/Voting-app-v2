import { AddElection } from "@/features/elections/components/add-election";
import { ElectionDetail } from "@/features/elections/components/detail-page";
import ElectionsList from "@/features/elections/components/elections-list";
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
        <p>Please check the election ID.</p>
      </div>
    );
  }

  const initialVotes = representatives.reduce<Record<number, number>>(
    (acc, rep) => {
      acc[rep.id] = Math.floor(Math.random() * 10) + 1;
      return acc;
    },
    {},
  );

  return (
    <>
      <AddElection />
      <ElectionsList />
      <ElectionDetail
        election={election}
        representatives={representatives}
        initialVotes={initialVotes}
        electionRepresentatives={undefined}
      />
    </>
  );
}
