import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function EditLinkButton() {
    return (
        <Drawer>
            <div className="h1/2">
                <DrawerTrigger asChild>
                    <Button className={clsx(
                        "h-8 w-8 rounded-full",
                        "hover:bg-primary",
                    )} variant="outline" size="icon">
                        <Pencil1Icon className="h-4 w-4" />
                    </Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Update your link.</DrawerTitle>
                    <DrawerDescription>Change the way the world see you</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}