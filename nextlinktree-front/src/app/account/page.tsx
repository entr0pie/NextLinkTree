"use client";

import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { getPublicProfile } from "../linktree/services/PublicProfileService";
import { Link } from "lucide-react";
import EditableTreeHeaderComponent from "./components/EditableTreeHeaderComponent";
import { Button } from "@/components/ui/button";
import { GearIcon, Pencil1Icon } from "@radix-ui/react-icons";
import SettingsSectionComponent from "./components/settings-section/SettingsSectionComponent";
import { useProfileStore } from "./components/ProfileStore";
import editButton from './components/editLinks/editButton';
import EditButton from "./components/editLinks/editButton";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import ScreenEditLinks from './components/editLinks/screenEditLinks';

export default function Account() {
    
    const profile = getPublicProfile("kauan");
    const username = useProfileStore((state) => state.username); // getPublicProfile('Example Username');
    const biography = useProfileStore((state) => state.biography);

    const [isPenVisible, setPenVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const togglePenVisibility = () => {
        setPenVisible(!isPenVisible);
    };

    const handleEditLinkClick = () => {
        return setIsActive(!isActive);
    }

    return (
        <div className="relative h-full">
            <div className="flex h-screen">
                <div className="m-auto">
                    <Card className="w-[350px] text-center">
                        <EditableTreeHeaderComponent description={biography} username={username} imageURL={profile.imageURL} links={profile.links}>
                        </EditableTreeHeaderComponent>
                        <div>
                        <CardContent className="flex flex-col gap-2">
                            {profile.links.map((profileLink, index) => (
                                    // eslint-disable-next-line react/jsx-key
                                <Card className="w-[300px] text-center p-2 flex justify-between items-center">
                                    <Link target="_blank" href={profileLink.link}>{profileLink.name}</Link>
                                    {isPenVisible && <FaPen className={`mr-[10px]`} onClick={handleEditLinkClick}/>}
                                </Card>
                            ))}
                        </CardContent>
                        </div>
                    </Card> 
                </div>
            </div>
            
            <EditButton onClick={togglePenVisibility}></EditButton>
            <SettingsSectionComponent></SettingsSectionComponent>

            <div className={`flex h-screen w-screen absolute bg-[rgba(0,0,0,0.7)]`}>
                {isActive && <ScreenEditLinks onCalcel={handleEditLinkClick}></ScreenEditLinks>}
            </div>        
        </div>
    );

}