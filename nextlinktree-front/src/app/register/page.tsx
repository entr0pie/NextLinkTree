import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RegisterFormComponent } from "./components/register-form.component";

export default function Register() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Create a Account</CardTitle>
                        <CardDescription>Already registed? <a href="/login">Login.</a></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RegisterFormComponent></RegisterFormComponent>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}