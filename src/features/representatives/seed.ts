import { createRepresentativeService } from "@/features/representatives/service";
import { db } from "@/db";


const representativesData = Array.from({ length: 32 }).map((_, index) => {
  const electionId = (index % 16) + 1; 
  return {
    name: `Representative ${index + 1}`,
    email: `rep${index + 1}@example.com`,
    electionId,
  };
});

export async function seedRepresentatives() {
  console.log("Seeding representatives...");
  const representativeService = createRepresentativeService(db);

  try {
    for (const representative of representativesData) {
      await representativeService.createRepresentative(representative);
    }
    console.log("Representatives seeded successfully.");
  } catch (error) {
    console.error("Error during seeding representatives:", error);
    throw error;
  }
}

if (require.main === module) {
  seedRepresentatives()
    .then(() => {
      console.log("Seeding finished successfully.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error seeding the representatives:", error);
      process.exit(1);
    });
}
