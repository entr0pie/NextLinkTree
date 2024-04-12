"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { getPublicProfile } from "./services/PublicProfileService";

export default function PublicProfile({ params }: { params: { username: string } }) {

    const profile = getPublicProfile(params.username);

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Card className="w-[350px] text-center">
                    <div className="pt-5">
                        <div className="flex justify-center">
                            <Avatar className="text-center">
                                <AvatarImage className="h-20 w-20 rounded-full" src={profile.imageURL} alt="@shadcn" />
                                <AvatarFallback>{profile.username}</AvatarFallback>
                            </Avatar>
                        </div>
                        
                        <CardHeader className="text-center">
                            <CardTitle>{profile.username}</CardTitle>
                            <CardDescription>{profile.description}</CardDescription>
                        </CardHeader>
                    </div>
                    <div>
                        <CardContent className="flex flex-col gap-2">
                            {profile.links.map((profileLink, index) => (
                                <Card className="w-[300px] text-center p-2"><Link target="_blank" href={profileLink.link}>{profileLink.name}</Link></Card>
                            ))}
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    
    )
}