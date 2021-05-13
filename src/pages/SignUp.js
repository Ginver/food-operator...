import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";

function SignUp() {
    const [registerSuccess, toggleRegisterSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory(); // to push someone to another page to login
    const { handleSubmit, register } = useForm({
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
            <h1>register</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label htmlFor="firstname-field">
                    firstname
                    <input
                        type="text"
                        id="firstname-field"
                        name="firstname"
                        {...register("firstname")}
                    />
                </label>
                <label htmlFor="lastname-field">
                    lastname
                    <input
                        type="text"
                        id="lastname-field"
                        name="lastname"
                        {...register("lastname")}
                    />
                </label>
                <label htmlFor="email-field">
                    email
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
                    />
                </label>

                <label htmlFor="username-field">
                    username
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username")}
                    />
                </label>

                <label htmlFor="password-field">
                    password
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        {...register("password")}
                    />
                </label>
                <button
                    type="submit"
                    className="form-button"
                >
                    Create an account
                </button>

                {registerSuccess && <p>Registration was successful, please log in!</p>}

                {error && (<span className="wrong-registration-error">Something went wrong!</span>)}
                {loading && (<span>Loading...</span>)}

            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;