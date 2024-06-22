"use client";

import { Button } from "@/components/ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import clsx from "clsx";

type Props = {
    label: string;
    onDatePick: (date: Date | undefined) => void;
}

export function CalendarButton({ label, onDatePick }: Props) {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [text, setText] = useState<string>(label);

    const onSelect = (date: Date | undefined) => {
        setDate(date);
        onDatePick(date);
        setText(date?.toLocaleDateString() ?? label);
    };

    return (
        <div>
            <Popover>
                <PopoverTrigger asChild >
                    <Button className={clsx("flex items-center space-x-1 min-w-[120px]", date ? "bg-primary" : "bg-secondary")}>
                        <span>{text}</span>
                        <CalendarIcon className="h-6 w-6"></CalendarIcon>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={onSelect}
                        className="rounded-md border shadow"
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}