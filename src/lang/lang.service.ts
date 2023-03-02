import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLangDto } from './dto/create-lang.dto';
import { Lang } from './lang.schema';
@Injectable()
export class LangService {
  constructor(@InjectModel(Lang.name) private langModel : Model<Lang>){}

  async getLangs(){
    const langs = await this.langModel.find();
    return langs
  }
  async getLang(id : string){
    const lang = await this.langModel.findById(id)
    return lang
  }
  async createLang(createLangDto : CreateLangDto){
    const {name, description} = createLangDto
    const lang = await this.langModel.create({name : name, description : description})
    return "lang created"
  }
}
