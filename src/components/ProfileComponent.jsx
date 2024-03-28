import React, { useState } from "react";
import ProfileCard from "./Common/profilecard/ProfileCard";
import ProfileEdit from "./Common/profileEdit/ProfileEdit";

const ProfileComponent = ({ currentUser }) => {
  const [isEdit, setIsEdit] = useState(false);

  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {isEdit?(<ProfileEdit onEdit={onEdit} currentUser={currentUser} />):
        (<ProfileCard currentUser={currentUser} onEdit={onEdit}/>)}
      
    </div>
  );
};

export default ProfileComponent;
