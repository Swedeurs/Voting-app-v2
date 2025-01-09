import { ElectionDetailPage } from "@/features/elections";

type Props = {
  params: { id: string };
};

const ElectionPage = ({ params }: Props) => {
  return <ElectionDetailPage params={{ id: params.id }} />;
};

export default ElectionPage;
