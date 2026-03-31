import { Model } from 'objection';

export class Resource extends Model {
  id!: string;
  data: Record<string, unknown>;
  title?: string;
  description?: string;

  createdAt!: Date;
  updatedAt!: Date;

  static tableName: string = 'resource';

  static get jsonAttributes() {
    return ['data'];
  }

  static async findAll(): Promise<Resource[]> {
    return this.query();
  }

  static async create(data: Partial<Resource>): Promise<Resource> {
    return this.query().insertAndFetch(data);
  }

  static async findOne(id: string): Promise<Resource | undefined> {
    return this.query().findById(id);
  }
}
