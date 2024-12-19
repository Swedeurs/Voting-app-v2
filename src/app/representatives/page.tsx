import { AddRepresentative } from "@/features/representatives/components/add-representatives";
import { EditRepresentative } from "@/features/representatives/components/edit-representatives";
import { createRepresentativeRepository } from "@/features/representatives/repository";
import { Representative } from "@/features/representatives/types";
import { db } from "@/db";

export default async function RepresentativesManagementPage() {
  const representativeRepository = createRepresentativeRepository(db);
  const representatives: Representative[] =
    await representativeRepository.getAllRepresentatives();

  return (
    <div className="space-y-8 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold">Manage Representatives</h1>
      <AddRepresentative />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {representatives.map((rep) => (
          <EditRepresentative key={rep.id} representative={rep} />
        ))}
      </div>
    </div>
  );
}
