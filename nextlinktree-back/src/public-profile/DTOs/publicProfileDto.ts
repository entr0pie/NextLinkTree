export class publicProfile {
    readonly username?: string;
    readonly biography?: string;
}

export type PublicProfileDTO = {
    username: string;
    biography: string;
    links:
    {
        alias: string;
        link: string;
    }[]
}