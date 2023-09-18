import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../Pages/Home";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes route={"/login"} />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
};

export default Routers;
