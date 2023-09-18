import axios from "axios";
const baseURL = import.meta.env.VITE_BASE_URL;

const createAxiosClient = () => {
    const client = axios.create({
        baseURL,
        timeout: 5000,
        timeoutErrorMessage: "Request timeout... Please try again later",
    });
    return client;
};

const attachToken = (req, tokenName) => {
    let authToken = localStorage.getItem(tokenName);
    if (authToken) {
        const modifiedReq = { ...req };
        modifiedReq.headers.Authorization = `Bearer ${authToken}`;
        return modifiedReq;
    }
    return req;
};

const userAxiosInstance = createAxiosClient(baseURL);

userAxiosInstance.interceptors.request.use(async (req) => {
    const modifiedReq = attachToken(req, "userToken");
    return modifiedReq;
});

export { userAxiosInstance };
