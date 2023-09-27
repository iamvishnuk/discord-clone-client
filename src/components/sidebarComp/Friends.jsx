import { FaUserFriends } from "react-icons/fa";

const Friends = ({ onClick }) => {
    return (
        <>
            <div
                className="h-11 w-full bg-gray-3 rounded-md flex hover:cursor-pointer"
                onClick={onClick}
            >
                <div className="h-11 w-20 flex justify-center items-center">
                    <FaUserFriends size={27} color=" #E0E0E0" />
                </div>
                <div className="w-full flex items-center">
                    <p className="font-medium text-gray-300">Friends</p>
                </div>
            </div>
        </>
    );
};

export default Friends;
