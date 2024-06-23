"use client";

import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { EditableProfileLink } from "./edit/EditableProfileLink";
import { useLinksStore } from "./LinksStore";

export function PrivateProfileLinks() {

    const [links] = useLinksStore((state) => [state.links]);

    return (
        <div className="flex flex-col space-y-2">
            {links.map((profileLink, index) => (
                EditableProfileLink({ alias: profileLink.alias, link: profileLink.link, key: index })
            ))}
        </div>
    );
}