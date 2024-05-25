import * as Yup from "yup";

export const registerSchema = Yup.object({
    email: Yup.string().email().required("Please enter a valid email address"),
    displayName: Yup.string()
        .min(3)
        .required("Please enter a valid display name"),
    userName: Yup.string()
        .min(3)
        .required("Please enter a valid user name")
        .matches(/^\S*$/, "Spaces are not allowed in the username"),
    phone: Yup.number().required("Please enter a valid phone number"),
    password: Yup.string().min(8).required("Please enter a valid password"),
});
