export type Shower = {
  name: string;
  status: Status
}

export enum Status {
  available = 'available',
  outOfUse = 'outOfUse',
  inUse = 'inUse'
}
