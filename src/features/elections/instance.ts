import { createElectionService } from "./service";
import { db } from "@/db";

export const electionService = createElectionService(db);
