import { IoMdRocket } from "react-icons/io";

const Nitro = () => {
    return (
        <>
            <div className="h-11 w-full rounded-md flex hover:bg-gray-3">
                <div className="h-11 w-20 flex justify-center items-center">
                    <IoMdRocket size={27} color="#E0E0E0" />
                </div>
                <div className="w-full flex items-center">
                    <p className="font-medium text-gray-300">Nitro</p>
                </div>
            </div>
        </>
    );
};

export default Nitro;
