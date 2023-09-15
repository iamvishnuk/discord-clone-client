import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { isAuthUser } from "../services/api";

const ProtectedRoutes = ({ route }) => {
    const [auth, setAuth] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const verify = () => {
            isAuthUser()
                .then((res) => {
                    setAuth(res.data.auth);
                })
                .catch((error) => {
                    setAuth(false);
                    localStorage.removeItem("userToken");
                    navigate("/login");
                });
        };
        verify();
    }, []);

    if (auth === null) return;

    return auth ? <Outlet /> : <Navigate to={route} />;
};

export default ProtectedRoutes;
