import { ChangeEvent, useState } from "react";
import search, { PublicUserProfile } from "../search-service/SearchService";
import { Input } from "@/components/ui/input";

export default function SearchBar({ setProfiles }: { setProfiles: (profiles: PublicUserProfile[]) => void }) {
    const [keyword, setKeyword] = useState("");

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