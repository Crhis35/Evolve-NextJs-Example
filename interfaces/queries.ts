export interface IQueries {
  id?: string;
  start?: number;
  limit?: number;
  sort?: string;
}
export class Queries implements IQueries {
  id: string;
  start: number;
  limit: number;
  sort: string;
  constructor(Args: IQueries) {
    const { id, start, limit, sort } = Args;
    this.id = id || "";
    this.start = start || 0;
    this.limit = limit || 0;
    this.sort = sort || "";
  }
}
