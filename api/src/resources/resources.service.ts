import { Injectable } from '@nestjs/common';
import { Resource } from 'src/db/models';

@Injectable()
export class ResourcesService {
  async getResources() {
    return Resource.findAll();
  }

  async createResource(data: Partial<Resource>) {
    const resource = await Resource.create(data);
    return resource;
  }
}
