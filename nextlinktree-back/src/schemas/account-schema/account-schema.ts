import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Account extends Document {
    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    // Método para retornar o _id como string
    getId(): string {
        return (this._id as Types.ObjectId).toHexString();
    }
}

export const AccountSchema = SchemaFactory.createForClass(Account);
