"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

export default function PublicProfile({ params }: { params: { username: string } }) {

    const username = params.username;

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Card className="w-[350px] text-center">
                    <div className="pt-5">
                        <div className="flex justify-center">
                            <Avatar className="text-center">
                                <AvatarImage className="h-20 w-20 rounded-full" src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        
                        <CardHeader className="text-center">
                            <CardTitle>{username}</CardTitle>
                            <CardDescription>Marquei oftalmologista</CardDescription>
                        </CardHeader>
                    </div>
                    <div>
                        <CardContent className="flex flex-col gap-2">
                            <Card className="w-[300px] text-center p-2"><Link target="_blank" href={"https://facebook.com"}>Facebook</Link></Card>
                            <Card className="w-[300px] text-center p-2"><Link target="_blank" href={"https://instagram.com"}>Instagram</Link></Card>
                            <Card className="w-[300px] text-center p-2"><Link target="_blank" href={"https://web.whatsapp.com"}>Whatsapp</Link></Card>
                            <Card className="w-[300px] text-center p-2"><Link target="_blank" href={"https://website.com"}>Site</Link></Card>
                            <Card className="w-[300px] text-center p-2"><Link target="_blank" href={"https://onlyfans.com/u329291482"}>Onlyfans</Link></Card>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    
    )
}