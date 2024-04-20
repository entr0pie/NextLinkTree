"use client";

import React, {useState} from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { getPublicProfile } from "./services/PublicProfileService";
import EditButton from "@/components/Edits/editButton";
import EditIcon from "@/components/Edits/editIcon";
import EditLinks from "@/components/Edits/editLinks";

export default function PublicProfile({ params }: { params: { username: string } }) {

    const profile = getPublicProfile(params.username);
    const [editMode, setEditMode] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    const handleEditMode = () => {
         setEditMode(!editMode);
    }

    const handleEditLinkClick = () => {
        return setIsActive(!isActive);
    }

    return (
        <div className="flex h-screen relative">
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
                                <Card className="w-[300px] text-center p-2 relative bg-neutral-800 hover:bg-neutral-900">
                                    <Link target="_blank" href={profileLink.link}>{profileLink.name}</Link>
                                    <EditIcon showState={editMode} linkState={() => handleEditLinkClick()}></EditIcon>
                                </Card>
                            ))}
                        </CardContent>
                    </div>
                </Card>
                
            </div>

                <div className="mt-8 absolute right-16 bottom-12" onClick={handleEditMode}>
                    <EditButton></EditButton>
                </div>

                <div className={`flex h-screen w-screen absolute bg-[rgba(0,0,0,0.7)] ${!isActive ? 'invisible' : 'visible'}`}>
                  <EditLinks onCalcel={() => handleEditLinkClick()}></EditLinks>
                </div>
        </div>
    
    )
}