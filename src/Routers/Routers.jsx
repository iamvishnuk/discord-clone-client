import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>home</div>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};

export default Routers;
