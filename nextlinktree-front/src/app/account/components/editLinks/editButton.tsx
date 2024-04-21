import React, { useState } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaSave } from "react-icons/fa";

interface Props {
    onClick: () => void,
}

export default function EditButton({onClick}: Props) {
    return (
        <div className="absolute left-4 bottom-24">
             <Button className="h-16 w-16 rounded-xl sticky" variant="outline" size="icon" onClick={onClick}>
                <PiLinkSimpleBold className="h-8 w-8" />
            </Button>
        </div>
    )
}