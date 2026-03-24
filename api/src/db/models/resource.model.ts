import { Model } from 'objection';

export class Resource extends Model {
  id!: string;
  data: Record<string, unknown>;

  static tableName: string = 'resource';

  static get jsonAttributes() {
    return ['data'];
  }

  static async findAll(): Promise<Resource[]> {
    return this.query();
  }
}
