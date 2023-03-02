import { Body, Controller, Post, Get, Param, Put, Delete} from '@nestjs/common';
import { CreateTermDto } from './dto/create-term.dto';
import { DeleteTermDto } from './dto/delete-term.dto';
import { TermService } from './term.service';

@Controller('term')
export class TermController {
  constructor(private readonly termService: TermService) {}
  @Get(':id')
  getTerm(@Param('id') id : string){
    return this.termService.getTerm(id)
  }
  @Post()
  createTerm(@Body() createTermDto : CreateTermDto){
    return this.termService.createTerm(createTermDto)
  }
  
  @Delete()
  deleteTerm(@Body() deleteTermDto : DeleteTermDto ){
    return this.termService.deleteTerm(deleteTermDto);
  }
}
