import AllFrndListItem from "../list-items/AllFrndListItem";
import Socket from "../../socket/SocketInstance";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOnlineUserlist } from "../../store/slice/onlineUserlisSlice";

const Online = () => {
    const [onlineUser, setOnlineUsers] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    const { friends } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // fliter the friends list based on their presence in the OnlineUser state
    useEffect(() => {
        if (friends && friends.length > 0) {
            const filteredFriends = friends.filter((frnd) =>
                onlineUser.includes(frnd._id)
            );
            setOnlineFriends(filteredFriends);
        }
    }, [friends, onlineUser]);

    useEffect(() => {
        // listen for socket event to set the online users
        Socket.on("online-user-list", (users) => {
            console.log(users);
            setOnlineUsers(users);
            dispatch(changeOnlineUserlist(users));
        });

        return () => {
            Socket.off("online-user-list");
        };
    }, [Socket]);

    useEffect(() => {
        Socket.emit("request-online-user-list");
    }, []);

    return (
        <>
            <div className="text-white h-full overflow-hidden p-10">
                <div className="h-full flex flex-col space-y-3">
                    <div className="h-12">
                        <p className="uppercase text-xs font-medium tracking-wide">
                            Online ― {}
                        </p>
                    </div>
                    <div className="h-full">
                        <div className="h-full overflow-x-auto hide-scrollbar">
                            {onlineFriends.length !== 0 &&
                                onlineFriends.map((frnd) => (
                                    <AllFrndListItem
                                        key={frnd._id}
                                        displayName={frnd.displayName}
                                        userId={frnd._id}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Online;
