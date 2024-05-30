import { PublicLink } from "./PublicLink";

export type PublicProfile = {
    username: string;
    fullName: string;
    biography: string;
    links: PublicLink[];
}