import { db } from "@/db";
import { seedElections } from "@/features/elections";
import { seedRepresentatives } from "@/features/representatives/seed";


async function seedDatabase() {
  console.log("Seeding database...");

  try {
    console.log("Seeding elections...");
    await seedElections(db); 
    console.log("Elections seeded successfully.");

    console.log("Seeding representatives...");
    await seedRepresentatives();
    console.log("Representatives seeded successfully.");
  } catch (error) {
    console.error("Error during seeding:", error);
    throw error;
  }
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
