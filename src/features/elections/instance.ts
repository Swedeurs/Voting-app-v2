import { representativeService } from "../representatives/instance";
import { createElectionService } from "./service";
import { db } from "@/db";

export const electionService = createElectionService(db);

export const getElectionById = async (id: number) => {
  return electionService.getElectionById(id);
};

export const getElectionRepresentatives = async (id: number) => {
  const representatives = await representativeService.getAllRepresentatives();
  return representatives.filter((rep) => rep.id === id);
};
