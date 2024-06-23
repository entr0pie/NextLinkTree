import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil1Icon } from "@radix-ui/react-icons"


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
                <div className="relative h-20 w-20">
                    <Avatar className="h-20 w-20 text-center">
                        <AvatarImage className="rounded-full" src="https://assets.portalleodias.com/2024/04/vampetasso-a-trolagem-brasileira-contra-o-preconceito-sofrido-por-vin.webp" alt="@shadcn" />
                        <AvatarFallback>{profile.username}</AvatarFallback>
                    </Avatar>
                    <div className="absolute right-0 bottom-0 ">
                        <Button className="h-8 w-8 rounded-full" variant="outline" size="icon">
                            <Pencil1Icon className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

            </div>

            <CardHeader className="text-center">
                <CardTitle>{profile.username}</CardTitle>
                <CardDescription>{profile.biography}</CardDescription>
            </CardHeader>
        </div>
    );

}