const UserDetailsInDM = () => {
    return (
        <>
            <div className="text-white p-3">
                <div className="h-full flex flex-col space-y-3">
                    <img
                        src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                        alt=""
                        className="w-20"
                    />
                    <h1 className="text-2xl font-bold pl-3">Display Name</h1>
                    <h1 className="text-2xl font-medium pl-3">User Name</h1>
                    <h1 className="text-textColor-gray-2 font-thin tracking-wide pl-3">
                        This is the begining of direct message history with{" "}
                        {"display name"}
                    </h1>
                    <h1 className="text-textColor-gray-2 font-thin tracking-wide pl-3">
                        No Server in common
                    </h1>
                </div>
            </div>
        </>
    );
};

export default UserDetailsInDM;
