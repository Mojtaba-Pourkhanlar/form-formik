import * as Yup from "yup";

export const RegisterValidation = Yup.object().shape({
  name: Yup.string().required("name required"),
  phone: Yup.number().required("Phone required"),
  email: Yup.string()
    .email("Email required")
    .required("Email address is invalid"),
  password: Yup.string()
    .min(6, "Password need to be 6 characters or more")
    .required("Password required"),
  password_confirmation: Yup.string().required(" Password do not match"),
});
