import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
