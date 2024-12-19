export type Representative = {
  id: number;
  name: string; // Adjusted to avoid null in normal usage
  email: string;
};

export type NewRepresentative = Omit<Representative, "id">;

export type RepresentativeUpdates = Partial<Omit<Representative, "id">>;
