import { Tooltip } from "react-tooltip";

const AddNewServer = () => {
    return (
        <>
            <div
                className="group bg-gray-1 w-14 h-14 rounded-full flex justify-center items-center transition duration-700 hover:bg-green-1 hover:rounded-2xl"
                data-tooltip-id="newSever"
                data-tooltip-place="right-start"
                data-tooltip-variant="dark"
                data-tooltip-content="Add new server"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 fill-[#23A559] group-hover:fill-white"
                >
                    <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <Tooltip id="newSever" />
        </>
    );
};

export default AddNewServer;
