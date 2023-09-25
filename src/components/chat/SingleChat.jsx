const SingleChat = () => {
    return (
        <>
            <div className="w-full flex p-2 space-x-2 hover:bg-gray-6">
                <div>
                    <img
                        src="https://www.shareicon.net/data/512x512/2016/09/15/829459_man_512x512.png"
                        alt=""
                        className="w-12"
                    />
                </div>
                <div className="w-full text-white">
                    <div>
                        <h1 className="hover:underline hover:cursor-pointer">
                            Display Name
                        </h1>
                    </div>
                    <div>
                        <h1 className="font-thin font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam ea optio ab deserunt sequi eius? Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit.
                            Magni saepe minima adipisci incidunt similique. Ab
                            nostrum repellendus ducimus doloribus iure.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleChat;
