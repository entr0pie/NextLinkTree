"use client";

import { PublicProfile } from "../services/PublicProfileService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type Props = {
    profile: PublicProfile;
}

export function UsernameCard({ profile }: Props) {
    return (
        <Card className="w-[350px] text-center">
            <div className="pt-5">
                <div className="flex justify-center">
                    <Avatar className="text-center">
                        <AvatarImage className="h-20 w-20 rounded-full" src="https://assets.portalleodias.com/2024/04/vampetasso-a-trolagem-brasileira-contra-o-preconceito-sofrido-por-vin.webp" alt="@shadcn" />
                        <AvatarFallback>{profile.username}</AvatarFallback>
                    </Avatar>
                </div>

                <CardHeader className="text-center">
                    <CardTitle>{profile.username}</CardTitle>
                    <CardDescription>{profile.biography}</CardDescription>
                </CardHeader>
            </div>
            <div>
                <CardContent className="flex flex-col gap-2">
                    {profile.links.map((profileLink, index) => (
                        <Card key={index} className="w-[300px] text-center p-2 cursor-pointer" onClick={() => window.open(profileLink.link)}>
                            {profileLink.alias}
                        </Card>
                    ))}
                </CardContent>
            </div>
        </Card>
    );
}