import TopNav from "@/components/top-nav";
import ElectionsList from "./elections-list";
import { ElectionDetailContainer } from "./election-detail-container";

type Props = {
  params: Promise<{ id: string }>;
};

export async function ElectionDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const electionId = parseInt(resolvedParams.id, 10); 

  if (isNaN(electionId)) {
    return <div>Invalid election ID</div>;
  }

  return (
    <>
      <TopNav />
      <ElectionDetailContainer electionId={electionId} />
      <ElectionsList />
    </>
  );
}
