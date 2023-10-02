import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "user",
    initialState: {
        userId: "",
        displayName: "",
        userName: "",
        image: "",
        email: "",
        friends: null
    },
    reducers: {
        changeUserDetails: (state, action) => {
            state.userId = action.payload.userId;
            state.displayName = action.payload.displayName;
            state.userName = action.payload.userName;
            state.image = action.payload.image;
            state.email = action.payload.email;
            state.friends = action.payload.friends
        },
    },
});

export const { changeUserDetails } = UserSlice.actions
export default UserSlice.reducer