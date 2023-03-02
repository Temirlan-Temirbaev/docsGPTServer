import { Controller, Get, Post} from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('search/:text')
  search(@Param("text") text : string ){
    return this.appService.search(text);
  }
}
