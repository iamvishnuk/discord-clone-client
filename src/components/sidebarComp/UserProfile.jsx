import { BsFillMicFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { TbHeadset } from "react-icons/tb";
import { useSelector } from "react-redux";

const UserProfile = () => {
    const { displayName } = useSelector((state) => state.user);
    console.log(displayName);

    return (
        <>
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
                        <p className="text-sm">{displayName && displayName}</p>
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
        </>
    );
};

export default UserProfile;
