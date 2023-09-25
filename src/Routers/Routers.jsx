import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../Pages/Home";
import MainLayout from "../layout/main/MainLayout";
import { DirectMsgLayout } from "../layout/DirectMsg/DirectMsgLayout";
import DirectMessage from "../Pages/DirectMessage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoutes route={"/login"} />}>
                    <Route element={<MainLayout />}>
                        <Route element={<DirectMsgLayout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/me/:id" element={<DirectMessage />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default Routers;
