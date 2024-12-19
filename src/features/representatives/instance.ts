import { db } from "@/db";
import { createRepresentativeService } from "./service";

export const representativeService = createRepresentativeService(db);
