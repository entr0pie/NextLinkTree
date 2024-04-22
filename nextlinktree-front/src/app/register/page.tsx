import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RegisterForm } from "./components/RegisterForm";
import { Metadata } from "next";
import HackerEffectText from "@/components/custom/hacker-effect/HackerEffectText";

export const metadata: Metadata = {
    title: "Register | NextLinkTree",
    description: "Create a new account into the LinkTree",
}

export default function Register() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle><HackerEffectText content="REGISTER"></HackerEffectText></CardTitle>
                        <CardDescription>Already registed? <a href="/login">Login.</a></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RegisterForm></RegisterForm>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}