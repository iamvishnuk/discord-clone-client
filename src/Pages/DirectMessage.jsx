import { useParams } from "react-router-dom";
import Message from "../components/message.jsx/Message";
import DirectMsgNavbar from "../components/navbars/DirectMsgNavbar";
import { useEffect } from "react";

const DirectMessage = () => {
    const params = useParams();

    useEffect(() => {
        console.log(params.id);
    }, []);

    return (
        <>
            <DirectMsgNavbar />
            <Message />
        </>
    );
};

export default DirectMessage;
