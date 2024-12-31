import { AddRepresentative } from "@/features/representatives/components/add-representatives";
import { EditRepresentative } from "@/features/representatives/components/edit-representatives";
import { createRepresentativeRepository } from "@/features/representatives/repository";
import { Representative } from "@/features/representatives/types";
import { db } from "@/db";
import TopNav from "@/components/top-nav";

export default async function RepresentativesManagementPage() {
  const representativeRepository = createRepresentativeRepository(db);
  const representatives: Representative[] =
    await representativeRepository.getAllRepresentatives();

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />

      <div className="p-8 space-y-8">
        <AddRepresentative />

        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Current Representatives
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {representatives.map((rep) => (
              <div
                key={rep.id}
                className="bg-white rounded shadow-md p-4 transition hover:shadow-lg"
              >
                <EditRepresentative representative={rep} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
