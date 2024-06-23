import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { TrashIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { DeleteLinkForm } from "./DeleteLinkForm";

type Props = {
    alias: string;
    link: string;
}

export function DeleteLinkButton({ alias, link }: Props) {
    return (
        <Drawer>
            <div className="">
                <DrawerTrigger asChild>
                    <Button className={
                        clsx(
                            "h-8 w-8 rounded-full",
                            "hover:bg-destructive",
                        )
                    } variant="outline" size="icon">
                        <TrashIcon className="h-4 w-4" />
                    </Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Update your link.</DrawerTitle>
                    <DrawerDescription>Change the way the world see you</DrawerDescription>
                </DrawerHeader>
                <DeleteLinkForm alias={alias} link={link} />
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}