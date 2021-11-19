import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import logo from "./logo.png";

export const Signup = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email('Некорректный email')
            .required('Email необходим'),
        password: Yup.string()
            .min(6, 'Пароль должен быть как минимум 6 символов')
            .required('Пароль необходим'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
            .required('Подтверждение пароля необходимо'),
    })
    return (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center vh-100">
                    <div className="col col-xl-10">
                        <div className="card" >
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/403-mckinsey-21a1559-a_1.jpg?w=600&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=b94ae03dc5bb809d6cac658031157d2d"
                                        alt="login form"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <img src={logo} alt="logo" />
        <Formik
            initialValues={{
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-3-lg font-weight-bold .display-4">Зарегистрироваться</h1>
                    <Form>
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Пароль" name="password" type="password" />
                        <TextField label="Подтвердите пароль" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Сохранить</button>
                    </Form>
                </div>
            )}
        </Formik>
            </div>
                    </div>
                </div>
            </div>
            </div>
                </div>
            </div>
        </section>
    )
}