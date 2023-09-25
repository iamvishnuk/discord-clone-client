import AddNewServer from "../sidebarComp/AddNewServer";
import Explore from "../sidebarComp/Explore";
import discordIcon from "../../../public/discord-icon-svgrepo-com.svg";
import { Tooltip } from "react-tooltip";

const SidebarMain = () => {
    return (
        <>
            <div className="bg-sidebar-bg h-screen w-20 flex flex-col items-center p-3 space-y-3">
                <div
                    className="p-2.5 bg-gray-1 rounded-2xl hover:bg-white transition duration-700"
                    data-tooltip-id="tooltip"
                    data-tooltip-content="Direct Messages"
                    data-tooltip-place="right"
                >
                    <img
                        src={discordIcon}
                        alt=""
                        className="hover:fill-white"
                    />
                </div>
                <div className="h-0.5 w-10 bg-gray-1 rounded-2xl"></div>
                <AddNewServer />
                <Explore />
            </div>
            <Tooltip id="tooltip" />
        </>
    );
};

export default SidebarMain;
