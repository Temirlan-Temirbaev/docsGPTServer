import { Controller, Get, Param, Post, Body} from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { LangService } from './lang.service';

@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}
  @Get()
  getLangs(){
    return this.langService.getLangs()
  }
  @Get(':id')
  getLang(@Param('id') id: string){
    return this.langService.getLang(id)
  }
  @Post()
  createLang(@Body() createLangDto : CreateLangDto){
    return this.langService.createLang(createLangDto)
  }
}
