"use client";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { getPublicProfile } from "../tree/[username]/services/PublicProfileService";
import EditableTreeHeader from "./components/EditableTreeHeader";
import { useProfileStore } from "./components/ProfileStore";
import EditButton from "./components/edit-links/EditButton";
import ScreenEditLinks from './components/edit-links/ScreenEditLinks';
import SettingsSection from "./components/settings-section/SettingsSection";

export default function Account() {
    
    const profile = getPublicProfile("kauan");
    const username = useProfileStore((state) => state.username);
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
                        <EditableTreeHeader description={biography} username={username} imageURL={profile.imageURL} links={profile.links}>
                        </EditableTreeHeader>
                        <div>
                        <CardContent className="flex flex-col gap-2">
                            {profile.links.map((profileLink, index) => (
                                    // eslint-disable-next-line react/jsx-key
                                <Card className="w-[300px] text-center p-2 relative">
                                    <Link target="_blank" href={profileLink.link}>{profileLink.name}</Link>
                                    {isPenVisible && <FaPen className={`mr-[10px] absolute right-2 bottom-3`} onClick={handleEditLinkClick}/>}
                                </Card>
                            ))}
                        </CardContent>
                        </div>
                    </Card> 
                </div>
                <EditButton onClick={togglePenVisibility}></EditButton>
                <SettingsSection></SettingsSection>
            </div>
            

            <div className={`flex h-screen w-screen absolute bg-[rgba(0,0,0,0.7)] top-0 ${!isActive ? 'hidden' : 'visible'}`}>
                {isActive && <ScreenEditLinks onCalcel={handleEditLinkClick}></ScreenEditLinks>}
            </div>        
        </div>
    );

}