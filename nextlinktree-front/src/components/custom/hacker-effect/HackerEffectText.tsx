"use client"

import { useState } from "react";

export default function HackerEffectText({ content }: { content: string } ) {

    const timebox = 30;
    const iterations_per_shift = 5;

    const [text, setText] = useState(content);

    async function applyEffect() {
        setText(getRandomString(content.length));

        await new Promise(r => setTimeout(r, timebox));
    
        var original_copy = "";
        
        for (var i = 0; i < content.length; i++) {
            original_copy += content[i];
            
            for (var j = 0; j < iterations_per_shift; j++) {
                const shift = original_copy + getRandomString(content.length - original_copy.length);
                setText(shift);
                await new Promise(r => setTimeout(r, timebox));
            }
        }
    }

    return (
        <div onMouseEnter={applyEffect}>{text}</div>
    );
}

function getRandomString(size: number) {
    const getRandomLetter = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }   

    let random = "";  
    
    for (var i = 0; i < size; i++) {
        random += getRandomLetter();     
    }
    
    return random;
}