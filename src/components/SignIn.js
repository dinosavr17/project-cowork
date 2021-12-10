import React, {useRef,useState} from "react";
import logo from "./logo.png";
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
export const SignIn = () => {
    const validate = Yup.object({
        email: Yup.string()
            .email('Некорректный email'),
        password: Yup.string()
            .min(6, 'Пароль должен быть как минимум 6 символов')
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
                                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                                        alt="login form"
                                        className="img-fluid"
                                    />

                                </div>

                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src={logo} alt="logo" />
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    email: '',
                                                    password: '',
                                                }}
                                                validationSchema={validate}
                                                onSubmit={values => {
                                                    console.log(values)
                                                }}
                                            >
                                                {formik => (
                                                    <div>
                                                        <h1 className="my-3-lg font-weight-bold .display-4">Войти </h1>
                                                        <Form>
                                                            <TextField name="email" type="email"  placeholder="Enter Email" required/>
                                                            <TextField name="password" type="password" placeholder="Enter Password" required/>
                                                            <button className="btn btn-dark mt-3" type="submit">Сохранить</button>
                                                        </Form>
                                                    </div>
                                                )}
                                            </Formik>
                                            <a className="small text-muted" href="#!">Забыли Пароль?</a>
                                            <p className="mb-5 pb-lg-2 extra">Нет Аккаунта? <a href="#!" className="extra">Зарегистрируйтесь здесь</a></p>
                                            <a href="#!" className="small text-muted">Правила Использования</a><br/>
                                            <a href="#!" className="small text-muted">Политика приватности</a>
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