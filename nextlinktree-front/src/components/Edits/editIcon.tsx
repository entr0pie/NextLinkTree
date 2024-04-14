import React from "react";
import { FaMarker } from "react-icons/fa6";

interface EditIconProps {
    showState: boolean;
    linkState: () => void;
 }

 const EditIcon: React.FC<EditIconProps> = ({ showState, linkState }) => {
    if (!showState) {
      return null;
    }
  
    return <button onClick={linkState}><FaMarker className="right-5 bottom-3 absolute" /></button>;
  };
  
  export default EditIcon;