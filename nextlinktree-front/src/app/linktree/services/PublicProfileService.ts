import { useProfileStore } from "@/app/account/components/ProfileStore";


export interface PublicProfile {
    username: string;
    imageURL: string;
    description: string;
    links: PublicProfileLinks[];
}

export interface PublicProfileLinks {
    name: string;
    link: string;
}



export function getPublicProfile(username: string): PublicProfile {
    return {
        username: username,
        description: "Maior cachorro do brasil",
        imageURL: "https://github.com/shadcn.png",
        links: [
            {
                name: "Instagram",
                link: "https://instagram.com"
            },
            {
                name: "Facebook",
                link: "https://facebook.com"
            },
            {
                name: "Whatsapp",
                link: "https://web.whatsapp.com/"
            },
           
        ]
    }
}