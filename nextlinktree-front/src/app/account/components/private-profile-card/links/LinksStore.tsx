import { PublicProfile, PublicProfileLinks, getPublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { create } from "zustand";

export interface LinksState {
    links: PublicProfileLinks[];
    addLink: (alias: string, link: string) => void;
    updateLink: (oldLink: string, alias: string, link: string) => void;
    removeLink: (link: string) => void;
    getLinks: () => PublicProfileLinks[];
    getLinkByURL: (url: string) => PublicProfileLinks | undefined;
}

export const useLinksStore = create<LinksState>((set, get) => ({
    links: [] as PublicProfileLinks[],
    addLink: (alias: string, link: string) => set({ links: [...get().links, { alias, link }] }),
    updateLink: (oldLink: string, alias: string, link: string) => set({ links: get().links.map((l) => l.link === oldLink ? { alias, link } : l) }),
    removeLink: (link: string) => set({ links: get().links.filter((l) => l.link !== link) }),
    getLinks: () => get().links,
    getLinkByURL: (url: string) => get().links.find((l) => l.link === url),
}));

getPublicProfile("user1").then((profile) => {
    profile.links.forEach((link) => {
        useLinksStore.getState().addLink(link.alias, link.link);
    });
});