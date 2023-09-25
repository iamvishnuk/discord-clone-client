import FriendsNavbar from "../components/navbars/FriendsNavbar";
import AddFriend from "../components/add-friend/AddFriend";
import Pending from "../components/pending/Pending";
import Blocked from "../components/blocked/Blocked";
import Online from "../components/online/Online";
import { useState } from "react";
import All from "../components/all/All";

const Home = () => {
    const [activeTab, setActiveTab] = useState("ONLINE");
    return (
        <>
            <FriendsNavbar setActiveTab={setActiveTab} activeTab={activeTab} />
            {activeTab === "ONLINE" && <Online />}
            {activeTab === "ALL" && <All />}
            {activeTab === "PENDING" && <Pending />}
            {activeTab === "BLOCKED" && <Blocked />}
            {activeTab === "ADD_FRIEND" && <AddFriend />}
        </>
    );
};

export default Home;
