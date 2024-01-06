import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateEventDto } from '../dto/create-event.dto';

@Controller('events')
export class EventsController {
  @Get()
  findAll() {}

  @Get('/:id')
  findOne(@Param('id') id) {
    return { id: id };
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    return { input };
  }

  @Patch()
  update() {}

  @Delete()
  remove() {}
}
