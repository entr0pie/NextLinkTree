import { getPublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { create } from "zustand";

// https://docs.pmnd.rs/zustand/getting-started/introduction
// https://docs.pmnd.rs/zustand/guides/typescript
export interface ProfileState {
    username: string;
    biography: string;
    setUsername: (username: string) => void;
    setBiography: (biography: string) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
    username: "",
    biography: "",
    setUsername: (username: string) => set({ username: username }),
    setBiography: (biography: string) => set({ biography: biography })
}));

getPublicProfile("user1").then((profile) => {
    useProfileStore.setState({
        username: profile.username,
        biography: profile.biography
    });
});
