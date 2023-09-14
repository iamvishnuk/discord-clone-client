import Button from "../components/button/Button";
import Input from "../components/input/input";
import { Link } from "react-router-dom";

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
                                <Input
                                    type={"email"}
                                    id={"email"}
                                    name={"email"}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="display-name"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    Display name
                                </label>
                                <Input
                                    type={"text"}
                                    id={"display-name"}
                                    name={"display-name"}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="user-name"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    username
                                </label>
                                <Input
                                    type={"text"}
                                    id={"user-name"}
                                    name={"user-name"}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    Phone
                                </label>
                                <Input
                                    type={"number"}
                                    id={"phone"}
                                    name={"phone"}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block uppercase mb-2 font-medium text-xs"
                                >
                                    password
                                </label>
                                <Input
                                    type={"password"}
                                    id={"password"}
                                    name={"password"}
                                />
                            </div>
                            <Button
                                customClass={
                                    "bg-blue-600 rounded-sm font-medium py-2.5"
                                }
                                name={"continue"}
                            />
                        </form>
                        <Link to="/login">
                            <span className="text-blue-400 text-sm font-medium hover:underline hover:cursor-pointer">
                                Already have an account?
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;
