import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Term{
  @Prop()
  name : string
  @Prop()
  content : string[]
  @Prop()
  lang : string
  @Prop()
  code : string[]
}

export const TermSchema = SchemaFactory.createForClass(Term)