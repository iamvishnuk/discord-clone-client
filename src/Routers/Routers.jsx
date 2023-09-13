import { Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<div>home</div>} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </>
    );
};

export default Routers;
