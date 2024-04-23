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
    username: "usuariologado123",
    biography: "Essa eh a minha biografia sem graça e placeholder",
    setUsername: (username: string) => set({username: username}),
    setBiography: (biography: string) => set({biography: biography})
}));

