export type Representative = {
  id: number;
  name: string;
  email: string;
  electionId: number;
};

export type NewRepresentative = Omit<Representative, "id">;
export type RepresentativeUpdates = Partial<Omit<Representative, "id">>;
