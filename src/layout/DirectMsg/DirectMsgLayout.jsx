import { Outlet } from "react-router-dom";
import DirectMsgSidebar from "../../components/sidebars/DirectMsgSidebar";


export const DirectMsgLayout = () => {
    return (
        <>
            <DirectMsgSidebar />
            <div className="w-full h-full flex flex-col bg-gray-4 overflow-hidden"> {/* bg-gray-4 */}
                <Outlet />
            </div>
        </>
    );
};
