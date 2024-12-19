import { seedElections } from "@/features/elections/seed";
import { seedRepresentatives } from "@/features/representatives/seed";

async function seedDatabase() {
  console.log("Seeding database...");
  await seedRepresentatives();
  await seedElections();
  console.log("Database seeding completed!");
}

if (require.main === module) {
  seedDatabase()
    .then(() => {
      console.log("Seeding finished successfully.");
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error seeding the database:", error);
      process.exit(1);
    });
}
