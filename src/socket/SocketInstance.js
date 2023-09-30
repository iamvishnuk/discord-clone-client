import io from "socket.io-client";
const baseURL = import.meta.env.VITE_BASE_URL;

// create a Socket.io instance
const socket = io(baseURL);

export default socket;
