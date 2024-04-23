"use client"

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import register from "../services/register.service";
import { registerSchema } from "./registerSchema";

// https://ui.shadcn.com/docs/components/form
// https://ui.shadcn.com/docs/components/toast
export function RegisterForm() {
    const { toast } = useToast();
    
    const registerForm = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        },
    });

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            await register(values.name, values.email, values.password);
        } catch (error) {
            console.log(error);
            toast({
                description: "An error has ocurred, please try again later.",
                variant: "destructive"
            });
        }
    }

    return (
        <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onSubmit)} className="space-y-8">
                <FormField control={registerForm.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="example@gmail.com" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <FormField control={registerForm.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Doe" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <FormField control={registerForm.control} name="password" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="********" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <FormField control={registerForm.control} name="passwordConfirmation" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password Confirmation</FormLabel>
                        <FormControl>
                            <Input type="password" placeholder="********" {...field}></Input>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}>
                </FormField>
                <Button type="submit">Register</Button>
            </form>
        </Form>
    );
}