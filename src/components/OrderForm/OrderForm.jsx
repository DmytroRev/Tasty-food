import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./OrderForm.module.css";
import * as Yup from "yup";
import { FaCcApplePay, FaGooglePay } from "react-icons/fa";
import { TbCreditCardPay } from "react-icons/tb";
import toast from "react-hot-toast";
import { useState } from "react";
import CardInputForm from "../CardInputForm/CardInputForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
});

const stripePromise = loadStripe(
  "pk_test_51QQrkwFWCca8G3bWSzDpD4pvsM2Fi0FtZzZxKRz6eGiroAgj1xy8wY00HQqf5P7axqEhdZsbn08WLKKSKhOJfvPi00a8HVjcFB"
);

const OrderForm = () => {
  const [showCardInput, setShowCardInput] = useState(false);

  const handleSubmit = (values) => {
    console.log("Form data", values);
    alert("Order placed successfully");
  };

const handlePaymentError = () => {
  toast.error("Oops! This is functionality is under development 😞", {
    position: "center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

const toggleCardInputForm = () => {
  setShowCardInput((prevState) => !prevState); // Переключаем отображение формы
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
              <div className={css.containerForm}>
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

          </div>
          <div className={css.btnGroup}>
          <button className={css.btn} onClick={handlePaymentError}><FaCcApplePay className={css.btnIcon}/></button>
          <button className={css.btn} onClick={handlePaymentError}><FaGooglePay className={css.btnIcon}/></button>
          <button className={css.btn} onClick={toggleCardInputForm}><TbCreditCardPay className={css.btnIcon}/></button>
        </div>
        {showCardInput &&        <div className={css.elem}> <Elements stripe={stripePromise}  options={{
        locale: 'en', 
      }}>
          <CardInputForm />
        </Elements></div>}
                        <div className={css.containerForBtnPlace}>
                <button type="submit" className={css.submitBtn}>
            Place Order
          </button>
          </div>
            </Form> 
        )}

    </Formik>
  );
};

export default OrderForm;
