import { BrowserRouter, Route, Routes } from "react-router-dom";
import Routers from "./Routers/Routers";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Routers />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
