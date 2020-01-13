export type Shower = {
  name: string;
  status: Status
}

export enum Status {
  available = 'available',
  outOfUse = 'out-of-use',
  inUse = 'in-use'
}
