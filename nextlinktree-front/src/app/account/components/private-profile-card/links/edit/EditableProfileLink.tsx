import { Card } from "@/components/ui/card";
import { EditLinkButton } from "./EditLinkButton";
import { DeleteLinkButton } from "../delete/DeleteLinkButton";

type Props = {
    alias: string;
    link: string;
    key: number;
}

export function EditableProfileLink({ alias, link, key }: Props) {
    return (
        <div className="flex space-x-2">
            <Card key={key} className="w-[300px] text-center p-2 cursor-pointer">
                <span>{alias}</span>
            </Card>
            <EditLinkButton alias={alias} link={link} />
            <DeleteLinkButton />
        </div>
    )
}