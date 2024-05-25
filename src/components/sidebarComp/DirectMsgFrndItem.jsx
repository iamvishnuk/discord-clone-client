import { IoMdClose } from "react-icons/io";
import { defaultProfileImg } from "../../constants/Constant";

const DirectMsgFrndItem = ({ onClick, displayName, image, online }) => {
    return (
        <>
            <div
                className="h-11 w-full hover:bg-gray-3 rounded-md flex group hover:cursor-pointer"
                onClick={onClick}
            >
                <div className="h-11 w-20 flex justify-center items-center">
                    <img
                        src={image ? image : defaultProfileImg}
                        alt=""
                        className="w-8"
                    />
                </div>
                <div className="w-full flex items-center">
                    <div>
                        <p className="font-medium text-sm text-gray-300">
                            {displayName}
                        </p>
                        {online ? (
                            <p className="text-xs text-gray-300 flex items-center tracking-wider">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 flex relative">
                                    <div className=" absolute w-2 h-2 bg-green-500 rounded-full mr-1 animate-ping"></div>
                                </div>
                                Online
                            </p>
                        ) : (
                            <p className="text-xs text-gray-300 flex items-center tracking-wider">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
                                Offline
                            </p>
                        )}
                    </div>
                </div>
                <div className="items-center hidden group-hover:flex mr-3">
                    <IoMdClose size={20} color="white" />
                </div>
            </div>
        </>
    );
};

export default DirectMsgFrndItem;
