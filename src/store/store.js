import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import directMsgReducer from "./slice/directMsgSlice";
import directChatReducer from "./slice/dirctChatSlice";
import onlineUserlistReducer from "./slice/onlineUserlisSlice";

export const Store = configureStore({
    reducer: {
        user: userReducer,
        directMsg: directMsgReducer,
        directChat: directChatReducer,
        onlineUserlist: onlineUserlistReducer,
    },
});
