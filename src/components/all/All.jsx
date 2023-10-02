import AllFrndListItem from "../list-items/AllFrndListItem";
import { useSelector } from "react-redux";

const All = () => {
    const { friends } = useSelector((state) => state.user);

    return (
        <div className="text-white h-full overflow-hidden p-10">
            <div className="h-full flex flex-col space-y-3">
                <div className="h-12">
                    <p className="uppercase text-xs font-medium tracking-wide">
                        All ― {friends.length}
                    </p>
                </div>
                <div className="h-full">
                    <div className="h-full grid overflow-x-auto hide-scrollbar">
                        {friends.length !== 0 &&
                            friends.map((frnd) => (
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
