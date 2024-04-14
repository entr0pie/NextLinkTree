import React from "react";
import { FaMarker } from "react-icons/fa6";





export default function editButton() {
    return (

        <button className={`rounded-full bg-gray-700 p-5`}> 
            <FaMarker className="w-8 h-8" />
        </button>

    )
}