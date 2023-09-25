import AllFrndListItem from "../list-items/AllFrndListItem";
import { getAllFriends } from "../../services/api";
import { useEffect, useState } from "react";

const All = () => {
    const [allFriends, setAllFriends] = useState([]);

    const fetchData = () => {
        getAllFriends().then((res) => setAllFriends(res.data.friends));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="text-white h-full overflow-hidden p-10">
            <div className="h-full flex flex-col space-y-3">
                <div className="h-12">
                    <p className="uppercase text-xs font-medium tracking-wide">
                        All ― {allFriends.length}
                    </p>
                </div>
                <div className="h-full">
                    <div className="h-full grid overflow-x-auto hide-scrollbar">
                        {allFriends.length !== 0 &&
                            allFriends.map((frnd) => (
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
    );
};

export default All;
