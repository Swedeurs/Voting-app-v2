"use server";

import { db } from "@/db";
import { electionTable } from "../elections/schema";
import { representativeTable } from "../representatives/schema";
import { sql } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { getFormData } from "@/utils";
import { electionService } from "./instance";
import { ElectionUpdates } from "./types";

export async function addElectionAction(formData: FormData) {
  const electionName = formData.get("electionName") as string;
  const electionDescription = formData.get("electionDescription") as string;
  const electionStatus = formData.get("electionStatus") as string;
  const representatives = JSON.parse(
    formData.get("representatives") as string
  ) as number[];

  const newElection = {
    electionName,
    electionDescription,
    electionStatus,
    electionDate: new Date().toISOString(),
  };


  const [insertedElection] = await db
    .insert(electionTable)
    .values(newElection)
    .returning({ id: electionTable.id });

  const electionId = insertedElection.id;


  await db.execute(
    sql`UPDATE ${representativeTable} 
        SET "electionId" = ${electionId}
        WHERE "id" = ANY (${sql.param(representatives)})`
  );

  revalidatePath("/elections");
}


export async function editElectionAction(formData: FormData) {
  const electionId = formData.get("electionId") as string;
  const { electionName, electionDescription, electionStatus } =
    getFormData(formData);

  const updatedElection = {
    electionName,
    electionDescription,
    electionStatus,
  };

  await electionService.updateElection(Number(electionId), updatedElection);
  revalidatePath("/elections");
}

export async function editElectionDirectAction(
  id: number,
  updates: ElectionUpdates,
) {
  await electionService.updateElection(id, updates);
  revalidatePath("/elections");
}

export async function removeElectionAction(electionId: number) {
  await electionService.deleteElection(electionId);
  revalidatePath("/elections");
}

export async function setElectionToConcluded(formData: FormData) {
  const id = formData.get("id");
  if (!id || isNaN(Number(id))) {
    throw new Error(`Invalid election ID: ${id}`);
  }

  await electionService.updateElectionStatus(Number(id), "Concluded");
  revalidatePath("/elections");
}
