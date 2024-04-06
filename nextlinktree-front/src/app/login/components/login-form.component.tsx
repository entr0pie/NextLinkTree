"use client"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { Input } from "@/components/ui/input";

import { loginSchema } from "./login.schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import login from "../services/login.service";

export default function LoginFormComponent() {
    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof loginSchema>) {
        // TODO: Implementar lógica de cookie
        console.log(await login(values.email, values.password));
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
                            <Input placeholder="secret" {...field}></Input>
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