"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { EditPrivateProfileButton } from "./EditPrivateProfileButton";
import { useProfileStore } from "../ProfileStore";

export function PrivateProfileAvatar() {

    const [username] = useProfileStore((state) => [
        state.username,
        state.setUsername,
    ]);

    return (
        <Avatar className="h-20 w-20 text-center">
            <AvatarImage className="rounded-full h-20 w-20 object-cover" src="https://assets.portalleodias.com/2024/04/vampetasso-a-trolagem-brasileira-contra-o-preconceito-sofrido-por-vin.webp" alt="@shadcn" />
            <AvatarFallback>{username}</AvatarFallback>
            <EditPrivateProfileButton />
        </Avatar>
    );
}