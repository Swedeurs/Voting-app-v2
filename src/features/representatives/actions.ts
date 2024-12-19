"use server";

import { revalidatePath } from "next/cache";
import { createRepresentativeRepository } from "./repository";
import { db } from "@/db";
import { RepresentativeUpdates, NewRepresentative } from "./types";

const representativeRepository = createRepresentativeRepository(db);

export async function addRepresentativeAction(
  rep: NewRepresentative,
): Promise<void> {
  await representativeRepository.addRepresentative(rep);
  revalidatePath("/representatives");
}

export async function editRepresentativeAction(
  id: number,
  updates: RepresentativeUpdates,
): Promise<void> {
  await representativeRepository.updateRepresentative(id, updates);
  revalidatePath("/representatives");
}

export async function removeRepresentativeAction(id: number): Promise<void> {
  await representativeRepository.deleteRepresentative(id);
  revalidatePath("/representatives");
}
