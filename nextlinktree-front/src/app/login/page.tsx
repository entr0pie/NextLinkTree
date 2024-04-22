import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import LoginForm from "./components/LoginForm";
import { Metadata } from "next";
import HackerEffectText from "@/components/custom/hacker-effect/HackerEffectText";


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
                        <CardTitle><HackerEffectText content="LOGIN"></HackerEffectText></CardTitle>
                        <CardDescription>Not registered yet? <a href="/register">Create a account.</a></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginForm></LoginForm>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}