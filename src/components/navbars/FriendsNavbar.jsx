import { FaUserFriends } from "react-icons/fa";
import { BiSolidHelpCircle, BiMessageAdd } from "react-icons/bi";
import { HiInbox } from "react-icons/hi";
import { Tooltip } from "react-tooltip";

const FriendsNavbar = () => {
    return (
        <>
            <div className=" h-[50px] border-b-[3px] border-border-1 flex justify-between p-5">
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-3">
                        <FaUserFriends size={25} color=" #E0E0E0" />
                        <p className="font-medium text-base tracking-wide text-white">
                            Friends
                        </p>
                    </div>
                    <div className="h-6 w-0.5 bg-gray-700"></div>
                    <div className="flex space-x-3 text-gray-300 font-medium ">
                        <div className="hover:bg-gray-5 hover:cursor-pointer px-3 rounded-md">
                            <h1>Online</h1>
                        </div>
                        <div className="hover:bg-gray-5 hover:cursor-pointer px-3 rounded-md">
                            <h1>All</h1>
                        </div>
                        <div className="hover:bg-gray-5 hover:cursor-pointer px-3 rounded-md">
                            <h1>Peding</h1>
                        </div>
                        <div className="hover:bg-gray-5 hover:cursor-pointer px-3 rounded-md">
                            <h1>Blocked</h1>
                        </div>
                        <div className="hover:cursor-pointer px-3 rounded-md text-white bg-green-600">
                            <button>Add Friend</button>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-5 items-center justify-center">
                    <div
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Create new group"
                    >
                        <BiMessageAdd color="white" size={23} />
                    </div>
                    <div className="h-6 w-0.5 bg-gray-700"></div>
                    <div data-tooltip-id="tooltip" data-tooltip-content="Inbox">
                        <HiInbox color="white" size={25} />
                    </div>
                    <div data-tooltip-id="tooltip" data-tooltip-content="Help">
                        <BiSolidHelpCircle color="white" size={25} />
                    </div>
                </div>
            </div>
            <Tooltip id="tooltip" />
        </>
    );
};

export default FriendsNavbar;
