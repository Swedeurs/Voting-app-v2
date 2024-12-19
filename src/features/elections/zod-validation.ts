import { z } from "zod";

export const electionUpdates = z.object({
  electionName: z.string(),
  electionDescription: z.string(),
  electionStatus: z.string(),
  electionDate: z.string(),
});
