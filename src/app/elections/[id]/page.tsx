import ElectionDetailPage from "@/features/elections/components/detail-page";


type Props = {
  id: number;
};

export default function Page({ id }: Props) {
  return <ElectionDetailPage id={id} />;
}
