import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
import axios from "axios";
import { UserContext } from "../context/UserContext";

function SignIn() {
    const { loginFunc } = useContext(UserContext);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    // const  history = useHistory(); // niet meer nodig, kan weg nadat we het in de context component hebben geplaatsd
    const { handleSubmit, register, formState: { errors } } = useForm({mode: "onBlur"});

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
            <h1 className="page-titles">login</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email-field">
                    email
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        {...register("email", {
                                required: true,
                                validate: (value) => value.includes('@'),
                                message: 'A valid email address should contain @',
                            },
                        )}
                    />
                </label>
                {errors.email && <p>{errors.email.message}</p>}

                <label htmlFor="password-field">
                    password
                    <input
                        type="password"
                        id="password-field"
                        name="password"
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
                {errors.username && <p>{errors.username.message}</p>}

                <button
                    type="submit"
                    className="logging-button"
                >
                    log in
                </button>

                {error && (<span className="wrong-img-error">Oops, something went wrong, please check your email and password!</span>)}
                {loading && (<span>Loading...</span>)}

            </form>
            {/*<p>If you don't have an account please, <Link to="/signup">register </Link> first.</p>*/}
        </>
    );
}

export default SignIn;