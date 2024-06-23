

"use client"

import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import { deleteLink as deleteLinkApi } from "../../PrivateProfileService";
import { useLinksStore } from "../LinksStore";

type Props = {
    alias: string;
    link: string;
}

export function DeleteLinkForm({ alias, link }: Props) {

    const [links, setLinks] = useLinksStore((state) => [state.links, state.setLinks]);

    async function deleteLink() {
        deleteLinkApi(alias).then(() => {
            setLinks(links.filter((l) => l.link !== link));
        });
    }

    return (
        <DrawerClose>
            <Button onClick={() => deleteLink()}>Delete Link</Button>
        </DrawerClose>
    );
}