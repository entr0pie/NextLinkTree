"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ResultCard from "./result-card/ResultCard";
import { useState } from "react";
import search, { PublicUserProfile } from './search-service/SearchService';

export default function SearchBox() {
    const [profiles, setProfiles] = useState<PublicUserProfile[]>([]);
    const [keyword, setKeyword] = useState("");

    /**
     * Render the input for the search. Contains the logic for the API Querying.
     * 
     * @returns {JSX.Element} The search bar. 
     */
    function renderSearchBar() {
        const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setKeyword(value);

            setTimeout(() => {
                if (value !== "") {
                    search(value).then((data) => {
                        setProfiles(data);
                    });
                } else {
                    setProfiles([]);
                }
            }, 200);
        };

        return (
            <div className="w-full">
                <Input type="text" value={keyword} placeholder="Search here..." onChange={(e) => handleInput(e)}></Input>
            </div>
        );
    }

    /**
     * Renders the result card.
     * 
     * @returns {JSX.Element} The result card.
     */
    function renderResultCard() {
        const defaultState = {
            message: "No results found.",
            description: "Try searching for something else.",
        }

        return (
            <div className="w-full mt-6 h-80 overflow-y-scroll">
                <ResultCard profiles={profiles} defaultText={{ ...defaultState }}></ResultCard>
            </div >
        );
    }

    return (
        <div className="flex flex-col space-y-5 p-4 w-full">
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>Search everything.</CardTitle>
                    <CardDescription>What tree should the universe show you?</CardDescription>
                </CardHeader>
                <CardContent>
                    {renderSearchBar()}
                    {renderResultCard()}
                </CardContent>
            </Card>
        </div>
    );
}