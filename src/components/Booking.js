import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import logo from "./logo.png";

export const Book = () => {
    const validate = Yup.object({
        date: Yup.date()
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
                                        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-ake3485-num.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&auto=format&ixlib=js-2.2.1&s=93a30971161b37afd4b6af6cd8e735a2"
                                        alt="login form"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <img src={logo} alt="logo" />
                                        <h2>Responsive Table</h2>
                                        <div className="table-wrapper">
                                            <table className="fl-table">
                                                <thead>
                                                <tr>
                                                    <th>Header 1</th>
                                                    <th>Header 2</th>
                                                    <th>Header 3</th>
                                                    <th>Header 4</th>
                                                    <th>Header 5</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>Content 1</td>
                                                    <td>Content 1</td>
                                                    <td>Content 1</td>
                                                    <td>Content 1</td>
                                                    <td>Content 1</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 2</td>
                                                    <td>Content 2</td>
                                                    <td>Content 2</td>
                                                    <td>Content 2</td>
                                                    <td>Content 2</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 3</td>
                                                    <td>Content 3</td>
                                                    <td>Content 3</td>
                                                    <td>Content 3</td>
                                                    <td>Content 3</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 4</td>
                                                    <td>Content 4</td>
                                                    <td>Content 4</td>
                                                    <td>Content 4</td>
                                                    <td>Content 4</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 5</td>
                                                    <td>Content 5</td>
                                                    <td>Content 5</td>
                                                    <td>Content 5</td>
                                                    <td>Content 5</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 6</td>
                                                    <td>Content 6</td>
                                                    <td>Content 6</td>
                                                    <td>Content 6</td>
                                                    <td>Content 6</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 7</td>
                                                    <td>Content 7</td>
                                                    <td>Content 7</td>
                                                    <td>Content 7</td>
                                                    <td>Content 7</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 8</td>
                                                    <td>Content 8</td>
                                                    <td>Content 8</td>
                                                    <td>Content 8</td>
                                                    <td>Content 8</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 9</td>
                                                    <td>Content 9</td>
                                                    <td>Content 9</td>
                                                    <td>Content 9</td>
                                                    <td>Content 9</td>
                                                </tr>
                                                <tr>
                                                    <td>Content 10</td>
                                                    <td>Content 10</td>
                                                    <td>Content 10</td>
                                                    <td>Content 10</td>
                                                    <td>Content 10</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

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