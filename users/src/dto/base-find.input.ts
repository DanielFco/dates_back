

export class BaseFindInput {
  skip?: number;
  take?: number;
  sortColumn?: string;
  sortDirection?: 'ASC' | 'DESC';
}
