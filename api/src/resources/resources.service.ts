import { Injectable } from '@nestjs/common';
import { Resource } from 'src/db/models';

@Injectable()
export class ResourcesService {
  async getResources() {
    return Resource.findAll();
  }

  async createResource(id, path: string[], data: Record<string, unknown>) {
    //TODO: Check if the id is valid and not expired

    console.log(id, path, data);
  }
}
