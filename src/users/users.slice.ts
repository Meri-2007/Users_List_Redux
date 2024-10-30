import axios from "axios";
import { createAppSlice } from "../app/createAppSlice";
import { IState, IUser } from "./types";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: IState = {
    list: [],
};

export const userSlice = createAppSlice({
    name: "users",
    initialState,
    reducers: create => ({
        getAllUsers: create.asyncThunk(
            async () => {
                const response = await axios.get("http://localhost:3004/users")
                return response.data
            },
            {
                fulfilled: (state,action :PayloadAction<IUser[]>) => {
                    state.list=action.payload

                }
            }
        ),
        removeUser: create.asyncThunk(
            async (id: string) => {
                const response = await axios.delete(`http://localhost:3004/users/${id}` )
                return response.data

            },
            {
                fulfilled: (state, action: PayloadAction<IUser>) => {
                    state.list = state.list.filter(user => user.id != action.payload.id)
                }
            }
        )

    }),
    selectors: {
        users: state => state.list
    }
})

export const{getAllUsers,removeUser}=userSlice.actions
export const {users}=userSlice.selectors
export default userSlice.reducer;