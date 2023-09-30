import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    addFriendToDirectMessageList,
    getDmUserList,
} from "../../services/api";

export const addFrndToDmList = createAsyncThunk(
    "addFrndToDmList",
    async (userId) => {
        const response = await addFriendToDirectMessageList({ userId });
        return response.data.directMessage;
    }
);

export const getDirectMessageList = createAsyncThunk(
    "getDirectMessageList",
    async () => {
        const res = await getDmUserList();
        return res.data.directMessage;
    }
);

export const DirectMsgSlice = createSlice({
    name: "directMsg",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    reducers: {}, // Add any other reucers here
    extraReducers: (builders) => {
        builders.addCase(addFrndToDmList.pending, (state, action) => {
            state.isLoading = true;
        });
        builders.addCase(addFrndToDmList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builders.addCase(addFrndToDmList.rejected, (state, action) => {
            state.isError = true;
        });
        builders.addCase(getDirectMessageList.pending, (state, action) => {
            state.isLoading = true;
        });
        builders.addCase(getDirectMessageList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builders.addCase(getDirectMessageList.rejected, (state, action) => {
            state.isError = true;
        });
    },
});

export default DirectMsgSlice.reducer;
