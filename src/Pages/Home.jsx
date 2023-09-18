import discordIcon from "../../public/discord-icon-svgrepo-com.svg";
import AddNewServer from "../components/sidebarComp/AddNewServer";
import Explore from "../components/sidebarComp/Explore";
import { FaUserFriends } from "react-icons/fa";
import { IoMdClose, IoMdRocket } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { BsFillMicFill } from "react-icons/bs";
import { TbHeadset } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import FriendsNavbar from "../components/navbars/FriendsNavbar";
import AddFriend from "../components/add-friend/AddFriend";

const Home = () => {
    return (
        <>
            <section className="h-screen w-screen">
                <div className="flex h-screen w-screen">
                    {/* sidebar */}
                    <div className="bg-sidebar-bg h-screen w-20 flex flex-col items-center p-3 space-y-3">
                        <div className="p-2.5 bg-gray-1 rounded-2xl">
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
                    {/* sidebar 2 */}
                    <div className="bg-gray-2 w-80 h-screen flex flex-col justify-between">
                        <div>
                            <div className="p-2.5">
                                <input
                                    type="search"
                                    className="w-full bg-sidebar-bg rounded-md py-1 px-3 text-sm text-white "
                                    placeholder="Find or start converstaion"
                                />
                            </div>
                            <div className="h-0.5 w-full bg-sidebar-bg rounded-2xl"></div>
                            <div className="p-2.5 flex flex-col space-y-1">
                                <div className="h-11 w-full bg-gray-3 rounded-md flex">
                                    <div className="h-11 w-20 flex justify-center items-center">
                                        <FaUserFriends
                                            size={27}
                                            color=" #E0E0E0"
                                        />
                                    </div>
                                    <div className="w-full flex items-center">
                                        <p className="font-medium text-gray-300">
                                            Friends
                                        </p>
                                    </div>
                                </div>
                                <div className="h-11 w-full rounded-md flex hover:bg-gray-3">
                                    <div className="h-11 w-20 flex justify-center items-center">
                                        <IoMdRocket size={27} color="#E0E0E0" />
                                    </div>
                                    <div className="w-full flex items-center">
                                        <p className="font-medium text-gray-300">
                                            Nitro
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                        {/* Friends */}
                        <div className="h-full overflow-x-auto hide-scrollbar">
                            <div className="grid p-1">
                                {new Array(15).fill(0).map(() => (
                                    <div className="h-11 w-full hover:bg-gray-3 rounded-md flex group">
                                        <div className="h-11 w-20 flex justify-center items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-8 h-8 fill-gray-400"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <p className="font-medium text-gray-300">
                                                Friends
                                            </p>
                                        </div>
                                        <div className="items-center hidden group-hover:flex mr-3">
                                            <IoMdClose
                                                size={20}
                                                color="white"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Friends end */}
                        <div className="h-12 bg-sidebar-bg text-white flex justify-between p-1 space-x-1">
                            <div className=" w-full rounded-md flex justify-start items-center hover:bg-gray-4 p-1 space-x-2">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 fill-gray-400"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="flex flex-col ">
                                    <p className="text-sm">Vishnu K</p>
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>{" "}
                                        <span className="text-xs">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex space-x-1">
                                <div className="hover:bg-gray-4 flex justify-center items-center px-2.5 rounded-md">
                                    <BsFillMicFill size={16} />
                                </div>
                                <div className="hover:bg-gray-4 flex justify-center items-center px-2.5 rounded-md">
                                    <TbHeadset size={20} />
                                </div>
                                <div className="hover:bg-gray-4 flex justify-center items-center px-2.5 rounded-md">
                                    <IoMdSettings size={21} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of sidebar 2 */}
                    <div className="w-full bg-gray-4">
                        <FriendsNavbar />
                        <AddFriend />
                    </div>
                </div>
                <Tooltip id="tooltip" />
            </section>
        </>
    );
};

export default Home;
