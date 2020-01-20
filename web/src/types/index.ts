export type Shower = {
  id: number;
  name: string;
  status: Status;
};

export enum Status {
  available = "available",
  outOfUse = "outOfUse",
  inUse = "inUse"
}

export type ShowersByStatus = {
  [key in Status]: Shower[];
};
