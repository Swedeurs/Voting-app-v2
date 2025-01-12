"use server";

import { electionService } from ".";
import { representativeService } from "../representatives";
import { ElectionUpdates, NewElection } from "./types";
import { revalidatePath } from "next/cache";

const ELECTIONS_PATH = "/elections";

export async function addElectionAction(formData: FormData) {
  const electionName = formData.get("electionName") as string;
  const electionDescription = formData.get("electionDescription") as string;
  const electionStatus = formData.get("electionStatus") as string;
  const representatives = JSON.parse(
    formData.get("representatives") as string,
  ) as number[];
  const alternatives = JSON.parse(
    formData.get("alternatives") as string,
  ) as string[];

  const newElection: NewElection = {
    electionName,
    electionDescription,
    electionStatus,
    electionDate: new Date().toISOString(),
    alternatives: JSON.stringify(alternatives),
  };

  const createdElection = await electionService.addElection(newElection) as unknown as { id: number };

  for (const repId of representatives) {
    await representativeService.updateRepresentative(repId, {
      electionId: createdElection.id,
    });
  }

  revalidatePath(ELECTIONS_PATH);
}

export async function editElectionAction(formData: FormData) {
  const electionId = Number(formData.get("electionId"));
  const electionName = formData.get("electionName") as string;
  const electionDescription = formData.get("electionDescription") as string;
  const electionStatus = formData.get("electionStatus") as string;

  const updates: ElectionUpdates = {
    electionName,
    electionDescription,
    electionStatus,
  };

  await electionService.updateElection(electionId, updates);
  revalidatePath(ELECTIONS_PATH);
}

export async function editElectionDirectAction(
  id: number,
  updates: ElectionUpdates,
) {
  await electionService.updateElection(id, updates);
  revalidatePath(ELECTIONS_PATH);
}

export async function removeElectionAction(electionId: number) {
  await electionService.deleteElection(electionId);
  revalidatePath(ELECTIONS_PATH);
}

export async function setElectionToConcluded(formData: FormData) {
  const id = Number(formData.get("id"));
  if (isNaN(id)) {
    throw new Error(`Invalid election ID: ${id}`);
  }

  await electionService.updateElectionStatus(id, "Concluded");
  revalidatePath(ELECTIONS_PATH);
}
