import Button from "../components/button/Button";
import Input from "../components/input/input";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <section className="w-screen h-screen bg-img-login-register bg-contain">
                <div className="flex items-center justify-center md:h-screen">
                    <div className="py-10 bg-form-color text-gray-100 px-10 sm:max-w-md w-full rounded-md flex flex-col space-y-6">
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <h1 className="text-2xl text-white font-medium">
                                Welcome back!
                            </h1>
                            <h1 className="font-thin">
                                We're so excited to see you again!
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
                                <span className="text-blue-400 text-xs font-medium hover:underline hover:cursor-pointer">
                                    Forgot your password?
                                </span>
                            </div>
                            <Button
                                customClass={
                                    "bg-blue-600 rounded-sm font-medium py-2.5"
                                }
                                name={"Login"}
                            />
                        </form>
                        <div className="text-sm font-light">
                            Need an account?{" "}
                            <Link to="/register">
                                <span className="text-blue-400 text-sm font-medium hover:underline hover:cursor-pointer">
                                    Register
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
