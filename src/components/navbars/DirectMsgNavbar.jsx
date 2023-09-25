import { BiSolidPhoneCall, BiSolidVideo } from "react-icons/bi";
import { Tooltip } from "react-tooltip";

const DirectMsgNavbar = () => {
    return (
        <>
            <div className=" h-[50px] w-full border-b-[3px] border-border-1 flex justify-between p-5">
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-3 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-7 h-7 fill-gray-400"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <p className="font-medium text-base tracking-wide text-white">
                            DisplayName
                        </p>
                    </div>
                </div>
                <div className="flex space-x-5 items-center justify-center">
                    <div data-tooltip-id="tooltip" data-tooltip-content="Start Voice Call">
                        <BiSolidPhoneCall color="white" size={25} />
                    </div>
                    <div
                        data-tooltip-id="tooltip"
                        data-tooltip-content="Start Video Call"
                    >
                        <BiSolidVideo color="white" size={23} />
                    </div>
                </div>
            </div>
            <Tooltip id="tooltip" />
        </>
    );
};

export default DirectMsgNavbar;
