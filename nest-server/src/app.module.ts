import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsController } from './events/controller/events.controller';
import { TodosController } from './todos/todos.controller';

@Module({
  imports: [],
  controllers: [AppController, EventsController, TodosController],
  providers: [AppService],
})
export class AppModule {}
