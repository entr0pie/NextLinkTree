import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService"
import { Card, CardContent } from "@/components/ui/card";
import { PrivateProfileHeader } from "./header/PrivateProfileHeader";
import { PrivateProfileLinks } from "./links/PrivateProfileLinks";

type Props = {
    profile: PublicProfile;
}

export function PrivateProfileCard({ profile }: Props) {
    return (
        <div>
            <Card className="w-[350px] text-center">
                <div>
                    <CardContent className="flex flex-col gap-2">
                        <PrivateProfileHeader profile={profile} />
                    </CardContent>
                    <CardContent className="flex flex-col gap-2">
                        <PrivateProfileLinks />
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}