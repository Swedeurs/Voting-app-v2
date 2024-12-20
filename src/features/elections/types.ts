export type Election = {
  id: number;
  electionName: string;
  electionDescription: string;
  electionStatus: string;
  electionDate: string;
  electionRepresentatives?: string | null;
};

export type NewElection = Omit<Election, "id">;

export type ElectionUpdates = Partial<Omit<Election, "id">>;
