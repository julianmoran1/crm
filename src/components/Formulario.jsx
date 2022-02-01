import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import Alert from "./Alert";
import * as Yup from "yup";

export default function Formulario({ title, client }) {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      if (client.id) {
        const url = `http://localhost:4000/clientes/${client.id}`;
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await response.json();
      } else {
        const url = "http://localhost:4000/clientes";

        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };


  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .required("Client's name is mandatory")
      .min(3, "Client's name is too short")
      .max(20, "Client's name is too long"),
    company: Yup.string().required("Client's company is mandatory"),
    email: Yup.string()
      .required("Client's email is mandatory")
      .email("Invalid email"),
    phone: Yup.number()
      .integer("Invalid number")
      .positive("Invalid number")
      .typeError("Invalid phone"),
    notes: "",
  });

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
      <h1 className="text-gray-600 font-bod text-xl uppercase text-center">
        {title}
      </h1>
      <Formik
        initialValues={{
          name: client?.name ?? "",
          company: client?.company ?? "",
          email: client?.email ?? "",
          phone: client?.phone ?? "",
          notes: client?.notes ?? "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
          navigate("/");
        }}
        validationSchema={newClientSchema}
        enableReinitialize={true}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mt-5">
              <label className="text-gray-800" htmlFor="name">
                Name:
              </label>
              <Field
                id="name"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Name"
                name="name"
              />
              {errors.name && touched.name && (
                <Alert>{errors.name}</Alert>
              )}
            </div>
            <div className="mt-5">
              <label className="text-gray-800" htmlFor="company">
                Company:
              </label>
              <Field
                id="company"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Company"
                name="company"
              />

              {errors.company && touched.company && (
                <Alert>{errors.company}</Alert>
              )}
            </div>
            <div className="mt-5">
              <label className="text-gray-800" htmlFor="email">
                Email:
              </label>
              <Field
                id="email"
                type="email"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Email"
                name="email"
              />
              {errors.email && touched.email && <Alert>{errors.email}</Alert>}
            </div>
            <div className="mt-5">
              <label className="text-gray-800" htmlFor="phone">
                Phone:
              </label>
              <Field
                id="phone"
                type="tel"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Phone"
                name="phone"
              />
              {errors.phone && touched.phone && (
                <Alert>{errors.phone}</Alert>
              )}
            </div>
            <div className="mt-5">
              <label className="text-gray-800" htmlFor="notes">
                Notes:
              </label>
              <Field
                as="textarea"
                id="notes"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Notes"
                name="notes"
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
            >
              {title}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

Formulario.defaultProps = {
  client: {},
};
