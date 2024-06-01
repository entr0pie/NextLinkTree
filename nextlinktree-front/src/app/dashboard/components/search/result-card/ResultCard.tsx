"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type Profile = {
    username: string,
    fullName: string,
    biography: string,
    links: { alias: string, link: string }[],
};

export type ResultCardProps = {
    profiles: Profile[],
    defaultText: {
        message?: string,
        description?: string,
    },
};

export default function ResultCard({ profiles, defaultText }: ResultCardProps) {

    function renderRow({ username, fullName, biography, links }: Profile) {
        return (
            <div>
                <Card className="w-full overflow-hidden flex flex-col items-start justify-center h-16">
                    <div className="flex items-center justify-start w-full m-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>{username}</AvatarFallback>
                        </Avatar>
                        <h1 className="ml-4">{fullName}</h1>
                        <h2 className="ml-2 text-gray-400">{username}</h2>
                    </div>
                </Card>
            </div>
        );
    }

    function emptyState(message: string | undefined = "No results found.", description: string | undefined = "Try another search.") {
        return (
            <div className="w-full rounded-sm bg-card h-80 flex items-center justify-center">
                <div className="h-1/3 w-1/3 flex flex-col space-y-2 items-center justify-center">
                    <div className="h-12 w-12">
                        <MagnifyingGlassIcon className="w-full h-full"></MagnifyingGlassIcon>
                    </div>
                    <h1 className="text-xl">{message}</h1>
                    <h2 className="text-lg text-gray-400">{description}</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col space-y-2">
            {profiles.length > 0 ? profiles.map((profile) => renderRow(profile)) : emptyState(defaultText.message, defaultText.description)}
        </div>
    );
}