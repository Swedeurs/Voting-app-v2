import { getRepresentatives, RepresentativesManagementPage } from "@/features/representatives/components/representatives-Page";


export default async function SomeOtherPage() {
  const representatives = await getRepresentatives();

  return RepresentativesManagementPage({ representatives });
}
