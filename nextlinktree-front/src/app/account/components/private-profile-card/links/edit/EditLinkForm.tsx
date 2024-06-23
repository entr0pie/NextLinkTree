
"use client"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useLinksStore } from "../LinksStore";
import { DrawerClose } from "@/components/ui/drawer";
import { updateLink as updateLinkApi } from "../../PrivateProfileService";

export const editLinkSchema = z.object({
    alias: z
        .string()
        .min(1, { message: "The alias must have at least 1 char" }),
    link: z.string().min(1, { message: "Links must have at least 1 char" }),
});

type Props = {
    alias: string;
    link: string;
    onSubmit: (values: z.infer<typeof editLinkSchema>) => void;
}

export function EditLinkForm({ alias, link }: Props) {
    const editLinkForm = useForm<z.infer<typeof editLinkSchema>>({
        resolver: zodResolver(editLinkSchema),
        defaultValues: {
            alias: alias,
            link: link
        },
    });

    const [links, updateLink] = useLinksStore((state) => [state.links, state.updateLink]);

    async function onSubmit(values: z.infer<typeof editLinkSchema>) {
        updateLink(link, values.alias, values.link);
        updateLinkApi(alias, values.alias, values.link);
    }

    return (
        <Form {...editLinkForm}>
            <form onSubmit={editLinkForm.handleSubmit(onSubmit)} className="space-y-8 p-4">
                <FormField control={editLinkForm.control} name="alias" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Alias</FormLabel>
                        <FormControl>
                            <Input placeholder="My Instagram Page" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <FormField control={editLinkForm.control} name="link" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Link</FormLabel>
                        <FormControl>
                            <Input placeholder="https://instagram.com" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <DrawerClose asChild>
                    <Button type="submit">Update Link</Button>
                </DrawerClose>
            </form>
        </Form>
    );
}