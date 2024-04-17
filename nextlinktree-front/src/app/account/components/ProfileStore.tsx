import { create } from "zustand";

export interface ProfileState {
    username: string;
    biography: string;
    setUsername: (username: string) => void;
    setBiography: (biography: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    username: "",
    biography: "",
    setUsername: (username: string) => set({username: username}),
    setBiography: (biography: string) => set({biography: biography})
}));

