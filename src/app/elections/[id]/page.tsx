import { ElectionDetailPage } from "@/features/elections";

export default function ElectionPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return <ElectionDetailPage params={{ id }} />;
}
