const Register = () => {
    return (
        <>
            <section className="w-screen h-screen bg-img-login-register bg-contain">
                <div className="flex items-center justify-center md:h-screen">
                    <div className="py-10 bg-form-color text-gray-100 px-10 sm:max-w-md w-full rounded-md flex flex-col space-y-6">
                        <div className="flex justify-center items-center">
                            <h1 className="text-2xl text-white font-medium">
                                Create an account
                            </h1>
                        </div>
                        <form
                            action=""
                            className="mt-8 flex flex-col space-y-5"
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="bg-input-bg rounded-sm w-full p-2.5 outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="display-name"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    Display name
                                </label>
                                <input
                                    type="text"
                                    id="display-name"
                                    name="display-name"
                                    className="bg-input-bg rounded-sm w-full p-2.5 outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="user-name"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    username
                                </label>
                                <input
                                    type="text"
                                    id="user-name"
                                    name="user-name"
                                    className="bg-input-bg rounded-sm w-full p-2.5 outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    name="phone"
                                    className="bg-input-bg rounded-sm w-full p-2.5 outline-none"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="bg-input-bg rounded-sm w-full p-2.5 outline-none"
                                />
                            </div>
                            <button className="bg-blue-600 rounded-sm font-medium py-2.5">
                                Continue
                            </button>
                        </form>
                        <span className="text-blue-400 text-sm font-medium hover:underline hover:cursor-pointer">
                            Already have an account?
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
