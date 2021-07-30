import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { UserContext } from "../context/UserContext";
import "./SignIn.css";
import SubmitButtons from "../components/SubmitButtons";
import { Redirect } from "react-router-dom";

function SignIn() {
    const {loginFunc, user} = useContext(UserContext);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const {handleSubmit, register, formState: {errors}} = useForm({mode: "onBlur"});

    async function onSubmit(data) {
        // console.log(data);
        setError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signin', data);
            // console.log(result.data.accessToken);
            loginFunc(result.data.accessToken);
            localStorage.setItem('JWT_token', result.data.accessToken)
            toggleLoading(false);

        } catch (e) {
            console.error(e)
            setError(e.response.data);
            toggleLoading(false);
        }
    }

    if (user) {
        return <Redirect to="/overview"/>
    }


    return (
        <>
            <div className="signIn-container">
                <h1>sign in form</h1>
                <div className="signIn-form">
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                                placeholder="e.g. H74gdhTkd"
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

                        <SubmitButtons label="sign in"/>

                        {error && (<span className="error-msg">Oops, something went wrong, please check your email and password!</span>)}
                        {loading && (<span>Loading...</span>)}

                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;