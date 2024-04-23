"use client"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { PersonIcon } from "@radix-ui/react-icons";
import UpdateProfileForm from "./UpdateProfileForm";

// https://ui.shadcn.com/docs/components/drawer
// https://ui.shadcn.com/docs/components/button
export default function SettingsSection() {
    return (
        <Drawer>
            <div className="absolute left-4 bottom-4">
                <DrawerTrigger asChild>
                    <Button className="h-16 w-16 rounded-xl sticky" variant="outline" size="icon">
                        <PersonIcon className="h-8 w-8" />
                    </Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Update your profile</DrawerTitle>
                    <DrawerDescription>Got bored? Let&apos;s change up some things.</DrawerDescription>
                </DrawerHeader>
                <UpdateProfileForm></UpdateProfileForm>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}