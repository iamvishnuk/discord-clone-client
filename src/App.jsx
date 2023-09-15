import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routers from "./Routers/Routers";
import {Toaster} from "react-hot-toast"


function App() {
    return (
        <BrowserRouter>
            <Toaster />
            <Routes>
                <Route path="/*" element={<Routers />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
