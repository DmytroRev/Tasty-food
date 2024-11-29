import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
});

const OrderForm = () => {
  const handleSubmit = (values) => {
    console.log("Form data", values);
    alert("Order placed successfully");
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
        {()=> (
            <Form className={css.form}>
                <div className={css.inputGroup}>
                    <label htmlFor="firstName">First name:</label>
                    <Field type='text' id='firstName' name='firstName'/>
                    <ErrorMessage name="firstName" component='div' className={css.error}/>
                </div>
                <div className={css.inputGroup}>
                    <label htmlFor="lastName">Last name:</label>
                    <Field type='text' id='lastName' name='lastName'/>
                    <ErrorMessage name="lastName" component='div' className={css.error}/>
                </div>
                <div className={css.inputGroup}>
                    <label htmlFor="phone">Phone Number:</label>
                    <Field type='tel' id='phone' name='phone'/>
                    <ErrorMessage name="phone" component='div' className={css.error}/>
                </div>
                <div className={css.inputGroup}>
                    <label htmlFor="email">Email:</label>
                    <Field type='email' id='email' name='email'/>
                    <ErrorMessage name="email" component='div' className={css.error}/>
                </div>
                <div className={css.inputGroup}>
                    <label htmlFor="address">Delivery Address:</label>
                    <Field as='textarea' id='address' name='address'/>
                    <ErrorMessage name="address" component='div' className={css.error}/>
                </div>
                <button type="submit" className={css.submitBtn}>
            Place Order
          </button>
            </Form> 
        )}
    </Formik>
  );
};

export default OrderForm;
