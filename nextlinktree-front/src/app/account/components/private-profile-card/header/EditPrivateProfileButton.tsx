import { PublicProfile } from "@/app/tree/[username]/services/PublicProfileService";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Pencil1Icon } from "@radix-ui/react-icons";
import UpdateProfileForm from "../../settings-section/UpdateProfileForm";
import { UpdateProfile } from "./UpdateProfile";
import { useProfileStore } from "../ProfileStore";


export function EditPrivateProfileButton() {

    return (
        <Drawer>
            <div className="absolute right-0 bottom-0 ">
                <DrawerTrigger asChild>
                    <Button className="h-8 w-8 rounded-full" variant="outline" size="icon">
                        <Pencil1Icon className="h-4 w-4" />
                    </Button>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Update your profile</DrawerTitle>
                    <DrawerDescription>Got bored? Let&apos;s change up some things.</DrawerDescription>
                </DrawerHeader>
                <UpdateProfile />
                <DrawerFooter>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}