import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Account } from "../account-schema/account-schema";

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {

    @Prop({ required: true })
    username: string;

    @Prop({ required: true })
    fullName: string;

    @Prop({ required: true })
    biography: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true })
    account: Account;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
