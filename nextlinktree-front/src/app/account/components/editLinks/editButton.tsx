import React, { useState } from "react";
import { PiLinkSimpleBold } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { FaSave } from "react-icons/fa";


export default function EditButton() {


    return (
        <div className="absolute left-4 bottom-24">
             <Button className="h-16 w-16 rounded-xl sticky" variant="outline" size="icon" >
                <PiLinkSimpleBold className="h-8 w-8" />
            </Button>
        </div>
    )
}