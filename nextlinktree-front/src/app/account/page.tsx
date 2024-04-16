import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { getPublicProfile } from "../[username]/services/PublicProfileService";
import { Link } from "lucide-react";
import EditableTreeHeaderComponent from "./components/EditableTreeHeaderComponent";

export default function Account() {

    const profile = getPublicProfile('Example Username');

    return (
        <div className="flex h-screen">
        <div className="m-auto">
            <Card className="w-[350px] text-center">
                <EditableTreeHeaderComponent description={profile.description} username={profile.username} imageURL={profile.imageURL} links={profile.links}></EditableTreeHeaderComponent>
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