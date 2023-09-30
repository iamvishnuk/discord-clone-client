import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import Friends from "../sidebarComp/Friends";
import Nitro from "../sidebarComp/Nitro";
import DirectMsgFrndItem from "../sidebarComp/DirectMsgFrndItem";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UserProfile from "../sidebarComp/UserProfile";

const DirectMsgSidebar = () => {
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.directMsg);

    return (
        <>
            <div className="bg-gray-2 w-80 h-screen flex flex-col justify-between">
                <div>
                    {/* Search bar on top of the direct message side bar */}
                    <div className="p-2.5">
                        <input
                            type="search"
                            className="w-full bg-sidebar-bg rounded-md py-1 px-3 text-sm text-white "
                            placeholder="Find or start converstaion"
                        />
                    </div>
                    {/* line */}
                    <div className="h-0.5 w-full bg-sidebar-bg rounded-2xl"></div>
                    <div className="p-2.5 flex flex-col space-y-1">
                        <Friends onClick={() => navigate("/")} />
                        <Nitro />
                    </div>
                    {/* */}
                    <div className="uppercase text-xs font-medium text-[#E0E0E0] tracking-wide flex justify-between items-center mt-3 mx-3">
                        <p>Direct messages</p>
                        <span
                            className="hover:cursor-pointer"
                            data-tooltip-id="tooltip"
                            data-tooltip-content="Create DM"
                        >
                            <AiOutlinePlus size={15} />
                        </span>
                    </div>
                </div>
                {/* Direct messaged friends list */}
                <div className="h-full overflow-x-auto hide-scrollbar">
                    <div className="grid p-1">
                        {data &&
                            data.map((frnd) => (
                                <DirectMsgFrndItem
                                    key={frnd._id}
                                    displayName={frnd.displayName}
                                    image={frnd.image}
                                    onClick={() => navigate(`/me/${frnd._id}`)}
                                />
                            ))}
                    </div>
                </div>
                {/* user profile in the end of the side bar => earphone, mic, setting */}
                <UserProfile />
            </div>
            <Tooltip id="tooltip" />
        </>
    );
};

export default DirectMsgSidebar;
