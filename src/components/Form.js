import React, {useRef,useState} from "react";
import logo from "./logo.png";
export const Form = () => {


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

                                        <form>

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src={logo} alt="logo" />
                                            </div>

                                           <div>
                                               <h5 className="fw-normal mb-3">Войти в Аккаунт
                                            </h5>
                                           </div>

                                            <div className="form-outline">
                                                <i className="icon ion-search placeholder-icon"/>
                                                <input  type="email" id="form2Example17"
                                                       className="form-control form-control-lg"
                                                placeholder="Enter Email"/>
                                                <label className="form-label item item-input" htmlFor="form2Example17"/>
                                            </div>
                                            <div className="form-outline ">
                                                <input  type="password" id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="Enter Password"/>
                                                <i className="icon ion-search placeholder-icon"/>
                                                <label className="form-label item item-input" htmlFor="form2Example27"/>
                                            </div>



                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-lg btn-block" type="button">Войти
                                                </button>
                                            </div>

                                            <a className="small text-muted" href="#!">Забыли Пароль?</a>
                                            <p className="mb-5 pb-lg-2 extra">Нет Аккаунта? <a href="#!" className="extra">Зарегистрируйтесь здесь</a></p>
                                            <a href="#!" className="small text-muted">Правила Использования</a><br/>
                                            <a href="#!" className="small text-muted">Политика приватности</a>

                                        </form>

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