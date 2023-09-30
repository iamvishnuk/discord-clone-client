import { BiSolidMessageAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { defaultProfileImg } from "../../constants/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addFrndToDmList } from "../../store/slice/directMsgSlice";

const AllFrndListItem = ({ displayName, userId, image }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // getting the value from the store
    const { data } = useSelector((state) => state.directMsg);

    // for handling the onClic
    const handleOnClick = () => {
        if (data) {
            // the userid is already in the store don't call the api
            const find = data.find((d) => d._id === userId);
            if (!find) {
                console.log("this handleOnClick is called");
                dispatch(addFrndToDmList(userId));
            }
        } else {
            dispatch(addFrndToDmList(userId));
        }
        navigate(`/me/${userId}`);
    };

    return (
        <>
            <div
                className="px-2 h-16 border-b border-border-2 transition duration-300 hover:bg-gray-5 hover:rounded-md flex justify-between hover:cursor-pointer"
                onClick={() => handleOnClick()}
            >
                <div className="flex items-center space-x-2">
                    <div>
                        <img
                            src={image ? image : defaultProfileImg}
                            alt=""
                            className="w-10"
                        />
                    </div>
                    <div>
                        <h1>{displayName}</h1>
                    </div>
                </div>
                <div className="flex space-x-3 py-3">
                    <div className="w-10 h-10 p-2 rounded-full bg-gray-2 flex items-center justify-center">
                        <BiSolidMessageAlt size={20} />
                    </div>
                    <div className="w-10 h-10 p-2 rounded-full bg-gray-2 flex items-center justify-center">
                        <BsThreeDotsVertical />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllFrndListItem;
