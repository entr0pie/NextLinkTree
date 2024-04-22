import create from 'zustand';

export interface EditLinksStore {
    name: string,
    links: string,
    setName: (name:string) => void,
    setLink: (links:string) => void
}

export const useEditLinksStore = create<EditLinksStore>((set) => ({
    name: '',
    links: '',
    setName: (name:string) => set({name}),
    setLink: (links:string) => set({links})
}));