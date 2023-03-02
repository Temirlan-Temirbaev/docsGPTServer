import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
@Schema()

export class Lang{
  @Prop()
  name : string
  @Prop()
  termsId : string[]
  @Prop()
  termNames : string[]
  @Prop()
  description : string
}

export const LangSchema = SchemaFactory.createForClass(Lang)