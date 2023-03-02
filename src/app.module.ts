import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LangModule } from './lang/lang.module';
import { TermModule } from './term/term.module';
import { ConfigModule } from '@nestjs/config';
import { TermSchema } from './term/term.schema';
ConfigModule.forRoot()
@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    LangModule,
    TermModule,
    MongooseModule.forFeature([{name : "Term", schema : TermSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
