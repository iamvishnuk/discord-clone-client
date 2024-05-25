import { useEffect, useState } from "react";
import {
    getPendingRequests,
    acceptFriendRequest,
    rejectFriendRequest,
} from "../../services/api";
import { toast } from "react-hot-toast";
import PendingListItem from "../list-items/PendingListItem";

const Pending = () => {
    const [requests, setRequests] = useState([]);

    // function for getting all pending requests
    const fetchData = () => {
        getPendingRequests().then((req) => setRequests(req.data.request));
    };

    useEffect(() => {
        fetchData();
    }, []);

    // for handling accept friend requests
    const handleAccept = (friendId, requestId) => {
        acceptFriendRequest({ friendId, requestId })
            .then((res) => {
                toast.success(res.data.message);
                fetchData();
            })
            .catch((err) => toast.error(err.response.data.message));
    };

    // for handline reject friend requests
    const handleReject = (requestId) => {
        rejectFriendRequest(requestId)
            .then((res) => {
                toast.success(res.data.message);
                fetchData();
            })
            .catch((err) => toast.error(err.response.data.message));
    };

    return (
        <div className="text-white h-full w-full p-10">
            <div className="h-full flex flex-col space-y-3">
                <div className="h-12">
                    <p className="uppercase text-xs font-medium tracking-wide">
                        Pending ― {requests.length}
                    </p>
                </div>
                <div className="h-full">
                    <div className="h-full overflow-x-auto hide-scrollbar">
                        {requests.length !== 0 &&
                            requests.map((data) => (
                                <PendingListItem
                                    key={data._id}
                                    displayName={data.displayName}
                                    handleAccept={() =>
                                        handleAccept(data.from, data._id)
                                    }
                                    handleReject={() => handleReject(data._id)}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pending;
