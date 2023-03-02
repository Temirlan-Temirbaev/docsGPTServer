import { Module } from '@nestjs/common';
import { TermService } from './term.service';
import { TermController } from './term.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TermSchema } from './term.schema';
import { LangSchema } from 'src/lang/lang.schema';

@Module({
  imports : [
    MongooseModule.forFeature([{name : 'Term', schema : TermSchema}]),
    MongooseModule.forFeature([{name : "Lang", schema : LangSchema}])
  ],
  controllers: [TermController],
  providers: [TermService]
})
export class TermModule {}
