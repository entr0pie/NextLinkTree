"use client";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useProfileStore } from "../ProfileStore";

export function PrivateProfileInfo() {

    const [username] = useProfileStore((state) => [state.username]);
    const [biography] = useProfileStore((state) => [state.biography]);

    return (
        <CardHeader className="text-center">
            <CardTitle>{username}</CardTitle>
            <CardDescription>{biography}</CardDescription>
        </CardHeader>
    );
}
