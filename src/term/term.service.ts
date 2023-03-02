import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Term } from './term.schema';
import { Model } from 'mongoose';
import { CreateTermDto } from './dto/create-term.dto';
import { Lang } from 'src/lang/lang.schema';
import { DeleteTermDto } from './dto/delete-term.dto';
@Injectable()
export class TermService {
  constructor(@InjectModel(Term.name) private termModel : Model<Term>,
    @InjectModel(Lang.name) private langModel : Model<Lang>
  ){}
  async createTerm(createTermDto : CreateTermDto){
    const {lang, name, content, code} = createTermDto;
    const term = await this.termModel.create({name, content, lang, code});
    const langDoc = await this.langModel.findOne({name : lang})
    langDoc.termNames = [...langDoc.termNames, term.name];
    langDoc.termsId = [...langDoc.termsId, term._id.toString()];
    await langDoc.save()
    return "term created"
  }
  async getTerm(id : string){
    const term = await this.termModel.findById(id);
    return term
  }
  
  async deleteTerm(deleteTermDto : DeleteTermDto){
    const {langId, id} = deleteTermDto
    const term = await this.termModel.findById(id);
    const lang = await this.langModel.findById(langId);
    lang.termNames = lang.termNames.filter(name => name !== term.name);
    lang.termsId = lang.termsId.filter(id => id != term._id.toString());
    await lang.save();
    await term.delete();
    return "term deleted"
  }
}
