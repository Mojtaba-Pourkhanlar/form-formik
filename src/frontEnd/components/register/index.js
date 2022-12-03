import { useState } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { notify, RegisterValidation } from "../../helper";

export const Register = () => {
  const [data] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const submitHandler = async (data) => {
    await axios
      .post("https://apingweb.com/api/register", data)
      .then((response) => {
        if (response.data.status === 200) {
          notify(`${response.data.message} 😉`, "success");
          //   navigate("/login");
        }
      })
      .catch((err) => {
        notify(`${err.response.data.errors[0]} 😒`, "error");
      });
  };

  return (
    <div className="col-md-3">
      <h2 className="my-5 text-success text-center">Sign-up</h2>

      <Formik
        initialValues={data}
        validationSchema={RegisterValidation}
        onSubmit={(values) => submitHandler(values)}>
        <Form>
          <div className="mb-2">
            <Field
              name="name"
              type="text"
              className="form-control"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
          </div>
          <div className="mb-2">
            <Field
              name="phone"
              type="number"
              className="form-control"
              placeholder="Phone"
            />
            <ErrorMessage
              name="phone"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
          </div>
          <div className="mb-2">
            <Field
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
          </div>
          <div className="mb-2">
            <Field
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
          </div>
          <div className="mb-2">
            <Field
              name="password_confirmation"
              type="password"
              className="form-control"
              placeholder="Password Confirmation"
            />
            <ErrorMessage
              name="password_confirmation"
              render={(msg) => <div className="text-danger">{msg}</div>}
            />
          </div>

          <button className="btn btn-primary w-100 my-3" type="submit">
            Signup
          </button>
        </Form>
      </Formik>
    </div>
  );
};
