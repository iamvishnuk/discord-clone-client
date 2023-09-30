import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import directMsgReducer from "./slice/directMsgSlice";
import directChatReducer from "./slice/dirctChatSlice"

export const Store = configureStore({
    reducer: {
        user: userReducer,
        directMsg: directMsgReducer,
        directChat: directChatReducer
    },
});
