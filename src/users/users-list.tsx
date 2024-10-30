import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getAllUsers, removeUser, users } from "./users.slice";
import UserItem from "./user-item";

export const UserList = () => {
    const dispatch = useAppDispatch()
    const userList = useAppSelector(users)

    useEffect(() => {
        dispatch(getAllUsers())
        
    }, [dispatch])

    const handleDelete = (id: string) => {
        dispatch(removeUser(id))
    };

    return (
        <div>
            <h3>User List ({userList.length})</h3>
            {userList.map(user => (
                <UserItem key={user.id} user={user} onDelete={handleDelete} /> 
            ))}
        </div>
    );
};
