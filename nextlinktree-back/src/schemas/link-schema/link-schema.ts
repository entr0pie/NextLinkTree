import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Profile } from "../profile-schema/profile-schema";

export type LinkDocument = HydratedDocument<Link>;

@Schema()
export class Link {

    @Prop({ required: true })
    alias: string;

    @Prop({ required: true })
    link: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Profile', required: true })
    profile: Profile;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
