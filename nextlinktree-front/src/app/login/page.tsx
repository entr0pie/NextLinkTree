import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import LoginFormComponent from "./components/login-form.component";


export default function Login() {

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Not registered yet? <a href="/">Create a account.</a></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <LoginFormComponent></LoginFormComponent>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}