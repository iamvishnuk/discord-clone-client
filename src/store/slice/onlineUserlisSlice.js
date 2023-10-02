import { createSlice } from "@reduxjs/toolkit";

export const OnlineUserlistSlice = createSlice({
    name: "Online-user-list",
    initialState: {
        onlineUserList: null,
    },
    reducers: {
        changeOnlineUserlist: (state, action) => {
            state.onlineUserList = action.payload;
        },
    },
});

export const { changeOnlineUserlist } = OnlineUserlistSlice.actions;
export default OnlineUserlistSlice.reducer;
