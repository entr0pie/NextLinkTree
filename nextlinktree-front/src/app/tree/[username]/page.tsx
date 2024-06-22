import type { PublicProfile } from "./services/PublicProfileService";
import { getPublicProfile } from "./services/PublicProfileService";
import { UsernameCard } from "./card-username/UsernameCard";
import { notFound } from "next/navigation";

// https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
export default async function PublicProfile({ params }: { params: { username: string } }) {
    let profile: PublicProfile;

    try {
        profile = await getPublicProfile(params.username);
    } catch (error) {
        notFound();
    }

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <UsernameCard profile={profile} />
            </div>
        </div>
    )
}