import "./App.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import useFormik from "./Hooks/useFormik";
import { motion } from "framer-motion";

function App() {
  const { values, resetForm, validate, handleChange } = useFormik({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted Successfully", values);
    resetForm();
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#181818] p-8 sm:p-0">
      <Formik
        onSubmit={handleSubmit}
        validate={validate}
        initialValues={values}
      >
        {({ errors, touched }) => (
          <motion.div
            initial={{ scale: 0.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="container max-w-[520px]"
          >
            <Form className="flex flex-col gap-4 rounded-[10px]  bg-[#222] shadow-custom p-10 font-quicksand">
              <h1 className="text-center uppercase text-[#0f0] text-4xl pb-4 font-bold">
                sign in
              </h1>
              <div className="flex flex-col gap-0.5">
                <Field
                  name="firstname"
                  placeholder="First Name"
                  className={`rounded p-4 bg-[#333] text-white font-semibold leading-[26px] opacity-75 ${
                    errors.firstname && touched.firstname
                      ? "border-[#FF7979] border-[1px]"
                      : "border[#333]"
                  } `}
                />
                <ErrorMessage
                  name="firstname"
                  component="nav"
                  className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <Field
                  name="lastname"
                  placeholder="Last Name"
                  className={`w-full rounded p-4 bg-[#333] text-white font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.lastname && touched.lastname
                      ? "border-[#FF7979] border-[1px]"
                      : "border[#333] border-1"
                  }`}
                />

                <ErrorMessage
                  name="lastname"
                  component="nav"
                  className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <Field
                  name="email"
                  placeholder="Email Address"
                  className={` w-full rounded p-4 bg-[#333] text-white font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.email && touched.email
                      ? "border-[#FF7979] border-[1px]"
                      : "border[#333] border-1"
                  }`}
                />
                <ErrorMessage
                  name="email"
                  component="nav"
                  className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={` w-full rounded p-4 bg-[#333] text-white font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.password && touched.password
                      ? "border-[#FF7979] border-[1px]"
                      : "border[#333] border-1"
                  }`}
                />
                <ErrorMessage
                  name="password"
                  component="nav"
                  className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
                />
              </div>
              <div className="flex justify-between">
                <div className="text-white cursor-pointer font-medium hover:text-[#ffffffc7]">
                  Forgot Password
                </div>
                <div className="text-[#0f0] hover:text-[#00ff00c3] font-semibold cursor-pointer">
                  Signup
                </div>
              </div>
              <button
                type="submit"
                className="rounded bg-[#0f0] hover:bg-[#00ff008a] text-black tracking-[1px] font-poppins text-[25px] font-semibold leading-[26px] p-4 px-5 lg:px-16"
              >
                Submit
              </button>
            </Form>
          </motion.div>
        )}
      </Formik>
    </div>
  );
}

export default App;
