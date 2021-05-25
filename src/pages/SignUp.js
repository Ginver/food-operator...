import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import './SignUp.css';
import PageHeader from "../components/PageHeader";

function SignUp() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory(); // to push someone to another page to login
    const { handleSubmit, register,  formState: { errors } } = useForm({
        mode: 'onchange'
    });

    async function onSubmit(data) {
        console.log(data);
        setError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('http://localhost:3000/signup',{
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
                username: data.username,
                country: 'Hungary',
            });

            console.log(result);
            toggleRegisterSuccess(true);
            setTimeout(() => {history.push('/signin')
            }, 2000); // handmatig vertragen zodat de user dit ziet voordat ie doorgaat

            toggleLoading(false);

        } catch(e) {
            console.log(e)
            setError(e);
            toggleLoading(false);
        }
    }

    return (
        <>
            <div className="signup-container">

                <PageHeader title="sign up"/>

                <div className="signup-form">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="field-firstname">
                        firstname
                        <input
                            type="text"
                            id="firstname-field"
                            name="firstname"
                            placeholder="first name"
                            {...register("firstname", {
                                required: {
                                    value: true,
                                    message: 'This field should not be empty, please fill in your firstname, e.g. Ester',
                                },
                            })}
                        />
                    </label>
                    {errors.firstname && <p className="error-msg">{errors.firstname.message}</p>}

                    <label htmlFor="lastname-field">
                        lastname
                        <input
                            type="text"
                            id="lastname-field"
                            name="lastname"
                            placeholder="last name"
                            {...register("lastname", {
                                required: {
                                    value: true,
                                    message: 'This field should not be empty, please fill in your lastname, e.g. Mulder',
                                },
                            })}
                        />
                    </label>
                    {errors.lastname && <p className="error-msg">{errors.lastname.message}</p>}

                    <label htmlFor="email-field">
                        email
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            placeholder="jip.koren@gmail.com"
                            {...register("email", {
                                required: true,
                                    validate: (value) => value.includes('@'),
                                    message: 'A valid email address should contain @',
                                },
                            )}
                        />
                    </label>
                    {errors.email && <p className="error-msg">{errors.email.message}</p>}

                    <label htmlFor="username-field">
                        username
                        <input
                            type="text"
                            id="username-field"
                            name="username"
                            placeholder="username"
                            {...register("username", {
                                required: {
                                    value: true,
                                    message: 'This field should not be left empty'
                                },
                            })}
                        />
                    </label>
                    {errors.username && <p className="error-msg">{errors.username.message}</p>}

                    <label htmlFor="password-field">
                        password
                        <input
                            type="password"
                            id="password-field"
                            name="password"
                            placeholder="password"
                            {...register("password", {
                                    required: {
                                        value: true,
                                        min: 8,
                                        message: 'Your password should contain at least one capital letter, a special character and it should be a minimum of 6 characters'
                                    },
                                },
                            )}
                        />
                    </label>
                    {errors.username && <p className="error-msg">{errors.username.message}</p>}

                    <button
                        className="action-button"
                        type="submit"
                    >
                        register
                    </button>

                    {registerSuccess && <p className="error-msg">Registration was successful, please log in!</p>}

                    {error && (<span className="error-msg">Something went wrong!</span>)}
                    {loading && (<span>Loading...</span>)}

                </form>
                </div>

                <p>already have an account? go to
                    <button className="action-button"
                            type="button"
                            onClick={() => history.push('/signin')}
                    >
                    log in
                    </button> or go back to
                    <button className="action-button"
                            type="button"
                            onClick={() => history.push('/home')}
                    >
                        home
                    </button></p>
            </div>
        </>
    );
}

export default SignUp;