import TopNav from "@/components/top-nav";
import { ElectionDetailContainer } from "@/features/elections/components/election-detail-container";
import ElectionsList from "./elections-list";


type Props = {
  params: { id: string };
};

export default function ElectionDetailPage({ params }: Props) {
  const electionId = Number(params.id);

  return (
    <>
      <TopNav />
      <ElectionDetailContainer electionId={electionId} />
      <ElectionsList />
    </>
  );
}
