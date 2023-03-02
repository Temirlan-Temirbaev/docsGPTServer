import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Term } from './term/term.schema';

@Injectable()
export class AppService {
  constructor(@InjectModel(Term.name) private termModel : Model<Term>){}
  async search(text : string){
    const terms = await this.termModel.find({name : {$regex : text.charAt(0).toUpperCase() + text.slice(1)}})
    return terms.map(term => {
      const {name, lang, _id } = term;
      return {name, lang, _id};
    })
  }
}
