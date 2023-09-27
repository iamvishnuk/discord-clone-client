import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import Input from "../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../services/api";
import toast from "react-hot-toast";
import { changeUserDetails } from "../store/slice/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("userToken");
        if (token) navigate("/");
    }, []);

    // for handing loing
    const handleLogin = (e) => {
        e.preventDefault();
        userLogin({ email, password })
            .then((res) => {
                localStorage.setItem("userToken", res.data.token);
                dispatch(
                    changeUserDetails({
                        userId: res.data.userId,
                        displayName: res.data.displayName,
                        userName: res.data.userName,
                        image: res.data.image,
                        email: res.data.email,
                    })
                );
                toast.success(res.data.message);
                navigate("/");
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

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
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <span className="text-blue-400 text-xs font-medium hover:underline hover:cursor-pointer">
                                    Forgot your password?
                                </span>
                            </div>
                            <Button
                                customClass={"bg-blue-600"}
                                name={"Login"}
                                type={"submit"}
                                onClick={handleLogin}
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
