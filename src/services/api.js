import { userAxiosInstance } from "../axios/AxiosInstance";

export const userRegisteration = (value) => {
    return userAxiosInstance.post("/register", value);
};

export const userLogin = (value) => {
    return userAxiosInstance.post("/login", value)
}

export const isAuthUser = () => {
    return userAxiosInstance.get("/is_auth-user")
}