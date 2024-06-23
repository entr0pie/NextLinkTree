import { PublicProfile, getPublicProfile } from "../tree/[username]/services/PublicProfileService";
import { notFound } from "next/navigation";
import { PrivateProfileCard } from "./components/private-profile-card/PrivateProfileCard";

export default async function Account() {

    let profile: PublicProfile;

    try {
        // TODO: Get the public profile of the user via JWT
        profile = await getPublicProfile("user1");
    } catch (error) {
        notFound();
    }

    return (
        <div className="relative h-full">
            <div className="flex h-screen">
                <div className="m-auto">
                    <PrivateProfileCard profile={profile} />
                </div>
            </div>
        </div>
    );

}