import {
  getRepresentatives,
  RepresentativesManagementPage,
} from "@/features/representatives";

export default async function SomeOtherPage() {
  const representatives = await getRepresentatives();

  return <RepresentativesManagementPage representatives={representatives} />;
}
