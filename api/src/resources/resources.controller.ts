import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResourcesService } from './resources.service';

@Controller()
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Get()
  async getResource() {
    return await this.resourcesService.getResources();
  }

  @Post(':id/*path')
  async createResource(
    @Param('id') id: string,
    @Param('path') path: string[],
    @Body() data: Record<string, unknown>,
  ) {
    return await this.resourcesService.createResource(id, path, data);
  }
}
