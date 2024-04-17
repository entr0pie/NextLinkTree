"use client"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { GearIcon } from "@radix-ui/react-icons";
import { useProfileStore } from "./ProfileStore";

export default function SettingsSectionComponent() {
    
    const [username, setUsername] = useProfileStore((state) => [state.username, state.setUsername]);
    const [biography, setBiography] = useProfileStore((state) => [state.biography, state.setBiography]);

    return (
        <Drawer>
            <div className="absolute left-4 bottom-4">
                <DrawerTrigger asChild>
                    <Button className="h-16 w-16 rounded-xl sticky" variant="outline" size="icon">
                        <GearIcon className="h-8 w-8"/>
                    </Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>{ username }</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button onClick={
                        () => {
                            setUsername("Kauan");
                        }
                    }>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
    );
}