export type Election = {
  id: number;
  electionName: string;
  electionDescription: string;
  electionStatus: string;
  electionDate: string;
};

export type NewElection = Omit<Election, "id">;

export type ElectionUpdates = Partial<Omit<Election, "id">>;
