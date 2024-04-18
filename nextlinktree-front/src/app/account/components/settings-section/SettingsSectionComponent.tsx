"use client"

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { useProfileStore } from "../ProfileStore";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateProfileSchema } from "../updateProfileSchema";
import UpdateProfileFormComponent from "./UpdateProfileFormComponent";

export default function SettingsSectionComponent() {
    
    return (
        <Drawer>
            <div className="absolute left-4 bottom-4">
                <DrawerTrigger asChild>
                    <Button className="h-16 w-16 rounded-xl sticky" variant="outline" size="icon">
                        <PersonIcon className="h-8 w-8"/>
                    </Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Update your profile</DrawerTitle>
                <DrawerDescription>Got bored? Let&apos;s change up some things.</DrawerDescription>
                </DrawerHeader>
                <UpdateProfileFormComponent></UpdateProfileFormComponent>
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
    );
}