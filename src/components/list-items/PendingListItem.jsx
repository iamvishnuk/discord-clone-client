import Button from "../button/Button"

const PendingListItem = ({ displayName, handleAccept, handleReject }) => {
    return (
        <>
            <div className="h-16 border-b border-border-2 transition duration-300 hover:bg-gray-5 hover:rounded-md flex justify-between">
                <div className="flex items-center space-x-2">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-12 h-12 fill-gray-400"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div>
                        <h1>{displayName}</h1>
                    </div>
                </div>
                <div className="flex space-x-3 py-3">
                    <Button
                        customClass={"bg-green-500 px-4 hover:bg-green-600"}
                        onClick={handleAccept}
                    >
                        Accept
                    </Button>
                    <Button
                        customClass={"bg-red-500 px-4 hover:bg-red-600"}
                        onClick={handleReject}
                    >
                        Reject
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PendingListItem;
