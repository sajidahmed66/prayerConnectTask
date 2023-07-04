import { Controller, Get, Post } from '@nestjs/common';

@Controller('cat')
export class CatController {
  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
