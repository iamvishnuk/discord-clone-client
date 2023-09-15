import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes route={"/login"} />}>
                    <Route path="/" element={<div>home</div>} />
                </Route>
            </Routes>
        </>
    );
};

export default Routers;
