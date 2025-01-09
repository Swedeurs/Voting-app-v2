import { ElectionDetailPage } from "@/features/elections";

export default async function ElectionPage({ params }: { params: { id: string } }) {

  const { id } = await Promise.resolve(params); 

  return <ElectionDetailPage params={{ id }} />;
}
