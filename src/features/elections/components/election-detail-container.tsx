import { ElectionDetail } from "@/features/elections/components/detail-page";
import { electionService } from "@/features/elections";
import { representativeService } from "@/features/representatives";
import { Representative } from "@/features/representatives/types";

type ElectionDetailContainerProps = {
  electionId: number;
};

export async function ElectionDetailContainer({
  electionId,
}: ElectionDetailContainerProps) {
  const election = await electionService.getElectionById(electionId);

  if (!election) {
    return (
      <div className="text-center">
        <h1 className="text-xl font-bold">Election Not Found</h1>
        <p>Please check the election ID.</p>
      </div>
    );
  }

  const representatives: Representative[] = await representativeService
    .getRepresentativesByElectionId(electionId);

  const alternatives: string[] = JSON.parse(election.alternatives || "[]");

  const initialVotes = {
    representatives: representatives.reduce<Record<number, number>>(
      (acc, rep) => {
        acc[rep.id] = Math.floor(Math.random() * 10) + 1;
        return acc;
      },
      {},
    ),
    alternatives: alternatives.reduce<Record<string, number>>((acc, alt) => {
      acc[alt] = Math.floor(Math.random() * 10) + 1;
      return acc;
    }, {}),
  };

  return (
    <ElectionDetail
      election={election}
      representatives={representatives}
      initialVotes={initialVotes}
    />
  );
}
