import TopNav from "@/components/top-nav";
import { ElectionDetail } from "@/features/elections/components/detail-page";
import ElectionsList from "@/features/elections/components/elections-list";
import { electionService } from "..";


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

  const alternatives = JSON.parse(election.alternatives || "[]");

  const initialVotes: {
    representatives: Record<number, number>;
    alternatives: Record<string, number>;
  } = {
    representatives: representatives.reduce(
      (acc, rep) => {
        acc[rep.id] = Math.floor(Math.random() * 10) + 1;
        return acc;
      },
      {} as Record<number, number>,
    ),
    alternatives: alternatives.reduce(
      (acc, alt) => {
        acc[alt] = Math.floor(Math.random() * 10) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ),
  };

  return (
    <>
      <TopNav />
      <ElectionDetail
        election={election}
        representatives={representatives}
        initialVotes={initialVotes}
      />
      <ElectionsList />
    </>
  );
}
