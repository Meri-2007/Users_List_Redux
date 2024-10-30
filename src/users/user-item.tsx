import React from "react";
import { IUser } from "./types";

interface IProps {
    user: IUser;
    onDelete: (id: string) => void
}

const UserItem: React.FC<IProps> = ({ user, onDelete }) => {
    return (
        <div>
            <p>
              name:  {user.name} age {user.age}, salary{user.salary}
            </p>
            <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
    );
};

export default UserItem;
