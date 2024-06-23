
import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { EditableProfileLink } from "./edit/EditableProfileLink";

type Props = {
    profile: PublicProfile;
}

export function PrivateProfileLinks({ profile }: Props) {
    return (
        <div className="flex flex-col space-y-2">
            {profile.links.map((profileLink, index) => (
                EditableProfileLink({ alias: profileLink.alias, link: profileLink.link, key: index })
            ))}
        </div>
    );
}