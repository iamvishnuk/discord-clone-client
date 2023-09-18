const AddFriend = () => {
    return (
        <div className="p-5 border-b border-gray-500">
            <h1 className="uppercase font-medium text-lg text-gray-200">
                add friend
            </h1>
            <p className="text-gray-300 text-xs tracking-wide my-1">
                You can add friends with their Discord username.
            </p>
            <div className="mt-5 active:border rounded-md">
                <div className="container">
                    <div className="relative">
                        <input
                            type="text"
                            className="h-14 w-full pl-5 pr-20 rounded-lg z-0 focus:shadow focus:outline-none bg-sidebar-bg placeholder:text-textColor-gray-1 text-white"
                            placeholder="You can add friends with their Discord username"
                        />
                        <div className="absolute top-2 right-2">
                            <button className="h-10 w-52 text-white rounded-lg bg-blue-1 hover:bg-blue-800">
                                Send Friend Request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFriend;
