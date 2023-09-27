import { IoMdClose } from "react-icons/io";
import { defaultProfileImg } from "../../constants/Constant";

const DirectMsgFrndItem = ({ onClick, index, image }) => {
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
                    <p className="font-medium text-gray-300">Friends{index}</p>
                </div>
                <div className="items-center hidden group-hover:flex mr-3">
                    <IoMdClose size={20} color="white" />
                </div>
            </div>
        </>
    );
};

export default DirectMsgFrndItem;
