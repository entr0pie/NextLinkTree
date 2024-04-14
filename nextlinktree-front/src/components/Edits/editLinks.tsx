import React from "react";
import { getPublicProfile } from '../../app/[username]/services/PublicProfileService';



interface EditLinkProps {
    onCalcel: () => void
}
const EditLinks: React.FC<EditLinkProps> = ({onCalcel}) => {
    return (
        <div className="m-auto">
            <div className="bg-gray-900 p-[85px] rounded-md flex flex-col gap-5 ">
                <form action="" className="flex flex-col gap-[8px]">
                    <label htmlFor="">Description</label>
                    <input type="text" className="rounded-md p-2"/>
                </form>

                <form action="" className="flex flex-col gap-[8px]">
                    <label htmlFor="">Link</label>
                    <input type="text" className="rounded-md p-2"/>
            
                </form>

                <button className="w-[220px] h-[50px] bg-gray-600 rounded-[10px] m-auto mt-4" onClick={onCalcel}>
                    ready
                </button>

            </div>
        </div>
    )
}

export default EditLinks;