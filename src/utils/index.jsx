import Socket from "../socket/SocketInstance";

export const hanldeSocketDisconnect = () => {
    // Perform cleanup logic and emit disconnection event when logging out
    Socket.disconnect("hello");
};
