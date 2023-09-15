import Button from "../components/button/Button";
import Input from "../components/input/input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import OTPInput from "react-otp-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { registerSchema } from "../yup";
import { userRegisteration } from "../services/api";

const initialValues = {
    email: "",
    displayName: "",
    userName: "",
    phone: "",
    password: "",
};

const Register = () => {
    const [otp, setOtp] = useState();
    const [showOTP, setShowOTP] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // validate the fields using formik
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: initialValues,
            validationSchema: registerSchema,
            onSubmit: (values, action) => {
                onRegister();
            },
        });

    // captch validation
    const onCaptchVerify = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptch-container",
                { size: "invisible" }
            );
        }
    };

    // function for sending the OTP to the user's device
    const onRegister = (e) => {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        const phone = `+91${values.phone}`;

        signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                toast.success("OTP sended successfully!");
                setLoading(false);
                setShowOTP(true);
            })
            .catch((error) => {
                console.error(error);
                setShowOTP(false);
                setLoading(false);
            });
    };

    // function for verifing the OTP
    const onVerify = (e) => {
        e.preventDefault();
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(() => {
                toast.success("OTP verified successfully");
                setLoading(false);
                onSignUp();
            })
            .catch((error) => {
                toast.error("Something went wrong");
                console.error(error);
                setLoading(false);
                setShowOTP(false);
            });
    };

    const onSignUp = () => {
        userRegisteration(values)
            .then((res) => {
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <section className="w-screen h-screen bg-img-login-register bg-contain">
                <div id="recaptch-container"></div>
                <div className="flex items-center justify-center md:h-screen">
                    <div className="py-10 bg-form-color text-gray-100 px-10 sm:max-w-md w-full rounded-md flex flex-col space-y-6">
                        {showOTP ? (
                            <>
                                <div className="flex flex-col justify-center items-center space-y-3">
                                    <h1 className="text-2xl text-white font-medium">
                                        Opt Verfication
                                    </h1>
                                    <h1 className="font-thin">
                                        Please enter your opt
                                    </h1>
                                </div>
                                <form
                                    action=""
                                    className="mt-8 flex flex-col space-y-5"
                                >
                                    <div className="flex justify-center">
                                        <OTPInput
                                            value={otp}
                                            onChange={setOtp}
                                            numInputs={6}
                                            renderSeparator={
                                                <span>&nbsp;&nbsp;</span>
                                            }
                                            renderInput={(props) => (
                                                <input
                                                    {...props}
                                                    className="h-16 text-black text-center text-xl"
                                                    style={{
                                                        width: "50px",
                                                    }}
                                                />
                                            )}
                                        />
                                    </div>

                                    <button
                                        className="bg-blue-600 rounded-sm font-medium py-2.5 flex justify-center items-center gap-1"
                                        onClick={onVerify}
                                    >
                                        {loading && (
                                            <CgSpinner
                                                size={25}
                                                className="animate-spin"
                                            />
                                        )}
                                        Verify OTP
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <div className="flex justify-center items-center">
                                    <h1 className="text-2xl text-white font-medium">
                                        Create an account
                                    </h1>
                                </div>
                                <form
                                    action=""
                                    className="mt-8 flex flex-col space-y-5"
                                    onSubmit={handleSubmit}
                                >
                                    <div>
                                        {errors.email && touched.email ? (
                                            <label
                                                htmlFor="email"
                                                className="block uppercase mb-2 font-medium text-xs text-red-500"
                                            >
                                                {errors.email}
                                            </label>
                                        ) : (
                                            <label
                                                htmlFor="email"
                                                className="block uppercase mb-2 font-medium text-xs"
                                            >
                                                email
                                            </label>
                                        )}

                                        <Input
                                            type={"email"}
                                            id={"email"}
                                            name={"email"}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            customClass={`${
                                                errors.email && touched.email
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        {errors.displayName &&
                                        touched.displayName ? (
                                            <label
                                                htmlFor="displayName"
                                                className="block uppercase mb-2 font-medium text-xs text-red-500"
                                            >
                                                {errors.displayName}
                                            </label>
                                        ) : (
                                            <label
                                                htmlFor="displayName"
                                                className="block uppercase mb-2 font-medium text-xs"
                                            >
                                                display name
                                            </label>
                                        )}
                                        <Input
                                            type={"text"}
                                            id={"displayName"}
                                            name={"displayName"}
                                            value={values.displayName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            customClass={`${
                                                errors.displayName &&
                                                touched.displayName
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        {errors.userName && touched.userName ? (
                                            <label
                                                htmlFor="userName"
                                                className="block uppercase mb-2 font-medium text-xs text-red-500"
                                            >
                                                {errors.userName}
                                            </label>
                                        ) : (
                                            <label
                                                htmlFor="userName"
                                                className="block uppercase mb-2 font-medium text-xs"
                                            >
                                                username
                                            </label>
                                        )}

                                        <Input
                                            type={"text"}
                                            id={"userName"}
                                            name={"userName"}
                                            value={values.userName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            customClass={`${
                                                errors.userName &&
                                                touched.userName
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        {errors.phone && touched.phone ? (
                                            <label
                                                htmlFor="phone"
                                                className="block uppercase mb-2 font-medium text-xs text-red-500"
                                            >
                                                {errors.phone}
                                            </label>
                                        ) : (
                                            <label
                                                htmlFor="phone"
                                                className="block uppercase mb-2 font-medium text-xs"
                                            >
                                                Phone
                                            </label>
                                        )}

                                        <Input
                                            type={"number"}
                                            id={"phone"}
                                            name={"phone"}
                                            value={values.phone}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            customClass={`${
                                                errors.phone && touched.phone
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <div>
                                        {errors.password && touched.password ? (
                                            <label
                                                htmlFor="phone"
                                                className="block uppercase mb-2 font-medium text-xs text-red-500"
                                            >
                                                {errors.password}
                                            </label>
                                        ) : (
                                            <label
                                                htmlFor="phone"
                                                className="block uppercase mb-2 font-medium text-xs"
                                            >
                                                password
                                            </label>
                                        )}
                                        <Input
                                            type={"password"}
                                            id={"password"}
                                            name={"password"}
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            customClass={`${
                                                errors.password &&
                                                touched.password
                                                    ? "border-2 border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    <Button
                                        customClass={
                                            "bg-blue-600 rounded-sm font-medium py-2.5 flex justify-center items-center gap-1"
                                        }
                                        name={"Continue"}
                                        type={"submit"}
                                    >
                                        {loading && (
                                            <CgSpinner
                                                size={25}
                                                className="animate-spin"
                                            />
                                        )}
                                    </Button>
                                </form>
                            </>
                        )}

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
