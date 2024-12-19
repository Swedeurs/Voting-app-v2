export type Representative = {
  id: number;
  name: string;
  email: string;
};

export type NewRepresentative = Omit<Representative, "id">;
export type RepresentativeUpdates = Partial<Omit<Representative, "id">>;
