import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../context/UserContext";

function SignIn() {
    const { loginFunc } = useContext(UserContext);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    // const  history = useHistory(); // niet meer nodig, kan weg nadat we het in de context component hebben geplaatsd
    const { handleSubmit, register } = useForm();

    async function onSubmit(data) {
        console.log(data);
        setError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('http://localhost:3000/signin', data);
            // console.log(result.data.accessToken);

            loginFunc(result.data.accessToken);

            toggleLoading(false);

        } catch(e) {
            console.error(e)
            setError(e);
            toggleLoading(false);
        }
    }

    return (
        <>
            <h1>login</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    email
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email")}
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
                    login
                </button>

                {error && (<span className="wrong-img-error">Something went wrong!</span>)}
                {loading && (<span>Loading...</span>)}

            </form>
            <p>If you don't have an account please, <Link to="/signup">register </Link> first.</p>
        </>
    );
}

export default SignIn;