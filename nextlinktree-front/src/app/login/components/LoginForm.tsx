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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import login from "../services/login.service";
import { loginSchema } from "./loginSchema";

// https://ui.shadcn.com/docs/components/form
// https://ui.shadcn.com/docs/components/toast
export default function LoginForm() {
    const { toast } = useToast();// Aqui é onde é usado um hook
    
    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        // TODO: Implementar lógica de cookie
        try {
            await login(values.email, values.password);
        } catch (error) {
            console.log(error);
            toast({
                description: "An error has ocurred, please try again later.",
                variant: "destructive"
            });
        }
    }

    return (
        <Form {...loginForm}>
            <form onSubmit={loginForm.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={loginForm.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="example@gmail.com" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <FormField control={loginForm.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="********" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <Button type="submit">Login</Button>
            </form>
        </Form>
    );
}