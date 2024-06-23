import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil1Icon } from "@radix-ui/react-icons"
import { EditPrivateProfileButton } from "./EditPrivateProfileButton";
import { PrivateProfileAvatar } from "./PrivateProfileAvatar";
import { PrivateProfileInfo } from "./PrivateProfileInfo";

type Props = {
    profile: PublicProfile;
}

// https://ui.shadcn.com/docs/components/avatar
// https://ui.shadcn.com/docs/components/card
// https://ui.shadcn.com/docs/components/button
export function PrivateProfileHeader({ profile }: Props) {
    return (
        <div className="pt-5">
            <div className="flex justify-center">
                <div className="relative h-20 w-20 ">
                    <PrivateProfileAvatar />
                </div>

            </div>
            <PrivateProfileInfo />
        </div>
    );
}