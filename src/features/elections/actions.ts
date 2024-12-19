"use server";

import { revalidatePath } from "next/cache";
import { getFormData } from "@/utils";
import { electionService } from "./instance";
import { ElectionUpdates } from "./types";

export async function addElectionAction(formData: FormData) {
  const { electionName, electionDescription, electionStatus } = getFormData(formData);

  const newElection = {
    electionName,
    electionDescription,
    electionStatus,
    electionDate: new Date().toISOString(),
  };

  await electionService.addElection(newElection);
  revalidatePath("/elections");
}

export async function editElectionAction(formData: FormData) {
  const electionId = formData.get("electionId") as string;
  const { electionName, electionDescription, electionStatus } = getFormData(formData);

  const updatedElection = {
    electionName,
    electionDescription,
    electionStatus,
  };

  await electionService.updateElection(Number(electionId), updatedElection);
  revalidatePath("/elections");
}

export async function editElectionDirectAction(id: number, updates: ElectionUpdates) {
  await electionService.updateElection(id, updates);
  revalidatePath("/elections");
}

export async function removeElectionAction(electionId: number) {
  await electionService.deleteElection(electionId);
  revalidatePath("/elections");
}
