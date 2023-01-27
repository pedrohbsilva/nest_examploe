import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { base } from './base';

@Schema()
export class User extends Document {
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  age: number;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.plugin(base);

export { UserSchema };
