import { defaultProfileImg } from "../../constants/Constant";

const UserDetailsInDM = ({ userDetails }) => {
    return (
        <>
            <div className="text-white p-3">
                <div className="h-full flex flex-col space-y-3">
                    <img
                        src={
                            userDetails?.image
                                ? userDetails?.image
                                : defaultProfileImg
                        }
                        alt=""
                        className="w-20"
                    />
                    <h1 className="text-2xl font-bold pl-3">
                        {userDetails?.displayName}
                    </h1>
                    <h1 className="text-2xl font-medium pl-3">
                        {userDetails?.userName}
                    </h1>
                    <h1 className="text-textColor-gray-2 font-normal tracking-wide pl-3 font-sans">
                        This is the begining of direct message history with{" "}
                        {"display name"}
                    </h1>
                    <h1 className="text-textColor-gray-2 font-sans font-normal tracking-wide pl-3">
                        No Server in common
                    </h1>
                </div>
            </div>
        </>
    );
};

export default UserDetailsInDM;
