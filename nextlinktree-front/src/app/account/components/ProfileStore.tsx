import { getPublicProfile } from "@/app/[username]/services/PublicProfileService";
import { create } from "zustand";

export interface ProfileState {
    username: string;
    biography: string;
    setUsername: (username: string) => void;
    setBiography: (biography: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    username: "kauanlindinho123",
    biography: "Oi eu sou o Kauan o maior vaicião da história.",
    setUsername: (username: string) => set({username: username}),
    setBiography: (biography: string) => set({biography: biography})
}));

