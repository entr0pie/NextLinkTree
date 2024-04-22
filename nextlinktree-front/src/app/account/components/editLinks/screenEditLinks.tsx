import React, {ChangeEvent} from "react";
import { useEditLinksStore } from './EditlinksStore';


interface EditLinkProps {
    onCalcel: () => void
}

const ScreenEditLinks: React.FC<EditLinkProps> = ({onCalcel}) => {
    const {name, links, setName, setLink} = useEditLinksStore();

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    };
    
    return (
        <div className="m-auto">
            <div className="bg-gray-900 p-[85px] rounded-md flex flex-col gap-5 ">
                <form action="" className="flex flex-col gap-[8px]">
                    <label htmlFor="">Description</label>
                    <input type="text" className="rounded-md p-2" value={name} onChange={handleNameChange}/>
                </form>

                <form action="" className="flex flex-col gap-[8px]">
                    <label htmlFor="">Link</label>
                    <input type="text" className="rounded-md p-2" value={links} onChange={handleLinkChange}/>
            
                </form>

                <button className="w-[220px] h-[50px] bg-gray-600 rounded-[10px] m-auto mt-4" onClick={onCalcel}>
                    ready
                </button>

            </div>
        </div>
    )
}

export default ScreenEditLinks;