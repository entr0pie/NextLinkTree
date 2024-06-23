
import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { Card } from "@/components/ui/card";

type Props = {
    profile: PublicProfile;
}

export function PrivateProfileLinks({ profile }: Props) {
    return (
        <div className="flex flex-col space-y-2">
            {profile.links.map((profileLink, index) => (
                <Card key={index} className="w-[300px] text-center p-2 cursor-pointer">
                    {profileLink.alias}
                </Card>
            ))}
        </div>
    );
}