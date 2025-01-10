import { db } from "@/db";
import { createElectionService } from "./service";

export const electionService = createElectionService(db);
