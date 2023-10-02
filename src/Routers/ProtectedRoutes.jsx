import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isAuthUser } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { changeUserDetails } from "../store/slice/userSlice";
import { getDirectMessageList } from "../../src/store/slice/directMsgSlice";
import Socket from "../socket/SocketInstance";

const ProtectedRoutes = ({ route }) => {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { userId } = useSelector((state) => state.user);

    useEffect(() => {
        const verify = () => {
            console.log("ProtectedRoutes called");
            isAuthUser()
                .then((res) => {
                    dispatch(
                        changeUserDetails({
                            userId: res.data.userId,
                            displayName: res.data.displayName,
                            userName: res.data.userName,
                            image: res.data.image,
                            email: res.data.email,
                            friends: res.data.friends,
                        })
                    );
                    dispatch(getDirectMessageList());
                    Socket.emit("online-user", res.data.userId);
                    setAuth(res.data.auth);
                })
                .catch((error) => {
                    setAuth(false);
                    localStorage.removeItem("userToken");
                    navigate("/login");
                });
        };
        verify();

        return () => {
            // disconnect user event for removing the user from the online user list
            console.log("return called")
            Socket.emit("disconnect-user");
        };
    }, []);

    if (auth === null) return;

    return auth ? <Outlet /> : <Navigate to={route} />;
};

export default ProtectedRoutes;
