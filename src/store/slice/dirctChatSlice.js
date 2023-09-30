import Socket from "../../socket/SocketInstance";
import { createSlice } from "@reduxjs/toolkit";

export const directChatSlice = createSlice({
    name: "directChats",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {},
    extraReducers: {},
});

export default directChatSlice.reducer;
