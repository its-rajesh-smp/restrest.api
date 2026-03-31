import { Body, Controller, Get, Post } from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller()
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  async getResource() {
    return await this.resourcesService.getResources();
  }

  @Post()
  async createResource(@Body() data: Record<string, unknown>) {
    return await this.resourcesService.createResource(data);
  }
}
