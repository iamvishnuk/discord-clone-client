import { userAxiosInstance } from "../axios/AxiosInstance";

export const userRegisteration = (value) => {
    return userAxiosInstance.post("/register", value);
};

export const userLogin = (value) => {
    return userAxiosInstance.post("/login", value);
};

export const isAuthUser = () => {
    return userAxiosInstance.get("/is-auth-user");
};

export const addFrined = (value) =>
    userAxiosInstance.post("/add-friend", value);

export const getPendingRequests = () =>
    userAxiosInstance.get("/get-pending-requests");

export const acceptFriendRequest = (value) =>
    userAxiosInstance.post("/accept-friend-request", value);

export const rejectFriendRequest = (id) =>
    userAxiosInstance.delete(`/reject-friend-request/${id}`);

export const getAllFriends = () => userAxiosInstance.get("/get-all-friends");

export const addFriendToDirectMessageList = (data) =>
    userAxiosInstance.post("/add-friend-to-dm-list", data);

export const getDmUserList = () => userAxiosInstance.get("/get-dm-userlist");
