import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import LoginFormComponent from "./components/login-form.component";
import { Metadata } from "next";
import TextHackerEffectComponent from "@/components/custom/hacker-effect/TextHackerEffectComponent";


export const metadata: Metadata = {
    title: "Login | NextLinkTree",
    description: "Login into LinkTree",
}

export default function Login() {

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle><TextHackerEffectComponent content="LOGIN"></TextHackerEffectComponent></CardTitle>
                        <CardDescription>Not registered yet? <a href="/register">Create a account.</a></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginFormComponent></LoginFormComponent>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}